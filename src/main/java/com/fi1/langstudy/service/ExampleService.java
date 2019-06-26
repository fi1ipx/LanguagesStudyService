package com.fi1.langstudy.service;

import com.fi1.langstudy.model.ModelForListExample;
import com.fi1.langstudy.object.Example;
import com.fi1.langstudy.repository.ExampleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class ExampleService {

    private ExampleRepository exampleRepository;

    public List<ModelForListExample> findAll() {
        List<ModelForListExample> modelForListExamples = new ArrayList<>();
        List<Example> examples = exampleRepository.findAll();
        Collections.reverse(examples);
        examples.forEach(v -> modelForListExamples.add(this.convertExample(v)));
        return modelForListExamples;
    }

    private ModelForListExample convertExample(Example example) {
        ModelForListExample model = new ModelForListExample();
        model.setId(example.getId());
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
