package br.com.todolist.toDo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.todolist.toDo.models.ToDoModel;

public interface ToDoRepository extends JpaRepository<ToDoModel, Long> {

}
