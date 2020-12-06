import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "constants/loginConstants";

export const loginReducer = (state = [(loading: true), (user: [])], action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loading: true };
    case LOGIN_SUCCESS:
      return { loading: false, user: action.payload };
    case LOGIN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
