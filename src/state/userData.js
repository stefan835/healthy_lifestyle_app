const LOAD = 'userDataData/LOAD';

export const userDataLoad = (userData) => ({
  type: LOAD,
  userData
});

const initialState = {
  user: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return {
        user: action.userData
  };
    default:
      return state
  }
}

