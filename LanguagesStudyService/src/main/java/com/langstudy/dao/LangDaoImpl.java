/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.langstudy.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import com.langstudy.objects.Lang;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

public class LangDaoImpl implements LangDao {
    private static final Logger logger = LoggerFactory.getLogger(WordDaoImpl.class);

    @Autowired
    private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }
    
    @SuppressWarnings("unchecked")
    @Override
    public List<Lang> getLangs() {
        Session session = this.sessionFactory.getCurrentSession();
        logger.info(session.toString());
        List<Lang> langsList = session.createQuery("from Lang").list();
        return langsList;
    }
    
    @Override
    public void addLang(Lang lang) {
        Session session = this.sessionFactory.getCurrentSession();
        session.persist(lang);
    }

    @Override
    public Lang getLang(int langId) {
        Session session = this.sessionFactory.getCurrentSession();
        Lang word = (Lang) session.load(Lang.class, new Integer(langId));
        return word;
    }
}
