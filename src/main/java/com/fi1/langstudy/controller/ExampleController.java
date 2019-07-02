package com.fi1.langstudy.controller;

import com.fi1.langstudy.model.ModelForListExample;
import com.fi1.langstudy.service.ExampleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(maxAge = ExampleController.MAX_AGE)
@RequestMapping("/api/example")
public class ExampleController {

    public static final int MAX_AGE = 3600;
    private ExampleService exampleService;

    @GetMapping(value = {"/", ""})
    public List<ModelForListExample> findAll() {
        return exampleService.findAll();
    }

    @Autowired
    public void setExampleService(ExampleService exampleService) {
        this.exampleService = exampleService;
    }
}
