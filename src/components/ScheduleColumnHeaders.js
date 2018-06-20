import React from 'react'

const ScheduleColumnHeaders = () => {
  return (
    <tr className={`table__column table__headers`}>
      <th className='grid'><span className='table__time'>6:00</span> AM</th>
      <th className='grid'><span className='table__time'>9:00</span> AM</th>
      <th className='grid'><span className='table__time'>12:00</span> PM</th>
      <th className='grid'><span className='table__time'>3:00</span> PM</th>
      <th className='grid'><span className='table__time'>6:00</span> PM</th>
      <td className='grid grid--short workout'>Workout</td>
    </tr>
  )
};

export default ScheduleColumnHeaders
