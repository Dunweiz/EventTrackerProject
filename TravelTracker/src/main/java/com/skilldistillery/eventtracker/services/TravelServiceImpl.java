package com.skilldistillery.eventtracker.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.eventtracker.entities.Travel;
import com.skilldistillery.eventtracker.repositories.TravelRepository;

@Service
public class TravelServiceImpl implements TravelService {

	@Autowired
	private TravelRepository repo;

	@Override
	public List<Travel> findAllTravel() {
		return repo.findAll();
	}

	@Override
	public Travel createTravel(Travel travel) {
		return repo.saveAndFlush(travel);
	}

	@Override
	public Boolean deleteTravel(int id) {
		boolean deleted = false;
		Optional<Travel> opt = repo.findById(id);
		if (opt.isPresent()) {
			Travel travel = opt.get();
			if (travel.getId() == id) {
				repo.deleteById(id);
				deleted = true;
			}
		}
		return deleted;
	}

	@Override
	public List<Travel> getTravelByVehicle(String name) {
		name = "%" + name + "%";
		return repo.findAllByVehicleLike(name);
	}
	
	@Override
	public Travel updateTravel(int id, Travel travel) {
		Optional<Travel> opt = repo.findById(id);
		Travel oldTravel = null;	
			if(opt.isPresent()) {
				oldTravel = opt.get();
				oldTravel.setName(travel.getName());
				oldTravel.setDesc(travel.getDesc());
				oldTravel.setDistance(travel.getDistance());
				oldTravel.setVehicle(travel.getVehicle());
				repo.saveAndFlush(oldTravel);
			}
			return oldTravel;
	}
	
	@Override
	public Travel findTravelById(int id) {
		return repo.findById(id).get();
	}
}
