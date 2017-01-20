package org.c4sg.controller;

import org.c4sg.dto.OrganizationDto;
import org.c4sg.service.OrganizationService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
	
	@Autowired
	private OrganizationService organizationService;
	
	Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@RequestMapping("/home")
	public String home() {
		
        OrganizationDto organizationDto = organizationService.findById(1);
        logger.info("Entering home method");
        return organizationDto.getName() + " ; " + organizationDto.getId();
	}
	
/*	@RequestMapping("/home")
	public String home(Model model) {
		
        Organization organization = organizationService.findByName("test");
        model.addAttribute("organization", organization);

        return "home";
        // return "C4SG Home";
	}*/
}
