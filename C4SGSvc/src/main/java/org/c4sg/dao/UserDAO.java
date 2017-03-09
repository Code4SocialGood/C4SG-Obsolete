package org.c4sg.dao;

import org.c4sg.constant.Status;
import org.c4sg.constant.UserRole;
import org.c4sg.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface UserDAO extends JpaRepository<User, Long>, JpaSpecificationExecutor<User> {

    String FIND_BY_ID_QUERY = "SELECT u FROM UserProject up " +
                                "JOIN up.user u " +
                                "JOIN up.project p " +
                                "WHERE p.id = :projId";
    
    String FIND_BY_ROLE_PUBLISHFLAG_ORDERBYGITHUB = "SELECT u FROM User u " +           
            "WHERE u.role = :role AND u.publishFlag = :publishFlag " + 
            "ORDER BY u.github ASC";
    
    String FIND_BY_STATUS_ORDERBYUSERNAME = "SELECT u FROM User u " +           
            "WHERE u.status = :status " + 
            "ORDER BY u.userName ASC";

    @Query(FIND_BY_STATUS_ORDERBYUSERNAME)
    List<User> findByStatusOrderByUserNameAsc(@Param("status") String status);

    User findById(int id);
    
    @Query(FIND_BY_ROLE_PUBLISHFLAG_ORDERBYGITHUB)
    List<User> findByRoleAndPublishFlagOrderByGithubDesc(@Param("role") String role, @Param("publishFlag") String publishFlag);

    @Query(FIND_BY_ID_QUERY)
    List<User> findByUserProjectId(@Param("projId") Integer projId);
}
