import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'
import { IDevice } from '../models'
import star from '../assets/star.png'
import { useNavigate } from 'react-router-dom'
import { DEVICE_ROUTE } from '../utils/consts'

interface IDeviceItem {
  device: IDevice
}

export default function DeviceItem({device}: IDeviceItem) {
  const navigate = useNavigate()

  return (
    <Col md={3} className='mt-3' onClick={() => navigate(DEVICE_ROUTE + `/${device.id}`)}>
      <Card style={{width: 150, cursor: 'pointer'}} border='light'>
        <Image width={150} height={150} src={`${process.env.REACT_APP_API_URL}/${device.img}`}/> 
        <div className='d-flex justify-content-between align-items-center mt-1 text-black-50'>
        <div>Samsung</div>
        <div className='d-flex justify-content-center align-items-center '>
          <div>{device.rating}</div>
          <Image src={star}/>
        </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  )
}