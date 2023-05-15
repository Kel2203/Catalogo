package com.project_java.dscatalog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project_java.dscatalog.entities.Product;

@Repository
public interface ProductRepository  extends JpaRepository<Product, Long>{
	

}
