import React from 'react'
import { routes } from '../routes'
import { Link } from 'react-router-dom'
import '../style/css/Nav.css'

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-links">
        {routes.map(({path, linkTitle}) => 
          <Link 
            to={path}  
            key={path}
            className='nav__link'
          >{linkTitle}</Link>
        )}
      </div>
    </nav>
  )
}