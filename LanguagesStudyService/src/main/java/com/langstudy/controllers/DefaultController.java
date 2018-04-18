/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.langstudy.controllers;

import com.langstudy.impls.StudyServiceImpl;
import com.langstudy.interfaces.StudyService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import com.langstudy.objects.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class DefaultController {
    private StudyService studyService;

    @Autowired(required = true)
    @Qualifier(value = "studyService")
    public void setWordService(StudyService wsi) {
        this.studyService = wsi;
    }
    
   @RequestMapping(value = "/", method = RequestMethod.GET)
   public String index(ModelMap map) {
       map.addAttribute("editorword", new Word());
       map.addAttribute("language", new Lang());
       map.addAttribute("getWords", this.studyService.getWords());
       map.addAttribute("langList", this.studyService.getLangs());
       map.addAttribute("usersList", this.studyService.getUsers());
       map.addAttribute("lang", new Lang());
       map.put("msg", "Hello Spring 4 Web MVC!");
       return "index";
   }
   
   @RequestMapping("/remove/{id}")
    public String removeWord(@PathVariable("id") int id) {
        this.studyService.deleteWord(this.studyService.getWord(id));

        return "redirect:/";
    }
    
    @RequestMapping("edit/{id}")
    public String editWord(@PathVariable("id") int id, ModelMap map) {
       map.addAttribute("editorword", new Word());
       map.addAttribute("language", new Lang());
       map.addAttribute("getWords", this.studyService.getWords());
       map.addAttribute("langList", this.studyService.getLangs());
       map.addAttribute("usersList", this.studyService.getUsers());
       map.addAttribute("lang", new Lang());
        return "index";
    }
    
    @RequestMapping(value = "/words/add", method = RequestMethod.POST)
    public String addWord(@ModelAttribute("editorword") Word editorword,
            @RequestParam("lang.id") int langId) {
        editorword.setLang(this.studyService.getLang(langId));
        if (editorword.getId() == 0)
            this.studyService.addWord(editorword);
        else
            this.studyService.editWord(editorword);
        
        return "redirect:/";
    }
    
    @RequestMapping(value = "/langs/add", method = RequestMethod.POST)
    public String addLang(@ModelAttribute("language") Lang language) {
        this.studyService.addLang(language);
        return "redirect:/";
    }
    
    @RequestMapping("/logout")
    public String showLoggedout(){
        return "logout";
    }
}
