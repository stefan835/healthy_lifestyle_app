import React from 'react'

import ReactSVG from 'react-svg'


const ScheduleColumnFreeDAy = (props) => {
  return (
    <tr className={props.day.active ? 'table__column table__column--active' : 'table__column'}>
      <th className='column__header'>Day {props.day.day}</th>
      <td className='grid free-day'>
        <div className='free-day__content'>
          <ReactSVG
            path={`media/icons/Happy.svg`}
            svgClassName={'icon-happy'}
          />
          GUILT-FREE DAY
        </div>
      </td>
      <td className='grid print-grid'>
        <span className='print'
              onClick={function () {
                window.print()
              }}>
        <ReactSVG
          path={`media/icons/print.svg`}
          svgClassName={'icon-print'}
        />
        <span>Print</span>
        </span>
      </td>
    </tr>
  )
};

export default ScheduleColumnFreeDAy
