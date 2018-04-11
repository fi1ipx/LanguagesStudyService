/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.langstudy.interfaces;

import com.langstudy.objects.Lang;
import com.langstudy.objects.Word;
import java.util.List;

public interface WordSearch {
    List<Word> getWords();
    List<Word> getWords(Lang lang);
    List<Word> getWords(String def);
    List<Word> getWords(Character letter);
    List<Word> getFirstNWords(int firstN);
    Word getWord(String name);
    Word getWord(int wordId);
}
