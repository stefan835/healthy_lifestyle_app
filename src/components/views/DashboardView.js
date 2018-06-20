import React from 'react'

import Header from '../Header'
import StateBar from "../StateBar";
import Schedule from "../Schedule";

const DashboardView = () => {
  return (
    <div>
      <Header active={1}/>
      <div className='container'>
        <StateBar/>
        <Schedule/>
      </div>
    </div>
  )
};

export default DashboardView