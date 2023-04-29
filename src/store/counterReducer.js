const initialState = {
    count: 1
};

export const SET_COUNT = 'SET_COUNT';
export const INCREASE_COUNT = 'INCREASE_COUNT';
export const DECREASE_COUNT = 'DECREASE_COUNT';

export const counterReducer = (state = initialState, action) => {
    if (action.type === INCREASE_COUNT){
      return {...state, count: state.count+1};
    }else if(action.type === DECREASE_COUNT){
      return {...state, count: state.count-1};
    }else if(action.type === SET_COUNT){
      return {...state, count: isNaN(parseInt(action.payload)) ? 0 : parseInt(action.payload)};
    }else{
        return state;
    };
  };

export const increaseCounter = () => ({type: INCREASE_COUNT});
export const decreaseCounter = () => ({type: DECREASE_COUNT});
export const setCounter = payload => ({type: SET_COUNT, payload:payload});
