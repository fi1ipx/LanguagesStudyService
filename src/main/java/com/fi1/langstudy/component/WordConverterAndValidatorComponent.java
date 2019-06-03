package com.fi1.langstudy.component;

import com.fi1.langstudy.model.WordList;
import com.fi1.langstudy.object.Word;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.List;
import java.util.StringTokenizer;
import java.util.stream.Collectors;

@Component
public class WordConverterAndValidatorComponent {

    public List<Word> pullWordList(WordList wordList) {
        return Collections
                .list(new StringTokenizer(wordList.getWords(), "\n"))
                .stream().map(token -> {
                    // TODO add duplicate checking
                    Word word = new Word();
                    word.setName((String) token);
                    return word;
                })
                .collect(Collectors.toList());
    }

}
