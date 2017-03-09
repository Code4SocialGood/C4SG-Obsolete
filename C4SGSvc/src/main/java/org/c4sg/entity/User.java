package org.c4sg.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.vividsolutions.jts.geom.Point;

@Entity
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false, updatable = false)
    private Integer id;
    @Column(name = "user_name", nullable = false)
    private String userName;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "email", nullable = false)
    private String email;
    @Column(name = "phone", nullable = false)
    private String phone;
    @Column(name = "city", nullable = false)
    private String city;
    @Column(name = "state", nullable = false)
    private String state;
    @Column(name = "country", nullable = false)
    private String country;
    @Column(name = "zip", nullable = false)
    private String zip;
    @Column(name = "location", columnDefinition = "point")
    private Point location;
    @Column(name = "title")
    private String title;
    @Column(name = "introduction")
    private String introduction;
    
    @Column(name = "github")
    private String github;
    @Column(name = "linkedin")
    private String linkedin;
    @Column(name = "personalwebsite")    
    private String personalWebsite;
    @Column(name = "resume")
    private String resume;
    @Column(name = "title1")
    private String title1;
    @Column(name = "title2")
    private String title2;
    @Column(name = "title3")
    private String title3;
    @Column(name = "title4")
    private String title4;
    @Column(name = "title5")
    private String title5;
    
    @Column(name = "skill1")
    private String skill1;
    @Column(name = "skill2")
    private String skill2;
    @Column(name = "skill3")
    private String skill3;
    @Column(name = "skill4")
    private String skill4;
    @Column(name = "skill5")
    private String skill5;    
    @Column(name = "skill6")
    private String skill6;
    @Column(name = "skill7")
    private String skill7;
    @Column(name = "skill8")
    private String skill8;
    @Column(name = "skill9")
    private String skill9;
    @Column(name = "skill10")
    private String skill10;  
    
    @Column(name = "publish_flag", columnDefinition = "char(1)", nullable = false)
    private String publishFlag;
    
    @Column(name = "notify_flag", columnDefinition = "char(1)", nullable = false)
    private String notify_flag;   
  
    
    @Column(name = "role", columnDefinition = "char(1)", nullable = false)
    private String role;
    
    
    @Column(name="status", columnDefinition = "char(1)", nullable = false)
    private String status;
    
//    @Convert(converter = StatusConverter.class)
//    @Column(name = "status", nullable = false)
//    private Status status;
 
  

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
    
    public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public Point getLocation() {
        return location;
    }

    public void setLocation(Point location) {
        this.location = location;
    }	

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getIntroduction() {
		return introduction;
	}

	public void setIntroduction(String introduction) {
		this.introduction = introduction;
	}
	
    public String getGithub() {
	   return github;
	}
	   
	public void setGithub(String github) {
		this.github = github;
	}
	
	public String getLinkedin() {
		return linkedin;
	}

	public void setLinkedin(String linkedin) {
		this.linkedin = linkedin;
	}

	public String getPersonalWebsite() {
		return personalWebsite;
	}

	public void setPersonalWebsite(String personalWebsite) {
		this.personalWebsite = personalWebsite;
	}

	public String getResume() {
		return resume;
	}

	public void setResume(String resume) {
		this.resume = resume;
	}

	public String getTitle1() {
		return title1;
	}

	public void setTitle1(String title1) {
		this.title1 = title1;
	}

	public String getTitle2() {
		return title2;
	}

	public void setTitle2(String title2) {
		this.title2 = title2;
	}

	public String getTitle3() {
		return title3;
	}

	public void setTitle3(String title3) {
		this.title3 = title3;
	}

	public String getTitle4() {
		return title4;
	}

	public void setTitle4(String title4) {
		this.title4 = title4;
	}

	public String getTitle5() {
		return title5;
	}

	public void setTitle5(String title5) {
		this.title5 = title5;
	}

	public String getSkill1() {
		return skill1;
	}

	public void setSkill1(String skill1) {
		this.skill1 = skill1;
	}

	public String getSkill2() {
		return skill2;
	}

	public void setSkill2(String skill2) {
		this.skill2 = skill2;
	}

	public String getSkill3() {
		return skill3;
	}

	public void setSkill3(String skill3) {
		this.skill3 = skill3;
	}

	public String getSkill4() {
		return skill4;
	}

	public void setSkill4(String skill4) {
		this.skill4 = skill4;
	}

	public String getSkill5() {
		return skill5;
	}

	public void setSkill5(String skill5) {
		this.skill5 = skill5;
	}

	public String getSkill6() {
		return skill6;
	}

	public void setSkill6(String skill6) {
		this.skill6 = skill6;
	}

	public String getSkill7() {
		return skill7;
	}

	public void setSkill7(String skill7) {
		this.skill7 = skill7;
	}

	public String getSkill8() {
		return skill8;
	}

	public void setSkill8(String skill8) {
		this.skill8 = skill8;
	}

	public String getSkill9() {
		return skill9;
	}

	public void setSkill9(String skill9) {
		this.skill9 = skill9;
	}

	public String getSkill10() {
		return skill10;
	}

	public void setSkill10(String skill10) {
		this.skill10 = skill10;
	}

	public String getPublishFlag() {
		return publishFlag;
	}

	public void setPublishFlag(String publishFlag) {
		this.publishFlag = publishFlag;
	}

	public String getNotify_flag() {
		return notify_flag;
	}

	public void setNotify_flag(String notify_flag) {
		this.notify_flag = notify_flag;
	}

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
    
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
