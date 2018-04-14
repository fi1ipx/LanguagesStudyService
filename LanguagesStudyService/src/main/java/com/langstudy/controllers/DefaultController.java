/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.langstudy.controllers;

import com.langstudy.impls.WordSearchImpl;
import com.langstudy.interfaces.WordSearch;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import com.langstudy.objects.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

@Controller
//@RequestMapping("/")
public class DefaultController {
    private WordSearch wordSearch;

    @Autowired(required = true)
    @Qualifier(value = "wordSearch")
    public void setWordService(WordSearch wsi) {
        this.wordSearch = wsi;
    }
    
   @RequestMapping(value = "/", method = RequestMethod.GET)
   public String index(ModelMap map) {
       map.addAttribute("word", new Word());
       map.addAttribute("getWords", this.wordSearch.getWords());
       map.put("msg", "Hello Spring 4 Web MVC!");
       return "index";
   }
    
}
