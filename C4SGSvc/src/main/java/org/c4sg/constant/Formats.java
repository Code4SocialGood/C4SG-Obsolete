package org.c4sg.constant;

public enum Formats {

	IMAGE("avatars"), RESUME("resumes");

	private String value;

	Formats(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}

}
