package com.fi1.langstudy.repository;

import com.fi1.langstudy.object.GroupMember;
import com.fi1.langstudy.object.GroupMemberId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GroupMemberRepository extends JpaRepository<GroupMember, GroupMemberId> {
}
