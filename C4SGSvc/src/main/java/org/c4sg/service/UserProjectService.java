package org.c4sg.service;

import org.apache.commons.mail.EmailException;
import org.c4sg.dto.ProjectDto;
import org.c4sg.dto.UserProjectDto;
import org.c4sg.entity.Project;
import org.c4sg.entity.User;
import org.c4sg.exception.UserProjectException;

import java.io.IOException;
import java.util.List;

public interface UserProjectService {
    UserProjectDto saveUserProject(Integer userId, Integer projectId) throws UserProjectException;
    void apply(User user, Project project) throws IOException, EmailException;
    List<UserProjectDto> getApplicants(Integer projectId);
    List<ProjectDto> getProjects(Integer userId, String projStatus);
}
