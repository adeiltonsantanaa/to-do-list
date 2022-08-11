package br.com.todolist.toDo.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	@GetMapping(path = "/task/{id}")
	public Optional<ToDoModel> task(@PathVariable Long id) {
		return service.task(id);
	}
	
	@PostMapping(path = "/salvar")
	public ToDoModel salvar(@RequestBody ToDoModel toDo) {
		return service.salvarTask(toDo);
	}
	@PutMapping(path = "/atualizar/{id}")
	public ToDoModel atualizar(@PathVariable Long id, @RequestBody ToDoModel toDo) {
		return service.atualizaTask(id, toDo);
	}
	@DeleteMapping(path = "/deletar/{id}")
	public void deletar(@PathVariable Long id) {
		service.deletaTask(id);
	}
	

}
