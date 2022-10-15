import { PLUS_CLICK, MINUS_CLICK } from "../actions/actionTypes";

const INITIAL_STATE = {
  counter: 0,
};

function clickReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PLUS_CLICK:
      return { counter: state.counter + 1 };
    case MINUS_CLICK:
      return { counter: state.counter - 1 }
    default:
      return state;
  }
}
export default clickReducer;