import React from 'react'

import Navigation from './Navigation'
import UserPanel from './UserPanel'

const Header = () => {
  return (
    <header className='header'>
      <div className='container header__container'>
        <Navigation/>
        <UserPanel/>
      </div>
    </header>
  )
};

export default Header