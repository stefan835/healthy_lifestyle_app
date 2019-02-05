import React from 'react'

import Header from '../Header'
import StateBar from "../StateBar";
import Schedule from "../Schedule";
import References from "../References";

const DashboardView = () => {
  return (
    <div>
      <Header active={1}/>
      <div className='container'>
        <StateBar/>
        <Schedule/>
        <References/>
      </div>
    </div>
  )
};

export default DashboardView