import React, { useContext, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TypeBar from '../components/TypeBar'
import BrandBar from '../components/BrandBar'
import DeviceList from '../components/DeviceList'
import { observer } from 'mobx-react-lite'
import { Context } from '..'
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceAPI'
import Pages from '../components/Pages'

export default observer(function Shop() {
  const {deviceStore} = useContext(Context)

  useEffect(() => {
    fetchTypes().then(data => deviceStore.setTypes(data))
    fetchBrands().then(data => deviceStore.setBrands(data))    
  }, [])

  useEffect(() => {
    fetchDevices(deviceStore.selectedType.id, deviceStore.selectedBrand.id, deviceStore.page, 2).then(data => {
      deviceStore.setDevices(data.rows)
      deviceStore.setTotalCount(data.count)
    })
    
  }, [deviceStore.selectedType, deviceStore.selectedBrand, deviceStore.page])

  return (
    <Container>
      <Row className='mt-2'>
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
          <Pages />
        </Col>
      </Row>
    </Container>
  )
})