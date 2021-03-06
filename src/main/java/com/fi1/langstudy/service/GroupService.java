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

import javax.transaction.Transactional;
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

    public boolean createGroup(ModelGroup modelGroup) {
        final Group group = new Group();
        group.setCreatedAt(Timestamp.from(Instant.now()));
        group.setName(modelGroup.getName());
        groupRepository.save(group);
        return true;
    }

    public boolean addMembersToGroup(ModelMemberGroup modelMemberGroup) {
        modelMemberGroup.getWordIds().forEach(wordId -> saveGroupMember(wordId, modelMemberGroup.getGroupId()));
        return true;
    }

    @Transactional
    public boolean delete(Long id) {
        return groupRepository.deleteGroupById(id);
    }

    private void saveGroupMember(Long wordId, Long groupId) {
        final GroupMemberId groupMemberId = new GroupMemberId(groupId, wordId);
        final GroupMember groupMember = new GroupMember(groupMemberId);
        groupMemberRepository.save(groupMember);
    }

    @Autowired
    public void setGroupRepository(GroupRepository groupRepository) {
        this.groupRepository = groupRepository;
    }

    @Autowired
    public void setGroupMemberRepository(GroupMemberRepository groupMemberRepository) {
        this.groupMemberRepository = groupMemberRepository;
    }
}
