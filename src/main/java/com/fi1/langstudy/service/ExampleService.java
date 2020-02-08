package com.fi1.langstudy.service;

import com.fi1.langstudy.model.ModelForListExample;
import com.fi1.langstudy.object.Example;
import com.fi1.langstudy.repository.ExampleRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.Timestamp;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
@Slf4j
public class ExampleService {

    private ExampleRepository exampleRepository;

    public List<ModelForListExample> findAll() {
        log.info("Trying to find all examples");
        final List<ModelForListExample> modelForListExamples = new ArrayList<>();
        final List<Example> examples = exampleRepository.findAll();
        Collections.reverse(examples);
        examples.forEach(v -> modelForListExamples.add(this.convertExample(v)));
        return modelForListExamples;
    }

    @Transactional
    public boolean delete(Long id) {
        log.info("Deleting example with id = {}", id);
        exampleRepository.deleteOneExampleById(id);
        return true;
    }

    @Transactional
    public Example patch(Long id, Example newExample) {
        log.info("Changing example with id = {} on {}", id, newExample.getText());
        final Example example = exampleRepository.getOne(id);
        example.setText(newExample.getText());
        example.setCreatedAt(Timestamp.from(Instant.now()));
        return exampleRepository.save(example);
    }

    private ModelForListExample convertExample(Example example) {
        final ModelForListExample model = new ModelForListExample();
        model.setId(example.getId());
        model.setWordId(example.getWord().getId());
        model.setCreatedAt(example.getCreatedAt());
        model.setText(example.getText());
        model.setWord(example.getWord().getName());
        model.setWordCreatedAt(example.getWord().getCreatedAt());
        return model;
    }

    @Autowired
    public void setExampleRepository(ExampleRepository exampleRepository) {
        this.exampleRepository = exampleRepository;
    }
}
