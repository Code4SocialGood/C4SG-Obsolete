package org.c4sg.mapper;

import org.c4sg.dto.OrganizationDto;
import org.c4sg.entity.Organization;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
public class OrganizationMapper extends ModelMapper {

	Logger logger = LoggerFactory.getLogger(this.getClass());
	public OrganizationDto getOrganizationDtoFromEntity(Organization organization){
		logger.info("Mapping organization entity to dto for id {} ", organization.getId());
		OrganizationDto organizationDto = map(organization, OrganizationDto.class);
		logger.info("Finished mapping");
		return organizationDto;
	}
	
	public Organization getOrganizationEntityFromDto(OrganizationDto organizationDto){
		logger.info("Mapping organization dto to entity for id {} ", organizationDto.getId());
		Organization organization = map(organizationDto, Organization.class);
		logger.info("Finished mapping");
		return organization;
	}
}
