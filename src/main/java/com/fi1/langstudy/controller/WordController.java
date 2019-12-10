package com.fi1.langstudy.controller;

import com.fi1.langstudy.model.ModelExample;
import com.fi1.langstudy.model.ModelWordList;
import com.fi1.langstudy.object.Example;
import com.fi1.langstudy.object.Word;
import com.fi1.langstudy.service.WordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(maxAge = WordController.MAX_AGE)
@RequestMapping("/api/word")
public class WordController {

    public static final int MAX_AGE = 3600;
    private WordService wordService;

    @GetMapping(value = {"/", ""})
    public ResponseEntity<Object> getPage(final Pageable pageable) {
        return new ResponseEntity<>(wordService.getPage(pageable), HttpStatus.OK);
    }

    @GetMapping({"/{id}/examples/", "/{id}/examples"})
    public List<Example> findExamples(@PathVariable("id") final Long wordId) {
        return wordService.findExamples(wordId);
    }

    @GetMapping({"/{id}/", "/{id}"})
    public Word findById(@PathVariable("id") final Long wordId) {
        return wordService.findById(wordId);
    }

    @DeleteMapping({"/{id}/", "/{id}"})
    public ResponseEntity<Object> delete(@PathVariable("id") final Long wordId) {
        return new ResponseEntity<>(wordService.delete(wordId), HttpStatus.OK);
    }

    @PatchMapping({"/{id}/", "/{id}"})
    public ResponseEntity<Object> patch(@PathVariable("id") final Long wordId,
                                        @RequestBody final Word newWord) {
        return new ResponseEntity<>(wordService.patch(wordId, newWord), HttpStatus.OK);
    }

    @PostMapping({"/example/", "/example"})
    public ResponseEntity<Object> createExample(@RequestBody final ModelExample modelExample) {
        return new ResponseEntity<>(wordService.createExample(modelExample), HttpStatus.OK);
    }

    @PostMapping(value = {"/create-word-list/", "/create-word-list"})
    public ResponseEntity<Object> createWordList(@RequestBody final ModelWordList modelWordList) {
        return new ResponseEntity<>(wordService.createList(modelWordList), HttpStatus.OK);
    }

    @Autowired
    public void setWordService(WordService wordService) {
        this.wordService = wordService;
    }
}
