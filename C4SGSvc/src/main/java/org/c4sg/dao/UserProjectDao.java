package org.c4sg.dao;

import org.c4sg.entity.Project;
import org.c4sg.entity.UserProject;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserProjectDao extends CrudRepository<UserProject, Long>{

    List<UserProject> findByProject_Id(Integer project_id);

    UserProject findByUser_IdAndProject_Id(Integer userId, Integer projectId);

    @Query("SELECT p FROM UserProject up " +
            "JOIN up.project p WHERE up.user.id = :userId  AND up.status = :status ")
    List<Project> findByUserAndStatus(@Param("userId") Integer userId, @Param("status") String projStatus);
}
