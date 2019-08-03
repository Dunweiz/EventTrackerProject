package com.skilldistillery.eventtracker.services;

import java.util.List;

import com.skilldistillery.eventtracker.entities.Travel;

public interface TravelService {

	List<Travel> findAllTravel();

	Travel createTravel(Travel travel);

	Boolean deleteTravel(int id);

	List<Travel> getTravelByVehicle(String name);

	Travel updateTravel(int id, Travel travel);

	Travel findTravelById(int id);

}
