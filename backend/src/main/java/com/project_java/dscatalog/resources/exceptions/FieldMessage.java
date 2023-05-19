package com.project_java.dscatalog.resources.exceptions;

import java.io.Serializable;

public class FieldMessage  implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private String feildName;
	private String message;

	
	public  FieldMessage() {
		
	}


	public FieldMessage(String feildName, String message) {
		super();
		this.feildName = feildName;
		this.message = message;
	}


	public String getFeildName() {
		return feildName;
	}


	public void setFeildName(String feildName) {
		this.feildName = feildName;
	}


	public String getMessage() {
		return message;
	}


	public void setMessage(String message) {
		this.message = message;
	}
	
}
