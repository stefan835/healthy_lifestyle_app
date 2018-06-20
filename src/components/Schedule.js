import React from 'react'
import {connect} from 'react-redux'
import ScheduleColumn from "./ScheduleColumn";
import ScheduleColumnHeaders from "./ScheduleColumnHeaders";

const Schedule = (props) => {
  return (
    <table className='schedule'>
      <tbody className='table'>
      <ScheduleColumnHeaders/>
      {
        props.user.schedule ? props.user.schedule.map((day, index) => {
            return <ScheduleColumn key={index} day={day} index={index}/>
          })
          :
          null
      }
      </tbody>
    </table>
  )
};

export default connect(
  state => ({
    user: state.userData.user
  }),
)(Schedule)
