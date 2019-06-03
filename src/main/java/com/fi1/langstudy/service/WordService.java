package com.fi1.langstudy.service;

import com.fi1.langstudy.component.WordConverterAndValidatorComponent;
import com.fi1.langstudy.model.WordList;
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

    public boolean createList(WordList wordList) {
        wordRepository.saveAll(wordConverterAndValidatorComponent.pullWordList(wordList));
        return true;
    }

    public Example createExample(Example example) {
        example.setCreatedAt(Timestamp.from(Instant.now()));
        return exampleRepository.save(example);
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
