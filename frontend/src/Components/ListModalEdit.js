import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/esm/Image';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function ListModalEdit() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
<>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Card>
            <Card.Header as="h5">Název nákupního seznamu
                <Image src='https://tse1.mm.bing.net/th?q=blue+color' width="25" height="25" roundedCircle   display="block" marginLeft="auto"wmarginRight= "20px "/>
            </Card.Header>
            <Card.Body>
                <InputGroup className="mb-3">
                    <InputGroup.Checkbox aria-label="Checkbox for following text input"/>
                    <Form.Control aria-label="Text input with checkbox" />
                </InputGroup>
            </Card.Body>
            <Card.Footer className="text-muted">
                    <Button variant="primary"onClick={/* handleClick */console.log('ahoj')}>Edit</Button>
                </Card.Footer>
            </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ListModalEdit;