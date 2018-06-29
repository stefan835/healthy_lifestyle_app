import React from 'react'

import {getObjectKeys} from "./_utils/getObjectKeys";
import ReactSVG from 'react-svg'
import {formatTime} from "./_utils/formatTime";
import {getDayActivities} from "./_utils/getDayActivities";

class ScheduleColumnDietDay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workout: false,
      dayActivities: {
        '6am': false,
        '9am': false,
        '12pm': false,
        '3pm': false,
        '6pm': false,
      }
    }
  }

  componentDidMount() {
    this.setState({
      dayActivities: getDayActivities(this.props.day),
      workout: this.props.day.workout,
    })
  }

  render() {
    const toggleWorkout = () => {
      this.setState({
        ...this.state,
        workout: !this.state.workout
      })
    };

    const isActive = (e, fnc) => {
      return this.props.day.active ? fnc(e) : null
    };

    const toggleDone = (e) => {
      const hour = e.currentTarget.getAttribute('data-id');
      this.setState({
        ...this.state,
        dayActivities: {
          ...this.state.dayActivities,
          [hour]: !this.state.dayActivities[hour]
        }
      })
    };

    return (
      <tr className={this.props.day.active ? 'table__column table__column--active' : 'table__column'}>
        <th className='column__header'>Day {this.props.day.day}</th>
        {
          getObjectKeys(this.props.day.diet).map((key, index) => {
            return <td className={this.props.day.diet[key].content === 'Bod•ē Shake' ? 'grid shake' : 'grid'}
                       key={index}
                       onClick={(e) => {
                         isActive(e, toggleDone)
                       }}
                       data-id={key}>
              <div className='time-indicator'><span className='table__time'>{formatTime(key)}</span></div>
              {this.state.dayActivities[key] ? <span className='icon-done'/> : null}
              {this.props.day.diet[key].content}
            </td>
          })
        }
        <td className='grid grid--short'>{this.props.day.carbon}</td>
        <td className='grid grid--short'>{this.state.workout ?
          <ReactSVG
            path={`media/icons/dumbbell.svg`}
            svgClassName={'icon-dumbbell icon-dumbbell--done'}
            className={'icon-dumbbell icon-dumbbell--done'}
            onClick={(e) => {
              isActive(e, toggleWorkout)
            }}
          />
          :
          <ReactSVG
            path={`media/icons/dumbbell.svg`}
            svgClassName={'icon-dumbbell'}
            className={'icon-dumbbell'}
            onClick={(e) => {
              isActive(e, toggleWorkout)
            }}
          />
        }</td>
      </tr>
    )
  }
}

export default ScheduleColumnDietDay