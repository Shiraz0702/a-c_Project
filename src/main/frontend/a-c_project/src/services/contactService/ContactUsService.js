import axios from "axios";


const BASE_URL = "http://localhost:8080/api/v1/auth/";

class ContactUsService {

    saveContactUs(name, phone, email, message) {
        axios.post(BASE_URL + "contactUs", {
            name, phone, email, message
        })
            .then(response => {


                console.log(response.data);
            });
    }
}

export default new ContactUsService();