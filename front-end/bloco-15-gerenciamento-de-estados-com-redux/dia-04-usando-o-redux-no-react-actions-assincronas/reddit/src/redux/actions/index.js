import { LOADING_DATA, API_DATA } from "./actionTypes"

const loadingAction = () => ({type: LOADING_DATA})

const apiAction = (state) => ({type: API_DATA, state})

const thunkAction = (state) => async (dispatch) => {
  dispatch(loadingAction());
  const response = await fetch(`https://www.reddit.com/r/${state}.json`);
  const data = await response.json();
  dispatch(apiAction(data));
}

export default thunkAction;