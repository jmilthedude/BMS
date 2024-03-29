import axios from "axios";

const USER_API_BASE_URL = process.env.REACT_APP_API_URL + '/users';

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

    getUserById(id) {
        return axios.get(USER_API_BASE_URL + '/' + id);
    }

    updateUser(id, user) {
        return axios.put(USER_API_BASE_URL + '/' + id, user);
    }
}

export default new UserService()