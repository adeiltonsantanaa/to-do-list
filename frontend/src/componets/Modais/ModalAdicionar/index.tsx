import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { BASE_URL } from '../../../util/url';


function ModalAdicionar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [task, setTask] = useState('');
  const [descricao, setDescricao] = useState('');

  function adicionaTask() {
    axios.post(`${BASE_URL}/salvar`, {
      task: task,
      descricao: descricao
    }).then(res => { console.log(res) }).catch(err => console.log(err));
    window.location.reload();
  }

  return (
    <>
      <Button variant="warning" size="sm" onClick={handleShow}>
      <img src="https://img.icons8.com/material-two-tone/24/000000/plus-math--v1.png"/>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Task</Form.Label>
              <Form.Control
                type="text"
                autoFocus
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
                onChange={(e) => setDescricao(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            fechar
          </Button>
          <Button variant="primary" onClick={adicionaTask}>
            Adicionar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalAdicionar;