import React from 'react'

import Navigation from './Navigation'
import UserPanel from './UserPanel'

const Header = (props) => {
  return (
    <header className='header'>
      <div className='container header__container'>
        <Navigation active={props.active}/>
        <UserPanel/>
      </div>
    </header>
  )
};

export default Header