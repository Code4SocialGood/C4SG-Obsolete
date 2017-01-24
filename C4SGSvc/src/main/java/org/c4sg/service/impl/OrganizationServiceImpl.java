package org.c4sg.service.impl;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.c4sg.constant.ApplicationConstants;
import org.c4sg.dao.OrganizationDao;
import org.c4sg.dto.OrganizationDto;
import org.c4sg.entity.Organization;
import org.c4sg.mapper.OrganizationMapper;
import org.c4sg.service.OrganizationService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrganizationServiceImpl implements OrganizationService {

	@Autowired
	private OrganizationDao organizationDao;
	
	@Autowired
	private OrganizationMapper organizationMapper;
	
	Logger logger = LoggerFactory.getLogger(this.getClass());
	
	public void save(OrganizationDto organizationDto) {
		logger.info("Saving organization with id {}", organizationDto.getId());
		Organization organization = organizationMapper.getOrganizationEntityFromDto(organizationDto);
		organizationDao.save(organization);
		logger.info("Saved successfully");
    }

    public List<OrganizationDto> findOrganizations() {
    	logger.info("Getting all organizations");
    	List<Organization> organizations = organizationDao.findAll();
    	List<OrganizationDto> organizationDtos = organizations.stream().map(o -> organizationMapper.getOrganizationDtoFromEntity(o)).collect(Collectors.toList());
    	logger.info("{} organizations found", organizationDtos.size());
        return organizationDtos;
    }
	
    public OrganizationDto findById(int id) {
    	logger.info("Getting organization with id {}", id);
        OrganizationDto organizationDto = organizationMapper.getOrganizationDtoFromEntity(organizationDao.findById(id));
        if(organizationDto == null){
        	//TODO: throw exception
        	logger.error("Organization with id {} not found", id);
        }
        logger.info("Organization found: {}", organizationDto.getName());
        return organizationDto;
    }

    public List<OrganizationDto> findByKeyword(String keyWord) {
    	logger.info("Getting organizations containing keyword {}", keyWord);
    	List<Organization> organizations = organizationDao.findByNameLikeOrBriefDescriptionLikeOrDetailedDescriptionLikeAllIgnoreCase(keyWord, keyWord, keyWord);
    	if(organizations == null || organizations.isEmpty()){
    		//TODO: throw exception
        	logger.error("Organizations with keyword {} not found", keyWord);
    	}
    	List<OrganizationDto> organizationDtos = organizations.stream()
    			.map(o -> organizationMapper.getOrganizationDtoFromEntity(o)).collect(Collectors.toList());
    	logger.info("{} organizations found", organizationDtos.size());
    	return organizationDtos;
    }
    
    public OrganizationDto createOrganization(OrganizationDto organizationDto) {
    	logger.info("Creating new organization with name {}", organizationDto.getName());
    	Organization organization = organizationDao.findByName(organizationDto.getName());

        if (organization != null) {
        	//TODO: return error message
        	logger.error("Organization with name {} already exists", organization.getName());
        } else {
            organization = organizationDao.save(organizationMapper.getOrganizationEntityFromDto(organizationDto));
            logger.info("Organization created successfully with id {}", organization.getId());
        }

        return organizationMapper.getOrganizationDtoFromEntity(organization);
    }
    
    public OrganizationDto updateOrganization(int id, OrganizationDto organizationDto) {
    	logger.info("Updating organization with id {}", organizationDto.getId());
    	Organization organization = organizationDao.findById(id);
        if (organization == null) {
        	//TODO: create new?
        	logger.error("Organization with id {} does not exist", organizationDto.getId());
        } else {
            organization = organizationDao.save(organizationMapper.getOrganizationEntityFromDto(organizationDto));
            logger.info("Organization updated successfully");
        }

        return organizationMapper.getOrganizationDtoFromEntity(organization);
    }
    
    public void deleteOrganization(int id){
    	logger.info("Deleting organization with id {}", id);
    	Organization organization = organizationDao.findById(id);
    	if(organization != null){
    		organization.setStatus(ApplicationConstants.ORGANIZATION_STATUS_DELETED);
    		//TODO: Local or Timezone?
    		//TODO: Format date
    		organization.setDeleteTime(LocalDateTime.now().toString());
    		//organization.setDeleteBy(user.getUsername());
    		organizationDao.save(organization);
    		logger.info("Organization deleted successfully");
    	}
    	else{
    		logger.error("Organization with id {} does not exist", id);
    	}
    }

}
