import { LOADING_DATA, API_DATA } from "../actions/actionTypes";

const INITIAL_STATE = {
  loading: false,
  data: []
}

const redditReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      }
    case API_DATA:
      return {
        ...state,
        data: action.state.data.children.map(({data}) => data),
        loading: false,
      }
    default:
    return state;
  }
}

export default redditReducer;