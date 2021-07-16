import { LOGIN_USER, REGISTER_USER } from "../_actions/types";

export default function (state = {}, action) {
  console.log("-0-0000>", action);
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
      break;
    case REGISTER_USER:
      return { ...state, registerSucess: action.payload };
      break;
    default:
      return state;
      break;
  }
}
