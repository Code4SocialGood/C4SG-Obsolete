package org.c4sg.controller;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.c4sg.dto.OrganizationDto;
import org.c4sg.entity.Organization;
import org.c4sg.service.OrganizationService;
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
public class OrganizationController {

    @Autowired
    private OrganizationService organizationService;
    
    Logger logger = LoggerFactory.getLogger(this.getClass());

    @CrossOrigin
    @RequestMapping(value = "/api/organization/all", produces = { "application/json" }, method = RequestMethod.GET)
    public List<OrganizationDto> getOrganizations() {
    	logger.info("Getting all organizations");
        return organizationService.findOrganizations();
    }
    
    @CrossOrigin
    @RequestMapping(value = "/api/organization/search/byId/{id}", produces = { "application/json" }, method = RequestMethod.GET)
    public OrganizationDto getOrganization(@PathVariable("id") int id) {
    	logger.info("Getting organization with id {}", id);
        return organizationService.findOrganizations().get(id);
    }
    
    @CrossOrigin
    @RequestMapping(value = "/api/organization/search/byKeyword/{keyWord}", produces = { "application/json" }, method = RequestMethod.GET)
    public List<OrganizationDto> getOrganization(@PathVariable("keyWord") String keyWord) {
    	logger.info("Getting organizations with keyword {}", keyWord);
        return organizationService.findByKeyword(keyWord);
    }
    
    @CrossOrigin
    @RequestMapping(value="/api/organization/create", method = RequestMethod.POST)
    public Map<String, Object> createOrganization(@RequestBody @Valid OrganizationDto organizationDto){
    	logger.info("Creating organization with name {} and description {}", organizationDto.getName(), organizationDto.getBriefDescription());
    	Map<String, Object> responseData = null;
    	try{
    		OrganizationDto createdOrganization = organizationService.createOrganization(organizationDto);
    		responseData = Collections.synchronizedMap(new HashMap<>());
    		responseData.put("organization", createdOrganization);
    	}catch(Exception e){
    		System.err.println(e);
    	}
    	return responseData;
    }
    
    @CrossOrigin
    @RequestMapping(value="/api/organization/update/{id}", method = RequestMethod.PUT)
    public Map<String, Object> updateOrganization(@PathVariable("id") int id, @RequestBody @Valid OrganizationDto organizationDto){
    	logger.info("Updating organization with id {}", id);
    	Map<String, Object> responseData = null;
    	try{
    		OrganizationDto updatedOrganization = organizationService.updateOrganization(id, organizationDto);
    		responseData = Collections.synchronizedMap(new HashMap<>());
    		responseData.put("organization", updatedOrganization);
    	}catch(Exception e){
    		System.err.println(e);
    	}
    	return responseData;
    }
    
    @CrossOrigin
    @RequestMapping(value="/api/organization/delete/{id}", method = RequestMethod.DELETE)
    public void deleteOrganization(@PathVariable("id") int id){
    	logger.info("Deleting organization with id {}", id);
    	
        try {
            organizationService.deleteOrganization(id);
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}

