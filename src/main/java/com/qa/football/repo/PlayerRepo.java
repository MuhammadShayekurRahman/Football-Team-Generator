package com.qa.football.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.qa.football.entity.Player;

public interface PlayerRepo extends JpaRepository<Player, Integer> {

}
