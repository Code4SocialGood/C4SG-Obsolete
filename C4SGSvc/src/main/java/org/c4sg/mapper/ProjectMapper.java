package org.c4sg.mapper;

import org.c4sg.dto.ProjectDto;
import org.c4sg.entity.Project;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.modelmapper.TypeMap;
import org.modelmapper.TypeToken;
import org.modelmapper.convention.MatchingStrategies;
import org.modelmapper.spi.MatchingStrategy;
import org.springframework.stereotype.Component;

import java.lang.reflect.Type;
import java.util.List;

@Component
public class ProjectMapper extends ModelMapper{

	public ProjectDto getProjectDtoFromEntity(Project project){
		getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		ProjectDto projectDto = map(project, ProjectDto.class);
		projectDto.setOrganizationName(project.getOrganization().getName());
		return projectDto;
	}

	public List<ProjectDto> getDtosFromEntities(List<Project> projects){
        Type listTypeDTO = new TypeToken<List<ProjectDto>>() {}.getType();
		return map(projects, listTypeDTO);
	}

	public Project getProjectEntityFromDto(ProjectDto projectDto){
		Project project = map(projectDto, Project.class);
		return project;
	}
}
