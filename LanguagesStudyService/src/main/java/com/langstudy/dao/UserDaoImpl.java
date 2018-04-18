/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.langstudy.dao;

import com.langstudy.objects.User;
import java.util.List;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

public class UserDaoImpl implements UserDao{
    private static final Logger logger = LoggerFactory.getLogger(WordDaoImpl.class);

    @Autowired
    private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }
    
    @SuppressWarnings("unchecked")
    @Override
    public List<User> getUsers() {
        Session session = this.sessionFactory.getCurrentSession();
        logger.info("Trying get users");
        List<User> usersList = session.createQuery("from User").list();
        return usersList;
    }

    @Override
    public void addUser(User user) {
        Session session = this.sessionFactory.getCurrentSession();
        session.persist(user);
    }

    @Override
    public User getUser(int userId) {
        Session session = this.sessionFactory.getCurrentSession();
        User user = (User) session.load(User.class, new Integer(userId));
        return user;
    }
}
