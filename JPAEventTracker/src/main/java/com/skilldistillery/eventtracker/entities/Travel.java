package com.skilldistillery.eventtracker.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Travel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String name;

	private double distance;
	
	@Column(name="description")
	private String desc;
	
	private String vehicle;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	

	public double getDistance() {
		return distance;
	}

	public void setDistance(double distance) {
		this.distance = distance;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public String getVehicle() {
		return vehicle;
	}

	public void setVehicle(String vehicle) {
		this.vehicle = vehicle;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Travel other = (Travel) obj;
		if (id != other.id)
			return false;
		return true;
	}

	public Travel() {
		super();
	}

	public Travel(int id, String name, double distance, String desc, String vehicle) {
		super();
		this.id = id;
		this.name = name;
		this.distance = distance;
		this.desc = desc;
		this.vehicle = vehicle;
	}

	@Override
	public String toString() {
		return "Travel [id=" + id + ", name=" + name + ", distance=" + distance + ", desc=" + desc + ", vehicle="
				+ vehicle + "]";
	}

	
}
