package com.fi1.langstudy.controller;

import com.fi1.langstudy.model.ModelGroup;
import com.fi1.langstudy.model.ModelMemberGroup;
import com.fi1.langstudy.object.Group;
import com.fi1.langstudy.service.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(maxAge = GroupController.MAX_AGE)
@RequestMapping("/api/group")
public class GroupController {

    public static final int MAX_AGE = 3600;
    private GroupService groupService;

    @GetMapping(value = {"/", ""})
    public List<Group> findAll() {
        return groupService.findAll();
    }

    @DeleteMapping({"/{id}/", "/{id}"})
    public ResponseEntity<Object> delete(@PathVariable("id") final Long id) {
        return new ResponseEntity<>(groupService.delete(id), HttpStatus.OK);
    }

    @PostMapping(value = {"/", ""})
    public ResponseEntity<Object> createGroup(@RequestBody final ModelGroup modelGroup) {
        return new ResponseEntity<>(groupService.createGroup(modelGroup), HttpStatus.OK);
    }

    @PostMapping(value = {"/add-group-members/", "/add-group-members"})
    public ResponseEntity<Object> addMembersToGroup(@RequestBody final ModelMemberGroup modelMemberGroup) {
        return new ResponseEntity<>(groupService.addMembersToGroup(modelMemberGroup), HttpStatus.OK);
    }

    @Autowired
    public void setGroupService(GroupService groupService) {
        this.groupService = groupService;
    }
}
