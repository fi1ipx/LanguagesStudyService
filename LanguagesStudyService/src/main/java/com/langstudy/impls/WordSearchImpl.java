/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.langstudy.impls;

import com.langstudy.dao.LangDao;
import com.langstudy.dao.WordDao;
import com.langstudy.interfaces.WordSearch;
import com.langstudy.objects.Lang;
import com.langstudy.objects.Word;
import java.util.ArrayList;
import java.util.List;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

    
@Service
public class WordSearchImpl implements WordSearch {
    private static final Logger logger = LoggerFactory.getLogger(WordSearchImpl.class);
    
    private WordDao wordDao;

    public void setWordDao(WordDao wordDao) {
        this.wordDao = wordDao;
    }
    
    @Override
    @Transactional
    public List<Word> getWords() {
        logger.info("preved medved");
        System.out.println(wordDao.toString());
        return this.wordDao.getWords();
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
