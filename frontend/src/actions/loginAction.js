import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "constants/loginConstants";

export const login = () => async (dispatch) => {
  dispatch({
    type: LOGIN_REQUEST,
  });
  try {
    let data = "login success";
    //CHECK LOGIN VALID HERE
    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.message });
  }
};
