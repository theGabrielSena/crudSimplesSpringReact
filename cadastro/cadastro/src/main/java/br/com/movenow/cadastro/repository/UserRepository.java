package br.com.movenow.cadastro.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.movenow.cadastro.model.User;


public interface UserRepository extends JpaRepository<User, Long>{

}

