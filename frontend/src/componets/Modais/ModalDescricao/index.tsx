import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toDo } from '../../../models/toDo';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [toDo, setToDo] = useState<toDo[]>([]);

  type Props = {
    id: number;
  }
  function abreModal(id: number) {
    axios.get(`http://localhost:8080/to-do/task/${id}`).then(res => { setToDo(res.data) });
  }

  return (
    <>
      <Button variant="info" size="sm" onClick={handleShow}>
      <img src="https://img.icons8.com/ios-glyphs/30/000000/visible--v1.png"/>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Descrição</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;