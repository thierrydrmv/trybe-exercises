import { USER_DATA, LOGIN_DATA } from "../actions/actionTypes";

const INITIAL_STATE = {
  email: '',
  senha: '',
  users: [],
}

function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_DATA: 
    return {
      ...state,
      email: action.state.email,
      senha: action.state.senha
    }
    case USER_DATA:
      return {
        ...state,
        users: [...state.users, action.state ],
      }
    default:
      return state;
  }
}

export default reducer;