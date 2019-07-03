package com.fi1.langstudy.repository;

import com.fi1.langstudy.object.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExampleRepository extends JpaRepository<Example, Long> {
    List<Example> findAllByWordId(Long wordId);

    @Modifying
    @Query(nativeQuery = true, value = "DELETE FROM study.example s WHERE s.id = :id")
    void deleteOneExampleById(@Param("id") Long id);
}
