import React, { useState } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import { IBrand, ModalProps } from '../../models'
import { createBrand } from '../../http/deviceAPI'

export default function CreateBrand({show, onHide}: ModalProps) {
  const [brand, setBrand] = useState<IBrand>({id: 0, name: ''})

  function addBrand() {
    createBrand(brand).then(data => { 
      setBrand({id: 0, name: ''})
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
            value={brand.name}
            onChange={(e) => setBrand({...brand, name: e.target.value})}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
        <Button variant='outline-success' onClick={addBrand}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  )
}
