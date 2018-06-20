import React from 'react'
import {Link} from 'react-router-dom'

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 1
    };
  }

  componentDidMount() {
    this.setState({
      active: this.props.active
    })
  }

  render() {
    const handlerClick = (e) => {
      this.setState({
        active: parseInt(e.target.getAttribute('data-id'), 10) || this.state.active
      })
    };

    return (
      <div className="nav-container">
        <nav className={'nav'}>
          <span className='decoration-line'> </span>
          <ul className='nav__items' onClick={handlerClick}>
            <li className={`${ this.state.active !== 1 ? 'nav__item' : 'nav__item nav__item--active'}`}>
              <Link to={'/dashboard'} className="nav__link" data-id={1}>Dashboard</Link>
            </li>
            <li className={`${ this.state.active !== 2 ? 'nav__item' : 'nav__item nav__item--active'}`}>
              <Link to={'/recipes'} className="nav__link" data-id={2}>Recipes</Link>
            </li>
            <li className={`${ this.state.active !== 3 ? 'nav__item' : 'nav__item nav__item--active'}`}>
              <Link to={'/challenge'} className="nav__link" data-id={3}>Challenge</Link>
            </li>
          </ul>
        </nav>
        <nav className="hamburger-nav" onClick={handlerClick}>
          <input type="checkbox" id="open-menu-input" className="menu-input-checkbox"/>
          <label htmlFor="open-menu-input" className="menu-input-label">
            <img className="menu-icon" src="media/icons/menu.svg" alt="menu"/>
          </label>
          <ul className="menu--expanded">
            <label htmlFor="open-menu-input" className="menu-input-label">
              <span className='icon-close'>x</span>
            </label>
            <li className={`${ this.state.active !== 1 ? 'nav__item' : 'nav__item nav__item--active'}`}>
              <Link to={'/dashboard'} className="nav__link" data-id={1}>Dashboard</Link>
            </li>
            <li className={`${ this.state.active !== 2 ? 'nav__item' : 'nav__item nav__item--active'}`}>
              <Link to={'/recipes'} className="nav__link" data-id={2}>Recipes</Link>
            </li>
            <li className={`${ this.state.active !== 3 ? 'nav__item' : 'nav__item nav__item--active'}`}>
              <Link to={'/challenge'} className="nav__link" data-id={3}>Challenge</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navigation