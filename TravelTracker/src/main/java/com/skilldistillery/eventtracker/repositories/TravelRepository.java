package com.skilldistillery.eventtracker.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.eventtracker.entities.Travel;

public interface TravelRepository extends JpaRepository<Travel, Integer> {

	List<Travel> findAllByVehicleLike(String name);

}
