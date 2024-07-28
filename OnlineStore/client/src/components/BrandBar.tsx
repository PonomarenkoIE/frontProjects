import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Card, Row } from 'react-bootstrap'
import { Context } from '..'
import { IBrand } from '../models'

export default observer(function BrandBar() {
  const {deviceStore} = useContext(Context)

  return (
    <Row className='d-flex'>
      {deviceStore.brands.map(brand => 
        <Card
          className='p-3'
          style={{cursor: 'pointer'}}
          onClick={() => 
            deviceStore.selectedBrand === brand ? 
            deviceStore.setSelectedBrand({} as IBrand) : 
            deviceStore.setSelectedBrand(brand)
          }
          border={brand.id === deviceStore.selectedBrand.id ? 'danger' : 'light'}
          key={brand.id}
        >
          {brand.name}
        </Card>
      )}
    </Row>
  )
})