import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';



type Props = {
  Id: number;
  Task: string;
  Desc: string;
}


function ModalEditar({Id ,Task, Desc}: Props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [task, setTask] = useState(Task);
  const [desc, setDesc] = useState(Desc);

  function atualizarTask() {
    axios.put(`http://localhost:8080/to-do/atualizar/${Id}`, {
      task: task,
      desc: desc
    }).then(res => { console.log(res) }).catch(err => console.log(err));
    window.location.reload();
  }

  return (
    <>
      <Button variant="warning" size="sm" onClick={handleShow}>
      <img src="https://img.icons8.com/ios-glyphs/30/000000/edit--v1.png"/>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar {Task}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Task</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                type="textarea"
                autoFocus
                value={desc}
                onChange={(e) => setTask(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            fechar
          </Button>
          <Button variant="primary" onClick={atualizarTask}>
            Atualizar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalEditar;