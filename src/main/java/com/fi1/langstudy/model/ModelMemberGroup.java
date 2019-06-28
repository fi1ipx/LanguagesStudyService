package com.fi1.langstudy.model;

import lombok.Data;

import java.util.List;

@Data
public class ModelMemberGroup {
    private Long groupId;
    private List<Long> wordIds;
}
