package com.evento.front.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class IndexController {
	
	@RequestMapping("/")
	public String index() {
		
		return "index";
	}
	

	@RequestMapping(value = "/cadastrarEvento")
	public ModelAndView cadEvento() {

		ModelAndView mv = new ModelAndView("evento/formEvento");
		return mv;
	}
	
	@RequestMapping(value = "/detalhesEvento")
	public String form3() {
		return "redirect:/detalhesEvento";
	}
	
	@RequestMapping(value = "/eventos")
	public ModelAndView listaEventos() {

		ModelAndView mv = new ModelAndView("index");
		return mv;
	}
	
	
	

}
