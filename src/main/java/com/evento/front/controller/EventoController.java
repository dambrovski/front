package com.evento.front.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

public class EventoController {

	
	@RequestMapping(value = "/cadastrarEvento")
	public String form2() {

		return "evento/formEvento";
	}
	
	@RequestMapping(value = "/detalhesEvento")
	public String form3() {
		return "redirect:/detalhesEvento";
	}

}
