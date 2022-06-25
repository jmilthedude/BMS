import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/users";

class UserService {
    getUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    saveUser(user) {
        return axios.post(USER_API_BASE_URL, user);
    }

    deleteUserById(id) {
        return axios.post(USER_API_BASE_URL + '/' + id);
    }
}

export default new UserService()