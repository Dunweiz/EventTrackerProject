package com.skilldistillery.eventtracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.eventtracker.entities.Travel;
import com.skilldistillery.eventtracker.services.TravelService;

@RestController
@RequestMapping("api")
public class TestController {
	
	@Autowired
	private TravelService svc;
	
	@GetMapping("ping")
	public String ping() {
		return "pong";
	}
	
	@GetMapping("travel")
	public List<Travel> findAll(){
		return svc.findAllTravel();
	}
	
	@GetMapping("travel/{id}")
	public Travel getTravelById(@PathVariable ("id") int id) {
		return svc.findTravelById(id);
	}
	
	@PostMapping("travel")
	public Travel createTravel(@RequestBody Travel travel) {
		System.out.println(travel);
		return svc.createTravel(travel);
	}
	
	@DeleteMapping("travel/{id}")
	public Boolean deleteTravel(@PathVariable("id") int id) {
		return svc.deleteTravel(id);
	}
	
	@GetMapping("travel/{string}/travel")
	public List<Travel> getAllByVehicleName(@PathVariable("string") String name ){
		return svc.getTravelByVehicle(name);
	}
	
	@PutMapping("travel/{id}")
	public Travel updateTravel(@PathVariable("id") int id, @RequestBody Travel travel) {
		return svc.updateTravel(id, travel);
	}
}
