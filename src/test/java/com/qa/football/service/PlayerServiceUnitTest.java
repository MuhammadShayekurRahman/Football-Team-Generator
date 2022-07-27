package com.qa.football.service;

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
	

}
