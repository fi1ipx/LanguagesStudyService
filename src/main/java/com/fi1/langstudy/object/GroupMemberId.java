package com.fi1.langstudy.object;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
@Data
public class GroupMemberId implements Serializable {
    @Column(name = "group_id")
    private Long groupId;

    @Column(name = "word_id")
    private Long wordId;

    public GroupMemberId(Long groupId, Long wordId) {
        this.groupId = groupId;
        this.wordId = wordId;
    }

    public GroupMemberId() {
    }
}
