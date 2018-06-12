import React from 'react'

import Header from '../Header'
import StateBar from "../StateBar";

const DashboardView = () => {
  return (
    <div>
      <Header active={1}/>
      <div className='container'>
        <StateBar/>
      </div>
    </div>
  )
};

export default DashboardView