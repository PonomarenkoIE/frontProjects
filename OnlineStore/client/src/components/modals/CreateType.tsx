import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { IType, ModalProps } from '../../models';
import { createType } from '../../http/deviceAPI';

export default function CreateType({show, onHide}: ModalProps) {
  const [type, setType] = useState<IType>({id: 0, name: ''})

  function addType() {
    createType(type).then(data => { 
      setType({id: 0, name: ''})
      onHide()
    })
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control 
            placeholder='Введите название типа'
            value={type.name}
            onChange={(e) => setType({...type, name: e.target.value})}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
        <Button variant='outline-success' onClick={addType}>Добавить</Button>
      </Modal.Footer>
    </Modal>
);
}
