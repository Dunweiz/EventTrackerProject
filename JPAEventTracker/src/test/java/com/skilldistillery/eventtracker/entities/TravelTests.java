package com.skilldistillery.eventtracker.entities;

import static org.junit.jupiter.api.Assertions.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class TravelTests {
	private static EntityManagerFactory emf = Persistence.createEntityManagerFactory("TravelPU");
	private static EntityManager em;
	private Travel travel;
	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		travel = em.find(Travel.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		travel = null;
	}

	@Test
	void test_Dummy_entity_mapping() {
		assertNotNull(travel);
		assertEquals("Fort Worth ,Texas", travel.getName());
		assertEquals("Honda Civic", travel.getVehicle());
	}

}
