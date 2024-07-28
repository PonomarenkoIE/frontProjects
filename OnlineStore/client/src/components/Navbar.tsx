import React, { useContext } from 'react'
import { Context } from '..'
import Nav from 'react-bootstrap/Nav';
import { Button, Container, Navbar } from 'react-bootstrap';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

//observer - отслеживание изменений состояния store
export default observer(function NavBar() {  
  const {userStore} = useContext(Context)
  const navigate = useNavigate()

  function logOut() {
    userStore.setUser({})
    userStore.setIsAuth(false)
  }

  return (
    <Navbar bg="dark" data-bs-theme="dark" className='justify-content-between'>
      <Container>
        <Nav.Link style={{color: 'white'}} href={SHOP_ROUTE}>Device Shop</Nav.Link>
          {userStore.isAuth
          ?
          <Nav className="ml-auto" style={{color: 'white'}}>
            <Button variant={'outline-light'} onClick={() => navigate(ADMIN_ROUTE)}>Админ-панель</Button>
            <Button variant={'outline-light'} className="ms-2" onClick={logOut}>Выйти</Button>
          </Nav>
          :
          <Nav className="ml-auto" style={{color: 'white'}}>
            <Button variant={'outline-light'} onClick={() => {navigate(LOGIN_ROUTE)}}>Авторизация</Button>
          </Nav>
          }
        </Container>
    </Navbar>
  )
})