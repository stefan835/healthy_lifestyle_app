import React from 'react'

const ProgressIndicator = (props) => {
  let weeks = [];
  for (let i = 1; i <= 12; i++) {
    weeks.push(i)
  }
  return (
    <div className="progress">
      <h3>YOUR 12 WEEK PROGRESS</h3>
      <div className='progress__indicator'>
        {
          weeks.map(function (week) {
            if (week === props.user.progress) {
              return <span key={week} className={'week-indicator week-indicator--active'}><span
                className='progress__number'>{week}</span></span>
            } else if (week < props.user.progress) {
              return <span key={week} className={'week-indicator week-indicator--past'}><span
                className='progress__number'>{week}</span></span>
            } else if (week > props.user.progress) {
              return <span key={week} className={'week-indicator week-indicator--future'}><span
                className='progress__number'>{week}</span></span>
            } else
              return null
          })
        }
      </div>
    </div>

  )
};

export default ProgressIndicator
