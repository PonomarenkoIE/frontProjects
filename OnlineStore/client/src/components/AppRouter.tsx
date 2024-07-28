import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { authRouters, publicRoutes } from '../routes'
import { SHOP_ROUTE } from '../utils/consts'
import { Context } from '..'
import { observer } from 'mobx-react-lite'

export default observer(function AppRouter() {
  const {userStore} = useContext(Context)  

  return (
    <Routes>
      {userStore.isAuth && authRouters.map(({path, Component}) => 
        <Route path={path} Component={Component} key={path}/>
      )}
      {publicRoutes.map(({path, Component}) => 
        <Route path={path} Component={Component} key={path}/>
      )}
      <Route path="*" element={<Navigate to={SHOP_ROUTE}/>} />
    </Routes>
  )
})