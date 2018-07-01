import React from 'react'
import {connect} from "react-redux";
import ReactSVG from 'react-svg'

import {getObjectKeys} from "./_utils/getObjectKeys";
import {formatTime} from "./_utils/formatTime";
import {getDayActivities} from "./_utils/getDayActivities";
import {workoutUpdate, doneUpdate} from "../state/userData";

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
      dayActivities: getDayActivities(this.props.schedule[this.props.index]),
      workout: this.props.schedule[this.props.index].workout,
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.schedule !== prevProps.schedule) {
      this.setState({
        workout: this.props.schedule[this.props.index].workout,
        dayActivities: getDayActivities(this.props.schedule[this.props.index])
      })
    }
  }

  render() {

    const toggleWorkout = () => {
      this.props.workoutUpdate()
    };

    const toggleDone = (e) => {
      const hour = e.currentTarget.getAttribute('data-id');
      this.props.doneUpdate(hour, !this.state.dayActivities[hour]);
    };

    return (
      <tr
        className={this.props.schedule[this.props.index].active ? 'table__column table__column--active' : 'table__column'}>
        <th className='column__header'>Day {this.props.schedule[this.props.index].day}</th>
        {
          getObjectKeys(this.props.schedule[this.props.index].diet).map((key, index) => {
            return <td
              className={this.props.schedule[this.props.index].diet[key].content === 'Bod•ē Shake' ? 'grid shake' : 'grid'}
              key={index}
              onClick={this.props.schedule[this.props.index].active ? e => toggleDone(e) : null}
              data-id={key}>
              <div className='time-indicator'><span className='table__time'>{formatTime(key)}</span></div>
              {this.state.dayActivities[key] ? <span className='icon-done'/> : null}
              {this.props.schedule[this.props.index].diet[key].content}
            </td>
          })
        }
        <td className='grid grid--short'>{this.props.schedule[this.props.index].carbon}</td>
        <td className='grid grid--short'>{this.state.workout ?
          <ReactSVG
            path={`media/icons/dumbbell.svg`}
            svgClassName={'icon-dumbbell icon-dumbbell--done'}
            className={'icon-dumbbell icon-dumbbell--done'}
            onClick={this.props.schedule[this.props.index].active ? e => toggleWorkout(e) : null}
          />
          :
          <ReactSVG
            path={`media/icons/dumbbell.svg`}
            svgClassName={'icon-dumbbell'}
            className={'icon-dumbbell'}
            onClick={this.props.schedule[this.props.index].active ? e => toggleWorkout(e) : null}
          />
        }</td>
      </tr>
    )
  }
}

export default connect(
  state => ({
    schedule: state.userData.user.schedule
  }),
  dispatch => ({
    workoutUpdate: (dayIndex, newData) => dispatch(workoutUpdate(dayIndex, newData)),
    doneUpdate: (key, newData) => dispatch(doneUpdate(key, newData))
  })
)(ScheduleColumnDietDay)
