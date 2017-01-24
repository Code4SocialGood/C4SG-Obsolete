package org.c4sg.mapper;

import org.c4sg.dto.ProjectDto;
import org.c4sg.entity.Project;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.modelmapper.TypeMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
public class ProjectMapper extends ModelMapper{
	
	Logger logger = LoggerFactory.getLogger(this.getClass());
	
	public ProjectDto getProjectDtoFromEntity(Project project){
		logger.info("Mapping project entity to dto for id {}", project.getId());
		ProjectDto projectDto = map(project, ProjectDto.class);
		
		//Explicit mapping for organization name
		TypeMap<Project, ProjectDto> typeMap = getTypeMap(Project.class, ProjectDto.class);
		if(typeMap == null){
			addMappings(new PropertyMap<Project, ProjectDto>() {
				@Override
				protected void configure() {
					map().setOrganizationName(source.getOrganization().getName());
				}
			});
		}
		logger.info("Finished mapping");
		return projectDto;
	}
	
	public Project getProjectEntityFromDto(ProjectDto projectDto){
		logger.info("Mapping project dto to entity for id {}", projectDto.getId());
		Project project = map(projectDto, Project.class);
		logger.info("Finished mapping");
		return project;
	}
}
