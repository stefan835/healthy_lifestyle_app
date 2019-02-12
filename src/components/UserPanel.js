import React from 'react'
import {connect} from "react-redux";

const UserPanel = (props) => {
  return (
    <div className='user-panel'>
      <div className="user-panel__avatar">
        <img className='user-panel__image' src={`media/avatars/${props.user.avatar}`} alt={props.user.name}/>
      </div>
      <div className="user-panel__name">
        <p>{`${props.user.name} ${props.user.surname}`}</p>
        <img className='icon-arrow' src='/media/icons/chevron-up.png' alt="icon-arrow"/>
      </div>
    </div>
  )
};

export default connect(
  state => ({user: state.userData.user}),
)(UserPanel)
