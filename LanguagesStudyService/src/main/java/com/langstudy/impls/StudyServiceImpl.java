/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.langstudy.impls;

import com.langstudy.dao.LangDao;
import com.langstudy.dao.UserDao;
import com.langstudy.dao.WordDao;
import com.langstudy.interfaces.StudyService;
import com.langstudy.objects.Lang;
import com.langstudy.objects.User;
import com.langstudy.objects.Word;
import java.util.ArrayList;
import java.util.List;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

    
@Service
public class StudyServiceImpl implements StudyService {
    private static final Logger logger = LoggerFactory.getLogger(StudyServiceImpl.class);
    
    private WordDao wordDao;
    private LangDao langDao;
    private UserDao userDao;

    public void setWordDao(WordDao wordDao) {
        this.wordDao = wordDao;
    }

    public void setLangDao(LangDao langDao) {
        this.langDao = langDao;
    }

    public void setUserDao(UserDao userDao) {
        this.userDao = userDao;
    }
    
    @Override
    @Transactional
    public List<Word> getWords() {
        return this.wordDao.getWords();
    }

    @Override
    @Transactional
    public List<Word> getWords(Lang lang) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    @Transactional
    public List<Word> getWords(String def) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    @Transactional
    public List<Word> getWords(Character letter) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    @Transactional
    public List<Word> getFirstNWords(int firstN) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    @Transactional
    public Word getWord(String name) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    @Transactional
    public Word getWord(int wordId) {
        return this.wordDao.getWord(wordId);
    }

    @Override
    @Transactional
    public void saveWord(Word word) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    @Transactional
    public void deleteWord(Word word) {
        this.wordDao.deleteWord(word);
    }

    @Override
    @Transactional
    public void editWord(Word word) {
        this.wordDao.editWord(word);
    }

    @Override
    @Transactional
    public void addWord(Word word) {
        logger.info(word.getName() + " lang id = " + word.getLang().getId());
        this.wordDao.addWord(word);
    }

    @Override
    @Transactional
    public boolean login(User user) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    @Transactional
    public void logout(User user) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    @Transactional
    public List<Lang> getLangs() {
        return this.langDao.getLangs();
    }
    
    @Override
    @Transactional
    public void addLang(Lang lang) {
        this.langDao.addLang(lang);
    }

    @Override
    @Transactional
    public Lang getLang(int langId) {
        return this.langDao.getLang(langId);
    }

    @Override
    @Transactional
    public List<User> getUsers() {
        return this.userDao.getUsers();
    }

    @Override
    @Transactional
    public void addUser(User user) {
        this.userDao.addUser(user);
    }

    @Override
    @Transactional
    public User getUser(String userName) {
        return this.userDao.getUser(userName);
    }

    @Override
    @Transactional
    public void deleteLang(Lang lang) {
        this.langDao.deleteLang(lang);
    }

    @Override
    @Transactional
    public void editLang(Lang lang) {
        this.langDao.editLang(lang);
    }
}
