package org.c4sg.service.impl;

import org.c4sg.constant.UserProjectStatus;
import org.c4sg.dao.ProjectDao;
import org.c4sg.dao.UserDao;
import org.c4sg.dao.UserProjectDao;
import org.c4sg.dto.ProjectDto;
import org.c4sg.dto.UserProjectDto;
import org.c4sg.entity.Project;
import org.c4sg.entity.User;
import org.c4sg.entity.UserProject;
import org.c4sg.exception.UserProjectException;
import org.c4sg.mapper.ProjectMapper;
import org.c4sg.mapper.UserProjectMapper;
import org.c4sg.service.AsyncEmailService;
import org.c4sg.service.UserProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.util.Objects.nonNull;
import static java.util.Objects.requireNonNull;

@Service
public class UserProjectServiceImpl implements UserProjectService {

    @Autowired
    private UserProjectDao userProjectDao;

    @Autowired
    private UserDao userDao;

    @Autowired
    private ProjectDao projectDao;

    @Autowired
    private UserProjectMapper userProjectMapper;

    @Autowired
    private ProjectMapper projectMapper;

    @Autowired
    private AsyncEmailService asyncEmailService;

    @Override
    public UserProjectDto saveUserProject(Integer userId, Integer projectId) throws UserProjectException {
        User user = userDao.findById(userId);
        requireNonNull(user, "Invalid User Id");
        Project project = projectDao.findById(projectId);
        requireNonNull(project, "Invalid Project Id");
        isUserAppliedPresent(userId, projectId);
        UserProject userProject = new UserProject();
        userProject.setUser(user);
        userProject.setProject(project);
        userProject.setStatus(UserProjectStatus.APPLIED.getStatus());
        apply(user, project);
        userProject = userProjectDao.save(userProject);

        return userProjectMapper.getDtoFromEntity(userProject);
    }

    private void isUserAppliedPresent(Integer userId, Integer projectId) throws UserProjectException {
        UserProject userProject = userProjectDao.findByUser_IdAndProject_Id(userId, projectId);
        if( nonNull(userProject)){
            throw new UserProjectException("The user already exists in that project");
        }
    }

    @Override
    public void apply(User user, Project project) {
        String from = "code4socialgood@code4socialgood.com";
        String orgEmail = project.getEmail();
        String orgSubject = "You received an application from Code for Social Good";
        String orgText = "You received an application from Code for Social Good. " +
                "Please login to the dashboard to review the application.";
        asyncEmailService.send(from, orgEmail, orgSubject, orgText);

        String userEmail = user.getEmail();
        String userSubject = "You submitted an application from Code for Social Good";
        String userText = "You submitted an application from Code for Social Good. " +
                "Organization is notified to review your application and contact you.";
        asyncEmailService.send(from, userEmail, userSubject, userText);
    }

    @Override
    public List<UserProjectDto> getApplicants(Integer projectId) {
        List<UserProject> userProjects = userProjectDao.findByProject_Id(projectId);
        return userProjectMapper.getDtosFromEntities(userProjects);
    }

    @Override
    public List<ProjectDto> getProjects(Integer userId, String projStatus) {
        List<Project> projects = userProjectDao.findByUserAndStatus(userId, projStatus);
        return projectMapper.getDtosFromEntities(projects);
    }
}
