package br.com.todolist.toDo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class ToDoEnvioEmailService {

    @Autowired private JavaMailSender mailSender;

    public String sendMail(String string) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setSubject("E-mail To-Do List");
        message.setText(string);
        message.setTo("filhoaguiar20@gmail.com");
        message.setFrom("filhoaguiar20@gmail.com");

        try {
            mailSender.send(message);
            return "Email enviado com sucesso!";
        } catch (Exception e) {
            e.printStackTrace();
            return "Erro ao enviar email.";
        }
    }

}