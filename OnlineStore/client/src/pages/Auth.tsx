import React, { useContext, useState } from 'react'
import { Button, Card, Container, Form, Row } from 'react-bootstrap'
import { NavLink, useLocation, useNavigate} from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { login, registration } from '../http/userAPI'
import { observer } from 'mobx-react-lite'
import { Context } from '..'
import { AxiosError } from 'axios'

export default observer(function Auth() {
  const {userStore} = useContext(Context)
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const click = async () => {
    try {
      let user
      if (isLogin) {
        user = await login(email, password)
      } else {
        user = await registration(email, password)
      }
      userStore.setUser(user)
      userStore.setIsAuth(true)
      navigate(SHOP_ROUTE)
      console.log(user)
    } catch (e: any) {      
      console.log(e.response.data.message)
    }
    
  }

  return (
    <Container 
      className='d-flex justify-content-center align-items-center'
      style={{height: window.innerHeight - 54}}
    >
      <Card style={{width: '600px'}} className='p-5'>
        <h2 className='me-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className='d-flex flex-column'>
          <Form.Control 
            className='mt-4'
            placeholder='Введите email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control 
            className='mt-4'
            placeholder='Введите пароль'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
          />
          <div className='d-flex justify-content-between align-items-center'>
            {isLogin ?
              <NavLink to={REGISTRATION_ROUTE}>Регистрация</NavLink>
            :
              <NavLink to={LOGIN_ROUTE}>Войти в аккаунт</NavLink>
            }
            
            <Button 
              className="mt-4 align-self-end" 
              variant={"outline-success"}
              onClick={click}
            >{isLogin ? 'Войти' : 'Зарегистрироваться'}</Button>
          </div>
        </Form>
      </Card>      
    </Container>
  )
})