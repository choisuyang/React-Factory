import axios from "axios";
import { LOGIN_USER, REGISTER_USER } from "./types";

export function loginUser(dataToSubmit) {
  const request = axios.post("http://localhost:5000/api/users/login", dataToSubmit).then((response) => {
    console.log("response 3", response);
    console.log("response 4", dataToSubmit);
    return response.data;
  });
  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function registerUser(dataToSubmit) {
  const request = axios.post("http://localhost:5000/api/users/register", dataToSubmit).then((response) => {
    console.log("---res", response);
    console.log("result", response.status);
    console.log("request ->", request);
    console.log("dataSubmit", dataToSubmit);
    return response.data;
  });
  return {
    type: REGISTER_USER,
    payload: request,
  };
}
