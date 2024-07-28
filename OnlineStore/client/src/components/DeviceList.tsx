import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '..'
import { Row } from 'react-bootstrap'
import DeviceItem from './DeviceItem'

export default observer(function DeviceList() {
  const {deviceStore} = useContext(Context)

  return (
    <Row className='d-flex'>
      {deviceStore.devices.map(device => 
        <DeviceItem key={device.id} device={device}/>
      )}
    </Row>
  )
})