/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.langstudy.interfaces;

import com.langstudy.objects.Lang;
import java.util.List;

public interface Languages {
    List<Lang> getLangs();
    void addLang(Lang lang);
    public Lang getLang(int langId);
}
