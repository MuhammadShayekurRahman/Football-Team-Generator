package com.qa.football.rest;

import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.qa.football.entity.Player;
import com.qa.football.service.PlayerService;

@CrossOrigin
@RestController
public class PlayerController {

		@Autowired
		private PlayerService service;
		
		@PostMapping("/createPlayer")
		public ResponseEntity<Player> create(@RequestBody Player newPlayer){
			Player created = this.service.create(newPlayer);
			return new ResponseEntity<Player>(created, HttpStatus.CREATED);
		}
		
		@GetMapping("/getPlayers")
		public List<Player> getPlayers(){
			return this.service.getPlayers();
		}
		
		@GetMapping("/getPlayer/{id}")
		public Player getPlayerId(@PathVariable("id") int id) {
			return this.service.getPlayerById(id);
		}
		
		@PatchMapping("/updatePlayer/{id}")
		public ResponseEntity<Player> update(@PathVariable int id, @PathParam("firstName") String firstName, 
					@PathParam("surname") String surname, @PathParam("postion") String position, @PathParam("shirtNumber") int shirtNumber, @PathParam("teamName") String teamName){
						return new ResponseEntity<Player>(this.service.update(id, firstName, surname, position, shirtNumber, teamName), HttpStatus.ACCEPTED);
			
		}
		
		@DeleteMapping("/removePlayer/{id}")
		public ResponseEntity<?> delete(@PathVariable int id){
			this.service.delete(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
}
