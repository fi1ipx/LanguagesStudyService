/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.langstudy.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;
import com.langstudy.objects.Lang;
import com.langstudy.objects.Word;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class WordDaoImpl implements WordDao{
    private static final Logger logger = LoggerFactory.getLogger(WordDaoImpl.class);
    
    private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }
    
    @SuppressWarnings("unchecked")
    @Override
    public List<Word> getWords() {
        Session session = this.sessionFactory.getCurrentSession();
        logger.info(session.toString());
        List<Word> wordsList = session.createQuery("from Word").list();
        return wordsList;
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
