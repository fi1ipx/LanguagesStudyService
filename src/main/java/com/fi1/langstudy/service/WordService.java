package com.fi1.langstudy.service;

import com.fi1.langstudy.component.WordConverterAndValidatorComponent;
import com.fi1.langstudy.model.ModelExample;
import com.fi1.langstudy.model.ModelWordList;
import com.fi1.langstudy.object.Example;
import com.fi1.langstudy.object.Word;
import com.fi1.langstudy.repository.ExampleRepository;
import com.fi1.langstudy.repository.WordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.List;

@Service
public class WordService {

    private WordRepository wordRepository;
    private ExampleRepository exampleRepository;
    private WordConverterAndValidatorComponent wordConverterAndValidatorComponent;

    public List<Word> findAll() {
        return wordRepository.findAll();
    }

    public List<Example> findExamples(Long wordId) {
        return exampleRepository.findAllByWordId(wordId);
    }

    public boolean createList(ModelWordList modelWordList) {
        wordRepository.saveAll(wordConverterAndValidatorComponent.pullWordList(modelWordList));
        return true;
    }

    public boolean createExample(ModelExample modelExample) {
        final Example example = new Example();
        example.setText(modelExample.getText());
        example.setWord(wordRepository.getOne(modelExample.getWordId()));
        example.setCreatedAt(Timestamp.from(Instant.now()));
        exampleRepository.save(example);
        return true;
    }

    public Word findById(Long id) {
        return wordRepository.findById(id).orElseThrow();
    }

    public boolean delete(Long wordId) {
        // TODO
        return true;
    }

    @Autowired
    public void setWordRepository(WordRepository wordRepository) {
        this.wordRepository = wordRepository;
    }

    @Autowired
    public void setExampleRepository(ExampleRepository exampleRepository) {
        this.exampleRepository = exampleRepository;
    }

    @Autowired
    public void setWordConverterAndValidatorComponent(
            WordConverterAndValidatorComponent wordConverterAndValidatorComponent) {
        this.wordConverterAndValidatorComponent = wordConverterAndValidatorComponent;
    }
}
