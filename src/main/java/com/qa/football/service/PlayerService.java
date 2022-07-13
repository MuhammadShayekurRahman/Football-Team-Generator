package com.qa.football.service;

import java.util.List;

import com.qa.football.entity.Player;

public interface PlayerService {
	
	Player getPlayerById(int id);
	
	List<Player> getPlayers();
	
	Player create(Player newPlayer);
	
	Player update(int id, String firstName, String surname, String position, int shirtNumber, String teamName);
	
	void delete(int id);
	
}
