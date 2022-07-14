package com.qa.football.rest;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.patch;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.jdbc.Sql.ExecutionPhase;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.ResultMatcher;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.qa.football.entity.Player;

@SpringBootTest
@AutoConfigureMockMvc
@Sql(scripts = { "classpath:player-schema.sql",
"classpath:player-data.sql" }, executionPhase = ExecutionPhase.BEFORE_TEST_METHOD)
public class PlayerControllerTest {
	
	@Autowired
	private MockMvc mvc;
	
	@Autowired
	private ObjectMapper mapper;
	
	@Test
	void testCreate() throws Exception{
		Player testPlayer = new Player(null, "Cristiano", "Ronaldo", "ST", 7, "Man Utd");
		String testPlayerAsJSON = this.mapper.writeValueAsString(testPlayer);
		RequestBuilder req = post("/createPlayer").content(testPlayerAsJSON).contentType(MediaType.APPLICATION_JSON);
		
		ResultMatcher checkStatus = status().isCreated();
		Player createdPlayer = new Player(2, "Cristiano", "Ronaldo", "ST", 7, "Man Utd");
		String createdPlayerAsJSON = this.mapper.writeValueAsString(createdPlayer);
		ResultMatcher checkbody = content().json(createdPlayerAsJSON);
		
		this.mvc.perform(req).andExpect(checkStatus).andExpect(checkbody);
	}
	
	@Test
	void testGetPlayers() throws Exception{
		List<Player> players = new ArrayList<>();
		players.add(new Player(1, "Lionel", "Messi", "ST", 10, "PSG"));
		String listPlayersAsJSON = this.mapper.writeValueAsString(players);
		this.mvc.perform(get("/getPlayers")).andExpect(status().isOk()).andExpect(status().isOk()).andExpect(content().json(listPlayersAsJSON));
	}
	
	@Test
	void testGetPlayerById() throws Exception{
		Player findPlayer = new Player(1, "Lionel", "Messi", "ST", 10, "PSG");
		String findPlayerAsJSON = this.mapper.writeValueAsString(findPlayer);
		this.mvc.perform(get("/getPlayer/1")).andExpect(status().isOk()).andExpect(content().json(findPlayerAsJSON));
	}
	
	@Test
	void testUpdate() throws Exception{
		Player updatedPlayer = new Player(1, "Mason", "Mount", "CM", 19, "Chelsea");
		String updatedPlayerAsJSON = this.mapper.writeValueAsString(updatedPlayer);
		this.mvc.perform(patch("/updatePlayer/1?firstName=Mason&surname=Mount&shirtNumber=19&position=CM&teamName=Chelsea")).andExpect(status().isAccepted())
		.andExpect(content().json(updatedPlayerAsJSON));
		
	}
	
	
	@Test
	void testDelete() throws Exception {
		this.mvc.perform(delete("/removePlayer/1")).andExpect(status().isNoContent());
		
	}
	

}
