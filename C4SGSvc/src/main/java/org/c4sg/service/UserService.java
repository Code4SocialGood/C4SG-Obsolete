package org.c4sg.service;

import org.c4sg.dto.UserDTO;
import org.c4sg.entity.User;

import java.util.List;

public interface UserService {
	
	String UPLOAD_DIRECTORY = "avatars";
    String AVATAR_FORMAT = ".jpg";
    
    List<UserDTO> findAll();

    List<UserDTO> findActiveUsers();

    UserDTO findById(int id);

    List<User> findDevelopers();

    UserDTO saveUser(UserDTO userDTO);

    void deleteUser(Integer id);

    List<UserDTO> search(String userName, String firstName, String lastName);

    List<UserDTO> getApplicants(Integer projectId);
    
    String getAvatarUploadPath(Integer userId);
}
