import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toDo } from '../../../models/toDo';

type Props = {
  Desc: string;
  Task: string;
}

function ModalDescricao({ Desc, Task }: Props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button id='btnAbrirModal' variant="info" size="sm" onClick={handleShow}>
        <img src="https://img.icons8.com/ios-glyphs/30/000000/visible--v1.png" />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{Task}</Modal.Title>
        </Modal.Header>
            <Modal.Body>{Desc}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDescricao;