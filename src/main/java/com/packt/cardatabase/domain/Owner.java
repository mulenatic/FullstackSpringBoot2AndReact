package com.packt.cardatabase.domain;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

/**
 * Owner
 */
@Entity
public class Owner {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long ownerId;
    String firstname, lastname;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "owner")
    private List<Car> cars;

    public Owner() {}

    public Owner(String firstname, String lastname) {
	this.firstname = firstname;
	this.lastname = lastname;
    }

    public long getOwnerId() {
	return ownerId;
    }

    public void setOwnerId(long ownerId) {
	this.ownerId = ownerId;
    }

    public String getFirstname() {
	return firstname;
    }

    public void setFirstname(String firstname) {
	this.firstname = firstname;
    }

    public String getLastname() {
	return lastname;
    }

    public void setLastname(String lastname) {
	this.lastname = lastname;
    }

    public List<Car> getCars() {
	return cars;
    }

    public void setCars(List<Car> cars) {
	this.cars = cars;
    }

}
