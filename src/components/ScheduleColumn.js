import React from 'react'

import ScheduleColumnDietDay from "./ScheduleColumnDietDay";
import ScheduleColumnFreeDay from "./ScheduleColumnFreeDay";

const ScheduleColumn = (props) => {
  return (
    props.day.diet ?
     <ScheduleColumnDietDay day={props.day} index={props.index}/>
      :
     <ScheduleColumnFreeDay day={props.day}/>
  )
};

export default ScheduleColumn
