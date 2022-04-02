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
export function doSendToQue(informationRequest) {
    return axios
        .post('/que', null, {
            params: {
                location: informationRequest.location,
                type: informationRequest.type,
                oving: informationRequest.oving,
                username: informationRequest.username,
            }
        })
        .then((response) => {
            return response.data;
        })
}