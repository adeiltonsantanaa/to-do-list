package br.com.todolist.toDo.models;

import java.time.LocalDate;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "tb_toDo")
public class ToDoModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private LocalDate date;
	private String task;
	private String descricao;
	
	
	public ToDoModel() {
	}


	public String getTask() {
		return task;
	}


	public void setTask(String task) {
		this.task = task;
	}


	public String getDescricao() {
		return descricao;
	}


	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}


	public Long getId() {
		return id;
	}


	public LocalDate getDate() {
		return date;
	}
	


	public void setDate(LocalDate date) {
		this.date = date;
	}


	@Override
	public int hashCode() {
		return Objects.hash(date, descricao, id, task);
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ToDoModel other = (ToDoModel) obj;
		return Objects.equals(date, other.date) && Objects.equals(descricao, other.descricao)
				&& Objects.equals(id, other.id) && Objects.equals(task, other.task);
	}


	@Override
	public String toString() {
		return "ToDoModel [id=" + id + ", date=" + date + ", task=" + task + ", descricao=" + descricao + "]";
	}
	
	
	
	
	

}
