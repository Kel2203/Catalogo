package com.project_java.dscatalog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project_java.dscatalog.entities.Role;

@Repository
public interface RoleRepository  extends JpaRepository<Role, Long>{
	

}
