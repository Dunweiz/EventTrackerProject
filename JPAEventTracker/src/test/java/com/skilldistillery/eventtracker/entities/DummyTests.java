package com.skilldistillery.eventtracker.entities;

import static org.junit.jupiter.api.Assertions.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class DummyTests {
	private static EntityManagerFactory emf = Persistence.createEntityManagerFactory("StuffPU");
	private static EntityManager em;
	private Dummy dummy;
	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		dummy = em.find(Dummy.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		dummy = null;
	}

	@Test
	void test_Dummy_entity_mapping() {
		assertNotNull(dummy);
		assertEquals("Hello", dummy.getStuff());
	}

}
