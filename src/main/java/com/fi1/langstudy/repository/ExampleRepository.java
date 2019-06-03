package com.fi1.langstudy.repository;

import com.fi1.langstudy.object.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExampleRepository extends JpaRepository<Example, Long> {
    List<Example> findAllByWordId(Long wordId);
}
