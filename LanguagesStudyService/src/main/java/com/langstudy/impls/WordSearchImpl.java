/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.langstudy.impls;

import com.langstudy.interfaces.WordSearch;
import com.langstudy.objects.Lang;
import com.langstudy.objects.Word;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class WordSearchImpl implements WordSearch {

    @Override
    public List<Word> getWords() {
        Lang engLang = new Lang(1, "English");
        Word word1 = new Word(1, "test", engLang, 1, "Hello world");
        Word word2 = new Word(1, "hello", engLang, 2, "When you meet somebody");
        ArrayList<Word> words = new ArrayList<Word>();
        words.add(word1);
        words.add(word2);
        return words;
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<Word> getWords(Lang lang) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<Word> getWords(String def) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<Word> getWords(Character letter) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<Word> getFirstNWords(int firstN) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Word getWord(String name) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Word getWord(int wordId) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
