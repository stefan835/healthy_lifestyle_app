const LOAD = 'userData/LOAD';
const UPDATE = 'userData/UPDATE';
const WORKOUT = 'userData/WORKOUT';
const DONE = 'userData/DONE';


export const userDataLoad = (userData) => ({
  type: LOAD,
  userData
});
export const userDataUpdate = (key, newData) => ({
  type: UPDATE,
  key,
  newData
});
export const workoutUpdate = () => ({
  type: WORKOUT
});
export const doneUpdate = (key, newData) => ({
  type: DONE,
  key,
  newData
});

const initialState = {
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return {
        user: action.userData
      };
    case UPDATE:
      return {
        ...state,
        user: {
          ...state.user,
          [action.key]: action.newData
        }
      };
    case WORKOUT:
      return {
        ...state,
        user: {
          ...state.user,
          schedule: state.user.schedule.map(day => {
            day.workout = day.active ? !day.workout : day.workout;
            return day
          })
        }
      };
    case DONE:
      return {
        ...state,
        user: {
          ...state.user,
          schedule: state.user.schedule.map(day => {
            if (!day.diet) return day;
            day.diet[action.key].done = day.active && day.diet ? !day.diet[action.key].done : day.diet[action.key].done;
            return day
          })
        }
      };
    default:
      return state
  }
}

