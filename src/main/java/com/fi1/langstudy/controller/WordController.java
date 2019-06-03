package com.fi1.langstudy.controller;

import com.fi1.langstudy.model.WordList;
import com.fi1.langstudy.object.Example;
import com.fi1.langstudy.object.Word;
import com.fi1.langstudy.service.WordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(maxAge = 3600)
@RequestMapping("/api/word")
public class WordController {

    private WordService wordService;

    @GetMapping(value = {"/", ""})
    public List<Word> findAll() {
        return wordService.findAll();
    }

    @GetMapping({"/{id}/examples/", "/{id}/examples"})
    public List<Example> findExamples(@PathVariable("id") final Long wordId) {
        return wordService.findExamples(wordId);
    }

    @PostMapping({"/example/", "/example"})
    public ResponseEntity<Object> createExample(@RequestBody final Example example) {
        return new ResponseEntity<>(wordService.createExample(example), HttpStatus.OK);
    }

    @PostMapping(value = {"/create-word-list/", "/create-word-list"})
    public ResponseEntity<Object> createWordList(@RequestBody final WordList wordList) {
        return new ResponseEntity<>(wordService.createList(wordList), HttpStatus.OK);
    }

    @Autowired
    public void setWordService(WordService wordService) {
        this.wordService = wordService;
    }
}
