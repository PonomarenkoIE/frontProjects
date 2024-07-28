import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { IInfo, ModalProps } from '../../models'
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import { fetchTypes, fetchBrands, createDevice } from '../../http/deviceAPI';

export default observer(function CreateDevice({show, onHide}: ModalProps) {
  const {deviceStore} = useContext(Context)
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [file, setFile] = useState<File>({} as File)
  const [info, setInfo] = useState<IInfo[]>([])

  useEffect(() => {
    fetchTypes().then(data => deviceStore.setTypes(data))
    fetchBrands().then(data => deviceStore.setBrands(data))
  }, [])

  const addInfo = () => {
    const newInfo: IInfo = {id: Date.now(), title: '', description: ''}
    setInfo([...info, newInfo])
  }
  const removeInfo = (id: number) => {
    setInfo(info.filter((value) => value.id !== id))
  }
  const changeInfo = (key: string, value: string, id: number) => {
    setInfo(info.map(i => i.id === id ? {...i, [key]: value} : i))
  }

  function selectFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files !== null)
      setFile(e.target.files[0])
  }

  function addDevice() {
    let formData = new FormData()
    formData.append('name', name)
    formData.append('price', `${price}`)
    formData.append('img', file)
    formData.append('brandId', `${deviceStore.selectedBrand.id}`)
    formData.append('typeId', `${deviceStore.selectedType.id}`)
    formData.append('info', JSON.stringify(info))

    for (let key of formData.entries()) {
      console.log(key)
    }
    createDevice(formData).then(data => onHide())    
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
          <Dropdown className='mt-3 mb-3'>
            <Dropdown.Toggle>{deviceStore.selectedType.name || 'Тип'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {deviceStore.types.map(value => 
                <Dropdown.Item 
                  key={value.id}
                  onClick={() => deviceStore.setSelectedType(value)}
                >
                  {value.name}
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className='mt-3 mb-3'>
            <Dropdown.Toggle>{deviceStore.selectedBrand.name || 'Бренд'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {deviceStore.brands.map(value => 
                <Dropdown.Item 
                  key={value.id}
                  onClick={() => deviceStore.setSelectedBrand(value)}
                >
                  {value.name}
                </Dropdown.Item>
              )}
            </Dropdown.Menu>            
          </Dropdown>
          <Form.Control 
            className='mt-3'
            placeholder='Название устройства'
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Form.Control 
            className='mt-3'
            placeholder='Стоимость устройства'
            type='number'
            value={price}
            onChange={e => setPrice(Number(e.target.value))}
          />
          <Form.Control 
            className='mt-3'
            placeholder='Изображение устройства'
            type='file'
            onChange={selectFile}
          />
          <hr/>
          <Button
            variant='outline-dark'
            onClick={addInfo}
          >Добавить новое свойство</Button>
          {info.map(value => 
            <Row className='mt-4' key={value.id}>
              <Col md={4}>
                <Form.Control
                  placeholder='Название свойства'
                  value={value.title}
                  onChange={(e) => changeInfo('title', e.target.value, value.id)}
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  placeholder='Описание свойства'
                  value={value.description}
                  onChange={(e) => changeInfo('description', e.target.value, value.id)}
                />
              </Col>
              <Col md={4}>
                <Button 
                  variant='outline-danger'
                  onClick={() => removeInfo(value.id)}
                >Удалить</Button>
              </Col>
            </Row>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
        <Button variant='outline-success' onClick={addDevice}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  )
})
