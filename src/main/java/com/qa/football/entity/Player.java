package com.qa.football.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Player {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String firstName;
	private String surname;
	private String position;
	private Integer shirtNumber;
	private String teamName;
	
	public Player() {
		super();
	}

	public Player(Integer id, String firstName, String surname, String position, Integer shirtNumber, String teamName) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.surname = surname;
		this.position = position;
		this.shirtNumber = shirtNumber;
		this.teamName = teamName;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public String getposition() {
		return position;
	}

	public void setposition(String position) {
		this.position = position;
	}

	public Integer getShirtNumber() {
		return shirtNumber;
	}

	public void setShirtNumber(Integer shirtNumber) {
		this.shirtNumber = shirtNumber;
	}

	public String getTeamName() {
		return teamName;
	}

	public void setTeamName(String teamName) {
		this.teamName = teamName;
	}

//	@Override
//	public int hashCode() {
//		return Objects.hash(firstName, id, position, shirtNumber, surname, teamName);
//	}
//
//	@Override
//	public boolean equals(Object obj) {
//		if (this == obj)
//			return true;
//		if (obj == null)
//			return false;
//		if (getClass() != obj.getClass())
//			return false;
//		Player other = (Player) obj;
//		return Objects.equals(firstName, other.firstName) && Objects.equals(id, other.id)
//				&& Objects.equals(position, other.position) && Objects.equals(shirtNumber, other.shirtNumber)
//				&& Objects.equals(surname, other.surname) && Objects.equals(teamName, other.teamName);
//	}
//
//	@Override
//	public String toString() {
//		return "Player [id=" + id + ", firstName=" + firstName + ", surname=" + surname + ", position=" + position
//				+ ", shirtNumber=" + shirtNumber + ", teamName=" + teamName + "]";
//	}
//	
	
	

}
