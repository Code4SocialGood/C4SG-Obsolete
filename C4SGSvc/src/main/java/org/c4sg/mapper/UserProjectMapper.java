package org.c4sg.mapper;

import org.c4sg.dto.UserProjectDto;
import org.c4sg.entity.UserProject;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.stereotype.Component;

import java.lang.reflect.Type;
import java.util.List;

@Component
public class UserProjectMapper extends ModelMapper{

    public UserProjectDto getDtoFromEntity(UserProject userProject){
        return map(userProject, UserProjectDto.class);
    }

    public List<UserProjectDto> getDtosFromEntities(List<UserProject> userProjects){
        Type listTypeDTO = new TypeToken<List<UserProjectDto>>() {}.getType();
        return map(userProjects, listTypeDTO);
    }

    public UserProject getEntityFromDto(UserProjectDto dto){
        return map(dto, UserProject.class);
    }
}
