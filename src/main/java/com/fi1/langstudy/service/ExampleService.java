package com.fi1.langstudy.service;

import com.fi1.langstudy.object.Example;
import com.fi1.langstudy.repository.ExampleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExampleService {

    private ExampleRepository exampleRepository;

    public List<Example> findAll() {
        return exampleRepository.findAll();
    }

    @Autowired
    public void setExampleRepository(ExampleRepository exampleRepository) {
        this.exampleRepository = exampleRepository;
    }
}
