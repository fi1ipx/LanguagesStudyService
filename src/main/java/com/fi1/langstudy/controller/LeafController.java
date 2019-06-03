package com.fi1.langstudy.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LeafController {

    @GetMapping("/")
    public String main() {
        return "index"; //view
    }
}
