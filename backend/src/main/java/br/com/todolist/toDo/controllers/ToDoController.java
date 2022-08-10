package br.com.todolist.toDo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.todolist.toDo.models.ToDoModel;
import br.com.todolist.toDo.services.ToDoService;

@RestController
@RequestMapping(value = "/to-do")
public class ToDoController {
	
	@Autowired
	private ToDoService service;
	
	
	
	@GetMapping(path = "/teste")
	public String teste() {
		return "teste ok";
	}
	
	@GetMapping(path = "/tasks")
	public List<ToDoModel> tasks(){ 
		return service.todasTasks();
	}
	@PostMapping(path = "/salvar")
	public ToDoModel salvar(@RequestBody ToDoModel toDo) {
		return service.salvarTask(toDo);
	}
	@PutMapping(path = "/atualizar")
	public ToDoModel atualizar(@RequestBody ToDoModel toDo) {
		return service.atualizaTask(toDo);
	}
	

}
