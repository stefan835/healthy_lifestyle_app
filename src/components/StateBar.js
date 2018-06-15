import React from 'react'

import ProgressIndicator from './ProgressIndicator'
import Slider from "./Slider";
import ProteinOptions from "./ProteinOptions";
import {connect} from "react-redux";

const StateBar = (props) => {
  return (
    <div className='state-bar'>
      <ProgressIndicator user={props.user}/>
      <Slider user={props.user}/>
      <ProteinOptions user={props.user}/>
    </div>
  )
};

export default connect(
  state => ({user: state.userData.user}),
)(StateBar)