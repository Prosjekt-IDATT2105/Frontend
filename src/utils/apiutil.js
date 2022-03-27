import axios from "axios";

export function doLogin(loginRequest) {
  return axios
    .post(`http://localhost:8085/qs/login`, null, {
      params: {
        username: loginRequest.username,
        password: loginRequest.password,
      },
    })
    .then((response) => {
      return response.data;
    });
}
