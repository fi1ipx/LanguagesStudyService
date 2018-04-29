/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.langstudy.dao;

import com.langstudy.objects.Lang;
import com.langstudy.objects.Word;
import java.util.List;

public interface LangDao {
    public List<Lang> getLangs();
    public void addLang(Lang lang);
    public void deleteLang(Lang lang);
    public void editLang(Lang lang);
    public Lang getLang(int langId);
}
