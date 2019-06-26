package com.fi1.langstudy.repository;

import com.fi1.langstudy.object.Word;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface WordRepository extends JpaRepository<Word, Long>,
        PagingAndSortingRepository<Word, Long> {
    List<Word> findAll();

    Optional<Word> findByName(String name);
}
