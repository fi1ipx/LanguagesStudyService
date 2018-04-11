/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.langstudy.objects;

public class Word {
    private int id;
    private String name;
    private Lang lang;
    private int rank;
    private String defenition;

    public Word(int id, String name, Lang lang, int rank, String defenition) {
        this.id = id;
        this.name = name;
        this.lang = lang;
        this.rank = rank;
        this.defenition = defenition;
    }

    public Word() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Lang getLang() {
        return lang;
    }

    public void setLang(Lang lang) {
        this.lang = lang;
    }

    public int getRank() {
        return rank;
    }

    public void setRank(int rank) {
        this.rank = rank;
    }

    public String getDefenition() {
        return defenition;
    }

    public void setDefenition(String defenition) {
        this.defenition = defenition;
    }
}
