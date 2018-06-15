const LOAD = 'userData/LOAD';
const UPDATE = 'userData/UPDATE';

export const userDataLoad = (userData) => ({
  type: LOAD,
  userData
});
export const userDataUpdate = (key, newData) => ({
  type: UPDATE,
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
    default:
      return state
  }
}

