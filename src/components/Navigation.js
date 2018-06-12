import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = () => {
  return (
    <div className="nav-container">
      <nav className={'nav'}>
        <span className='decoration-line'> </span>
        <ul className='nav__items'>
          <li className="nav__item nav__item--active">
            <Link to={'/dashboard'} className="nav__link">Dashboard</Link>
          </li>
          <li className="nav__item">
            <Link to={'/recipes'} className="nav__link">Recipes</Link>
          </li>
          <li className="nav__item">
            <Link to={'/challenge'} className="nav__link">Challenge</Link>
          </li>
        </ul>
      </nav>
      <nav className="hamburger-nav">
        <input type="checkbox" id="open-menu-input" className="menu-input-checkbox"/>
        <label htmlFor="open-menu-input" className="menu-input-label">
          <img className="menu-icon" src="media/menu.svg" alt="menu"/>
        </label>
        <ul className="menu--expanded">
          <label htmlFor="open-menu-input" className="menu-input-label">
            <span className='icon-close'>x</span>
          </label>
          <li className="nav__item nav__item--active">
            <Link to={'/dashboard'} className="nav__link">Dashboard</Link>
          </li>
          <li className="nav__item">
            <Link to={'/recipes'} className="nav__link">Recipes</Link>
          </li>
          <li className="nav__item">
            <Link to={'/challenge'} className="nav__link">Challenge</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
};

export default Navigation