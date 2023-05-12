package com.project_java.dscatalog.resources.exceptior;

import java.time.Instant;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.project_java.dscatalog.resources.exceptions.StandardError;
import com.project_java.dscatalog.services.exceptions.EntityNotFoundException;

@ControllerAdvice
public class ResourceExceptinHandler {
	
	@ExceptionHandler(EntityNotFoundException.class)
  public ResponseEntity<StandardError>entityNotFound(EntityNotFoundException e, HttpServletRequest request){
		StandardError err = new StandardError();
		err.setTimestamp(Instant.now());
		err.setStatus(HttpStatus.NOT_FOUND.value());
		err.setError("Resource not found");
		err.setMessage(e.getMessage());
		err.setPath(request.getRequestURI());
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(err);
  }
}
