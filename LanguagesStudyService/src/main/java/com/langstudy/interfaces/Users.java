/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.langstudy.interfaces;

import com.langstudy.objects.User;
import java.util.List;

public interface Users {
    List<User> getUsers();
    void addUser(User user);
    public User getUser(String userName);
}
