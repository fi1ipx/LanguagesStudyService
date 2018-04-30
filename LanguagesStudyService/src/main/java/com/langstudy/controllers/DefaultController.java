/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.langstudy.controllers;

import com.langstudy.dao.WordDaoImpl;
import com.langstudy.impls.StudyServiceImpl;
import com.langstudy.interfaces.StudyService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import com.langstudy.objects.*;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import org.hibernate.ObjectNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Controller
public class DefaultController {
    private static final Logger logger = LoggerFactory.getLogger(WordDaoImpl.class);
    private StudyService studyService;

    @Autowired(required = true)
    @Qualifier(value = "studyService")
    public void setWordService(StudyService wsi) {
        this.studyService = wsi;
    }
    
    @RequestMapping(value = "/admin", method = RequestMethod.GET)
    public String index(ModelMap map) {
        map.addAttribute("editorword", new Word());
        map.addAttribute("language", new Lang());
        map.addAttribute("getWords", this.studyService.getWords());
        map.addAttribute("langList", this.studyService.getLangs());
        map.addAttribute("susersList", this.studyService.getUsers());
        map.addAttribute("lang", new Lang());
        return "admin";
    }
   
    @RequestMapping("/admin/remove/{id}")
    public String removeWord(@PathVariable("id") int id) {
        this.studyService.deleteWord(this.studyService.getWord(id));
        return "redirect:/admin";
    }
    
    @RequestMapping("/admin/removelang/{id}")
    public String removeLang(@PathVariable("id") int id) {
        this.studyService.deleteLang(this.studyService.getLang(id));
        return "redirect:/admin";
    }
    
    @RequestMapping("/admin/edit/{id}")
    public String editWord(@PathVariable("id") int id, ModelMap map) {
        map.addAttribute("editorword", this.studyService.getWord(id));
        map.addAttribute("language", new Lang());
        map.addAttribute("getWords", this.studyService.getWords());
        map.addAttribute("langList", this.studyService.getLangs());
        map.addAttribute("susersList", this.studyService.getUsers());
        map.addAttribute("lang", new Lang());
        return "admin";
    }
    
    @RequestMapping("/admin/editlang/{id}")
    public String editLang(@PathVariable("id") int id, ModelMap map) {
        map.addAttribute("editorword", new Word());
        map.addAttribute("language", this.studyService.getLang(id));
        map.addAttribute("getWords", this.studyService.getWords());
        map.addAttribute("langList", this.studyService.getLangs());
        map.addAttribute("susersList", this.studyService.getUsers());
        map.addAttribute("lang", new Lang());
        return "admin";
    }
    
    @RequestMapping(value = "/admin/words/add", method = RequestMethod.POST)
    public String addWord(@ModelAttribute("editorword") Word editorword,
            @RequestParam("lang.id") int langId) {
        editorword.setLang(this.studyService.getLang(langId));
        if (editorword.getId() == 0)
            this.studyService.addWord(editorword);
        else
            this.studyService.editWord(editorword);
        return "redirect:/admin";
    }
    
    @RequestMapping(value = "/admin/langs/add", method = RequestMethod.POST)
    public String addLang(@ModelAttribute("language") Lang language) {
        if (language.getId() == 0)
            this.studyService.addLang(language);
        else
            this.studyService.editLang(language);
        return "redirect:/admin";
    }
    
    @RequestMapping(value = "/")
    public String showRoot(){
        return "index";
    }
    
    @RequestMapping(value = "/index")
    public String showIndex(){
        return "index";
    }
    
    @RequestMapping("/logout")
    public String showLoggedout(){
        return "logout";
    }
    
    @RequestMapping(value = "/login", method = RequestMethod.GET )
    public String login() {
        return "login";
    }
    
    @RequestMapping(value = "/customer", method = RequestMethod.GET )
    public String logincustomer() {
        return "customer";
    }
    
    @RequestMapping(value = "/testpath", method = RequestMethod.GET )
    public String testPath() {
        return "signup";
    }
            
    @RequestMapping(value = "/signup", method = RequestMethod.GET )
    public String signUp() {
        return "signup";
    }
    
    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public String registerCustomer(ModelMap map, @RequestParam("user_email") String userEmail,
            @RequestParam("password") String password,
            @RequestParam("password_confirm") String passwordConfirm) {
        // Check input data
        // if e-mail and password correct send user activation e-mail
        // if password incorrect, send user error 
        if (userEmail.length() > 0 && password.length() > 0 &&  passwordConfirm.length() > 0) {
            try {
                InternetAddress internetAddress = new InternetAddress(userEmail);
                internetAddress.validate();
            } catch (AddressException e) {
                map.put("error", "Email is not valid");
                return "signup";
            }
            // Try to find user with the same name
            boolean newUser = false;
            try {
                User fUser = this.studyService.getUser(userEmail);
                fUser.isEnabled();
            } catch (Exception e) {
                logger.info(e.getMessage());
                newUser = true;
            }
            if (!newUser) {
                map.put("error", "This e-mail alredy registred");
                return "signup";
            } else {
                logger.info("This email not registred");
            }
            if (!password.equals(passwordConfirm)) {
                map.put("error", "Passwords doesn't match");
                return "signup";
            }
            User user = new User();
            user.setUserName(userEmail);
            user.setEnabled(true);
            PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
            password = passwordEncoder.encode(password);
            user.setPassword(password);
            this.studyService.addUser(user);
            GroupMember groupMember = new GroupMember();
            groupMember.setGroupId(1);
            groupMember.setUserName(userEmail);
            this.studyService.addGroupMember(groupMember);
            map.put("email", userEmail);
            return "checkmail";
        }
        else {
            map.put("error", "Enter valid e-mail, password and password confirmation.");
            return "signup";
        }
    }
}