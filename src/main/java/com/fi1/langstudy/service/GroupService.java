package com.fi1.langstudy.service;

import com.fi1.langstudy.model.ModelGroup;
import com.fi1.langstudy.model.ModelMemberGroup;
import com.fi1.langstudy.object.Group;
import com.fi1.langstudy.object.GroupMember;
import com.fi1.langstudy.object.GroupMemberId;
import com.fi1.langstudy.repository.GroupMemberRepository;
import com.fi1.langstudy.repository.GroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.List;

@Service
public class GroupService {

    private GroupRepository groupRepository;
    private GroupMemberRepository groupMemberRepository;

    public List<Group> findAll() {
        return groupRepository.findAll();
    }

    @Autowired
    public void setGroupRepository(GroupRepository groupRepository) {
        this.groupRepository = groupRepository;
    }

    @Autowired
    public void setGroupMemberRepository(GroupMemberRepository groupMemberRepository) {
        this.groupMemberRepository = groupMemberRepository;
    }

    public boolean createGroup(ModelGroup modelGroup) {
        Group group = new Group();
        group.setCreatedAt(Timestamp.from(Instant.now()));
        group.setName(modelGroup.getName());
        groupRepository.save(group);
        return true;
    }

    public boolean addMembersToGroup(ModelMemberGroup modelMemberGroup) {
        System.out.println("modelMemberGroup");
        System.out.println(modelMemberGroup);
        modelMemberGroup.getWordIds().forEach(wordId -> saveGroupMember(wordId, modelMemberGroup.getGroupId()));
        return true;
    }

    private void saveGroupMember(Long wordId, Long groupId) {
        GroupMemberId groupMemberId = new GroupMemberId(groupId, wordId);
        GroupMember groupMember = new GroupMember(groupMemberId);
        groupMemberRepository.save(groupMember);
    }
}
