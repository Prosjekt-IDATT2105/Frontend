//imports:
import axios from "axios";

/**Metode som sender brukernavnet og passordet brukeren skriver inn for å sjekke om det stemmer 
 * med noe som ligger i databasen og får tilbake respons fra backend*/
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