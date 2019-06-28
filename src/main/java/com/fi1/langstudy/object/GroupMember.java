package com.fi1.langstudy.object;

import lombok.AllArgsConstructor;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(schema = "study")
@AllArgsConstructor
public class GroupMember {

    @EmbeddedId
    private GroupMemberId id;

    public GroupMember() {
    }
}
