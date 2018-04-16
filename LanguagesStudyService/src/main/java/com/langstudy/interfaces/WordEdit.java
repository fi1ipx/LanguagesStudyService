/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.langstudy.interfaces;

import com.langstudy.objects.Word;

public interface WordEdit {
    void saveWord(Word word);
    void deleteWord(Word word);
    void editWord(Word word);
    void addWord(Word word);
}
