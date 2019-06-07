package com.fi1.langstudy.component;

import com.fi1.langstudy.model.ModelWordList;
import com.fi1.langstudy.object.Word;
import com.fi1.langstudy.repository.WordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.Collections;
import java.util.List;
import java.util.StringTokenizer;
import java.util.stream.Collectors;

@Component
public class WordConverterAndValidatorComponent {

    private WordRepository wordRepository;

    public List<Word> pullWordList(ModelWordList modelWordList) {
        Timestamp now = Timestamp.from(Instant.now());
        return Collections
                .list(new StringTokenizer(modelWordList.getWords(), "\n"))
                .stream().map(token -> {
                    String wordName = (String) token;
                    if (wordRepository.findByName(wordName).isEmpty()) {
                        Word word = new Word();
                        word.setCreatedAt(now);
                        word.setName(wordName);
                        return word;
                    } else {
                        return wordRepository.findByName(wordName).orElseThrow();
                    }
                })
                .collect(Collectors.toList());
    }

    @Autowired
    public void setWordRepository(WordRepository wordRepository) {
        this.wordRepository = wordRepository;
    }
}
