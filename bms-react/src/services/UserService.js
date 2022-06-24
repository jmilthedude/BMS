import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/users";

class UserService {
    getUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    saveUser(user) {
        return axios.post(USER_API_BASE_URL, user);
    }
}

export default new UserService()