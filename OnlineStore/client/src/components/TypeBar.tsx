import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '..'
import { ListGroup } from 'react-bootstrap'
import { IType } from '../models'

export default observer(function TypeBar() {
  const {deviceStore} = useContext(Context)

  return (
    <ListGroup>
      {deviceStore.types.map(type => 
        <ListGroup.Item
          style={{cursor: 'pointer'}}
          active={type.id === deviceStore.selectedType.id}
          onClick={() => 
            deviceStore.selectedType === type ? 
            deviceStore.setSelectedType({} as IType) : 
            deviceStore.setSelectedType(type)
          }
          key={type.id}
        >
          {type.name}
        </ListGroup.Item>
      )}
    </ListGroup>
  )
})
