import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/auth/";

class AuthService {
    login(email, password) {
        return axios
            .post(API_URL + "authenticate", {
                email,
                password
            })
            .then(response => {
                if (response.data.accessToken) {
                    console.log("sh response  " + response.data.accessToken)
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
        console.log(localStorage.getItem("user") +"  dfdfdfdf")
    }

    register(username, email, password) {
        return axios.post(API_URL + "register", {
            username,
            email,
            password
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }
}

export default new AuthService();