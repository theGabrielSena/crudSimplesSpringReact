package br.com.movenow.cadastro.exception;

public class UserNotFoundException extends RuntimeException {
	public UserNotFoundException(Long id) {
		super("NAO FOI POSSIVEL ENCONTRAR NENHUM CADASTRO COM ESSE ID" + id +" ");
	}
}
