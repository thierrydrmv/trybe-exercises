import { COUNTER_DATA, MINUS } from "../actions";

const INITIAL_STATE = {
  count: 0,
}

export const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COUNTER_DATA:
      return {
        ...state,
        count: state.count + 1
      }
      case MINUS:
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state;
  }

}