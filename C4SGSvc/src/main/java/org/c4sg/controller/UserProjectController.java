package org.c4sg.controller;

import org.c4sg.dto.ProjectDto;
import org.c4sg.dto.UserProjectDto;
import org.c4sg.exception.UserProjectException;
import org.c4sg.service.UserProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/userProjects")
public class UserProjectController {

    @Autowired
    private UserProjectService userProjectService;

    @CrossOrigin
    @RequestMapping(value = "/users/{id}/projects/{projectId}", method = RequestMethod.POST)
    public ResponseEntity<UserProjectDto> createUserProject(@PathVariable("id") Integer userId,
                                                            @PathVariable("projectId") Integer projectId) throws UserProjectException {
        UserProjectDto userProject = userProjectService.saveUserProject(userId, projectId);

        return new ResponseEntity<>(userProject, HttpStatus.OK);
    }

    @CrossOrigin
    @RequestMapping(value = "/{projectId}", method = RequestMethod.GET)
    public List<UserProjectDto> getApplicants(@PathVariable("projectId") Integer projectId){
        return userProjectService.getApplicants(projectId);
    }

    @CrossOrigin
    @RequestMapping(value = "/status/{status}/users/{id}", method = RequestMethod.GET)
    public List<ProjectDto> getProjects(@PathVariable("id") Integer userId,
                                        @PathVariable("status") String status){
        return userProjectService.getProjects(userId, status);
    }

}
