import axios from "axios";

export function doLogin(loginRequest) {
    return axios
        .post(`/login`, null, {
            params: {
                username: loginRequest.username,
                password: loginRequest.password,
            },
        })
        .then((response) => {
            return response.data;
        });
}