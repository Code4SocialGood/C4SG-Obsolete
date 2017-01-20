package org.c4sg.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.c4sg.dao.ProjectDao;
import org.c4sg.dto.ProjectDto;
import org.c4sg.entity.Project;
import org.c4sg.mapper.ProjectMapper;
import org.c4sg.service.ProjectService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectServiceImpl implements ProjectService {

	@Autowired
	private ProjectDao projectDao;
	
	@Autowired
	private ProjectMapper projectMapper;
	
	Logger logger = LoggerFactory.getLogger(this.getClass());
	
	public void save(Project project) {
		logger.info("Saving project with id {}", project.getId());
		projectDao.save(project);
		logger.info("Saved successfully");
    }

	public List<ProjectDto> findProjects() {
		logger.info("Getting all projects");
		List<Project> projects = projectDao.findAll();
		List<ProjectDto> projectDtos = projects.stream()
									.map(p -> projectMapper.getProjectDtoFromEntity(p))
									.collect(Collectors.toList());
		logger.info("{} projects found", projectDtos.size());
		return projectDtos;
	}
	
    public Project findById(int id) {
    	logger.info("Getting project with id {}", id);
        return projectDao.findById(id);
    }
    
    public Project findByName(String name) {
    	logger.info("Getting project with name {}", name);
        return projectDao.findByName(name);
    }
    
    //TODO search by keyword
    public List<Project> findByKeyword(String keyWord) {
    	logger.info("Getting projects containing keyword {}", keyWord);
    	List<Project> projects = new ArrayList<>();
    	projects.add(projectDao.findByName(keyWord));
    	if(projects.isEmpty()){
    		//TODO: throw exception
        	logger.error("Projects with keyword {} not found", keyWord);
    	}
    	logger.info("{} projects found", projects.size());
    	return projects;
    }
    
    public Project createProject(Project project) {
    	logger.info("Creating new project with id {}", project.getId());
    	Project localProject = projectDao.findById(project.getId());

        if (localProject != null) { 
        	//TODO: return error message
        	logger.error("Project with name {} already exists", project.getId());
        } else {
            localProject = projectDao.save(project);
            logger.info("Project created successfully with id {}", project.getId());
        }

        return localProject;
    }
    
    public void deleteProject(int id) {
    	logger.info("Deleting project with id {}", id);
    	Project localProject = projectDao.findById(id);

        if (localProject != null) {
        	projectDao.delete(localProject);
        	logger.info("Project deleted successfully");
        } else {
        	logger.error("Project with id {} does not exist", id);
        }
    }
    
    public Project updateProject(Project project) {
    	logger.info("Updating project with id {}", project.getId());
    	Project localProject = projectDao.findById(project.getId());

        if (localProject != null) {
        	localProject = projectDao.save(project);
        	logger.info("Project updated successfully");
        } else {
        	logger.error("Project with id {} does not exist", project.getId());
        }

        return localProject;
    }

}
