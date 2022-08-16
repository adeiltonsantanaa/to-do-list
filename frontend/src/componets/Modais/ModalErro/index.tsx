import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function ModalErro() {

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  function recarregar() {
    window.location.reload();
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Erro :(</Modal.Title>
        </Modal.Header>
            <Modal.Body>Infelizmente não conseguimos nos conectar com nossa base de dados.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={recarregar}>
            Tentar novamente
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalErro;