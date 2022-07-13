package com.qa.football.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.qa.football.entity.Player;
import com.qa.football.repo.PlayerRepo;

@Service
@Primary
public class PlayerServiceDB implements PlayerService{
	
	@Autowired
	private PlayerRepo repo;
	
	@Override
	public Player getPlayerById(int id) {
		return this.repo.findById(id).get();
	}

	@Override
	public List<Player> getPlayers() {
		return this.repo.findAll();
	}

	@Override
	public Player create(Player newPlayer) {
		return this.repo.save(newPlayer);
	}

	@Override
	public Player update(int id, String firstName, String surname, String position, int shirtNumber, String teamName) {
		Player toUpdate = this.repo.getById(id);
		toUpdate.setFirstName(firstName);
		toUpdate.setSurname(surname);
		toUpdate.setPositon(position);
		toUpdate.setShirtNumber(shirtNumber);
		toUpdate.setTeamName(teamName);
		return this.repo.save(toUpdate);
	}

	@Override
	public void delete(int id) {
		this.repo.deleteById(id);
		
	}

}
