package com.qa.football.service;

import java.util.List;
import java.util.Optional;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.qa.football.entity.Player;
import com.qa.football.repo.PlayerRepo;

@SpringBootTest
public class PlayerServiceUnitTest {

	@Autowired
	private PlayerService service;

	@MockBean
	private PlayerRepo repo;

	@Test
	void testCreate() {

		Player toSave = new Player(null, "Cristiano", "Ronaldo", "ST", 7, "Man Utd");
		Player saved = new Player(1, "Cristiano", "Ronaldo", "ST", 7, "Man Utd");

		Mockito.when(this.repo.save(toSave)).thenReturn(saved);

		Assertions.assertThat(this.service.create(toSave)).isEqualTo(saved);

		Mockito.verify(this.repo, Mockito.times(1)).save(toSave);
	}

	@Test
	void testGetPlayerById() {

		Integer id = 1;
		Player expected = new Player(id, "Cristiano", "Ronaldo", "ST", 7, "Man Utd");

		Mockito.when(this.repo.findById(id)).thenReturn(Optional.of(expected));

		Assertions.assertThat(this.service.getPlayerById(id)).isEqualTo(expected);

		Mockito.verify(this.repo, Mockito.times(1)).findById(id);
	}

	@Test
	void testGetPlayers() {

		Integer id = 1;
		Player testPlayer = new Player(null, "Cristiano", "Ronaldo", "ST", 7, "Man Utd");
		testPlayer.setId(id);
		List<Player> players = List.of(testPlayer);

		Mockito.when(this.repo.findAll()).thenReturn(players);

		Assertions.assertThat(this.service.getPlayers()).isEqualTo(players);

		Mockito.verify(this.repo, Mockito.times(1)).findAll();

	}

	
	// Update Not working
//	@Test
//	void testUpdate() {
//
//		// GIVEN
//		Integer id = 1;
//		Player existing = new Player(id, "Cristiano", "Ronaldo", "ST", 7, "Man Utd");
//		Player updated = new Player(id, "Lionel", "Messi", "ST", 10, "PSG");
//
//		// WHEN
//		Mockito.when(this.repo.findById(id)).thenReturn(Optional.of(existing));
//		Mockito.when(this.repo.save(updated)).thenReturn(updated);
//
//		// THEN
//		Assertions.assertThat(this.service.update(id, "Lionel", "Messi", "ST", 10, "PSG")).isEqualTo(updated);
//
//		// verify
//		Mockito.verify(this.repo, Mockito.times(1)).findById(id);
//		Mockito.verify(this.repo, Mockito.times(1)).save(updated);
//
//	}

//	@Test
//	void testDelete() {
//
//		Integer id = 1;
//
//		Mockito.when(this.repo.existsById(id)).thenReturn(false);
//		// Need to change delete method to boolean
//		Assertions.assertThat(this.service.delete(id)).isTrue();
//
//		Mockito.verify(this.repo, Mockito.times(1)).existsById(id);
//
//	}

}
