/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.langstudy.dao;

import com.langstudy.objects.Lang;
import com.langstudy.objects.Word;
import java.util.List;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LangDaoImpl implements LangDao {
    private static final Logger logger = LoggerFactory.getLogger(WordDaoImpl.class);
    
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
}
