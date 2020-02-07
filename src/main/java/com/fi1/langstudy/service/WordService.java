package com.fi1.langstudy.service;

import com.fi1.langstudy.component.WordConverterAndValidatorComponent;
import com.fi1.langstudy.model.ModelExample;
import com.fi1.langstudy.model.ModelWordList;
import com.fi1.langstudy.object.Example;
import com.fi1.langstudy.object.Word;
import com.fi1.langstudy.repository.ExampleRepository;
import com.fi1.langstudy.repository.WordRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.Timestamp;
import java.time.Instant;
import java.util.List;

@Service
@Slf4j
public class WordService {

    private WordRepository wordRepository;
    private ExampleRepository exampleRepository;
    private WordConverterAndValidatorComponent wordConverterAndValidatorComponent;

    public List<Word> findAll() {
        return wordRepository.findAll();
    }

    public Page<Word> getPage(final Pageable pageable) {
        return wordRepository.findAll(pageable);
    }

    public List<Example> findExamples(Long wordId) {
        return exampleRepository.findAllByWordId(wordId);
    }

    public boolean createList(ModelWordList modelWordList) {
        log.info("Creating {}", modelWordList);
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

    @Transactional
    public boolean delete(Long wordId) {
        return wordRepository.deleteWordById(wordId);
    }

    @Transactional
    public Word patch(Long wordId, Word newWord) {
        final Word word = wordRepository.findById(wordId).orElseThrow();
        word.setName(newWord.getName());
        return wordRepository.save(word);
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
