package com.fi1.langstudy.repository;


import com.fi1.langstudy.object.Group;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface GroupRepository extends JpaRepository<Group, Long> {

    @Query(nativeQuery = true, value = "select study.drop_group(:id)")
    Boolean deleteGroupById(@Param("id") Long id);
}
