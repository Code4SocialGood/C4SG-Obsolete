package org.c4sg.controller;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.c4sg.dto.ProjectDto;
import org.c4sg.entity.Project;
import org.c4sg.service.ProjectService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class ProjectController {

    @Autowired
    private ProjectService projectService;
    
    Logger logger = LoggerFactory.getLogger(this.getClass());
    
    @CrossOrigin
    @RequestMapping(value = "/api/project/all", method = RequestMethod.GET)
    public List<ProjectDto> getProjects() {
        logger.info("Getting all projects");
        return projectService.findProjects();
    }
    
    @CrossOrigin
    @RequestMapping(value = "/api/project/search/byId/{id}", method = RequestMethod.GET)
    public Project getProject(@PathVariable("id") int id) {
    	
    	logger.info("Getting project with project id {}",id);
        //return projectService.findProjects().get(id);
    	return projectService.findById(id);
    }
    
    @CrossOrigin
    @RequestMapping(value = "/api/project/search/byName/{name}", method = RequestMethod.GET)
    public Project getProject(@PathVariable("name") String name) {
    	logger.info("Getting project with name {}", name);
        return projectService.findByName(name);
    }
    
    @CrossOrigin
    @RequestMapping(value = "/api/project/search/byKeyword/{keyWord}", method = RequestMethod.GET)
    public List<Project> getProjects(@PathVariable("keyWord") String keyWord) {
    	
    	logger.info("Getting projects containing keyword {}", keyWord);
    	
    	List<Project> projects = null;
    	
        try {
        	projects = projectService.findByKeyword(keyWord);
        	if (projects != null)
        		System.out.println("***" + projects.size());
        	else 
        		System.out.println("***empty");
        } catch (Exception e) {
            System.out.println(e);
        }

        return projects;
    }
    
    @CrossOrigin
    @RequestMapping(value = "/api/project/add", method = RequestMethod.POST)
    public Map<String, Object> createProject(@RequestBody @Valid Project project) {

    	logger.info("Creating project with name {} and description {}", project.getName(), project.getDescription());
    	Map<String, Object> responseData = null;
    	
        try {
            Project createProject = projectService.createProject(project);
            responseData = Collections.synchronizedMap(new HashMap<>());
            responseData.put("project", createProject);
        } catch (Exception e) {
            System.out.println(e);
        }

        return responseData;
    }
    
    @CrossOrigin
    @RequestMapping(value = "/api/project/delete/{id}", method = RequestMethod.DELETE)
    public void deleteProject(@PathVariable("id") int id) {

    	logger.info("Deleting project with id {}", id);
        try {
            projectService.deleteProject(id);
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    @CrossOrigin
    @RequestMapping(value = "/api/project/update", method = RequestMethod.PUT)
    public Map<String, Object> updateProject(@RequestBody @Valid Project project) {

    	System.out.println("**************Update : id=" + project.getId() + "**************");
    	logger.info("Updating project with id {} and name {}", project.getId(), project.getName());
    	Map<String, Object> responseData = null;
    	
        try {
            Project updateProject = projectService.updateProject(project);
            responseData = Collections.synchronizedMap(new HashMap<>());
            responseData.put("project", updateProject);
        } catch (Exception e) {
            System.out.println(e);
        }

        return responseData;
    }
}

