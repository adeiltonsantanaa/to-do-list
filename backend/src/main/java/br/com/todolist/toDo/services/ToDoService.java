package br.com.todolist.toDo.services;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.todolist.toDo.models.ToDoModel;
import br.com.todolist.toDo.repositories.ToDoRepository;

@Service
public class ToDoService {
	
	@Autowired
	private ToDoRepository repToDo;
	
	
	public ToDoModel salvarTask(ToDoModel toDo) {
		validaTask(toDo);
		toDo.setDate(LocalDate.now());
		return repToDo.save(toDo);
		
	}
	
	
	public List<ToDoModel> todasTasks(){
		return repToDo.findAll();
	}
	
	
	public Optional<ToDoModel> task(Long id) {
		if(id == null) {
			throw new NullPointerException("Id Incorreto");
		}
		return repToDo.findById(id);
	}
	
	
	public ToDoModel atualizaTask(ToDoModel toDo) {
		if(toDo.getId() == null) {
			throw new NullPointerException("O id não pode ser nulo!");
		}
		Optional<ToDoModel> atualizar = repToDo.findById(toDo.getId());
		ToDoModel toDo2 = atualizar.get();
		toDo2.setTask(toDo.getTask());
		toDo2.setDescricao(toDo.getDescricao());
		repToDo.save(toDo2);
		return toDo2;
		
	}
	
	public void deletaTask(Long id) {
		if(id == null) {
			throw new NullPointerException("Id não pode ser nulo");
		}
		repToDo.deleteById(id);
	}
	
	
	
	
	
	
	
	
	public void validaTask(ToDoModel toDo) throws ServiceException {
		List<String> erros = new ArrayList<>();
		
		if(toDo.getTask() == null || toDo.getTask().isEmpty()) {
			erros.add("A task não pode ser null");
		}
		if(toDo.getDescricao() == null || toDo.getDescricao().isEmpty()) {
			erros.add("A descrição não pode ser null");
		}
		if(erros.size() > 0) {
			throw new ServiceException("Verifique todos os campos");
		}
	}

}
