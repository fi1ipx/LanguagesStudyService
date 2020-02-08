package com.fi1.langstudy.controller;

import com.fi1.langstudy.model.ModelForListExample;
import com.fi1.langstudy.object.Example;
import com.fi1.langstudy.service.ExampleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
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

    @DeleteMapping({"/{id}/", "/{id}"})
    public ResponseEntity<Object> delete(@PathVariable("id") final Long id) {
        return new ResponseEntity<>(exampleService.delete(id), HttpStatus.OK);
    }

    @PatchMapping({"/{id}/", "/{id}"})
    public ResponseEntity<Object> patch(@PathVariable("id") final Long id,
                                        @RequestBody final Example example) {
        return new ResponseEntity<>(exampleService.patch(id, example), HttpStatus.OK);
    }

    @Autowired
    public void setExampleService(ExampleService exampleService) {
        this.exampleService = exampleService;
    }
}
