const initialState = {
    user: {
        name: "Adil",
        age: 17
    }
}

export const CHANGE_NAME_USER = 'CHANGE_NAME_USER';
export const CHANGE_AGE_USER = 'CHANGE_AGE_USER';

export const userReducer = (state = initialState, action) =>{
    if(action.type === CHANGE_NAME_USER){
      return {...state, user: {...state.user, name: action.payload} }
    }else if(action.type === CHANGE_AGE_USER){
      return {...state, user: {...state.user, age: action.payload} }
    }
    return state;
  };
  
export const changeName = payload => ({  type: CHANGE_NAME_USER, payload});
export const changeAge = payload => ({  type: CHANGE_AGE_USER, payload});