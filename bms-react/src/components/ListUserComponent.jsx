import React, {useEffect, useState} from 'react';
import UserService from "../services/UserService";
import 'bootstrap/dist/css/bootstrap.css';
import {useNavigate} from 'react-router-dom';

const ListUserComponent = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        UserService.getUsers().then((res) => {
            setUsers(res.data);
        });
    }, []);

    function deleteUser(user) {
        let flag = window.confirm('Are you sure you want to remove ' + user.firstName);
        if (flag) {
            UserService.deleteUserById(user.id).then((res) => {
                alert('User Deleted.');
                window.location.reload();
            }).catch((error) => {
                alert('Unable to delete. Error: ' + error);
            });
        }
    }

    return (
        <div>
            <h2 className="text-center">User List</h2>
            <div className={"row"}>
                <button className={"btn btn-primary"} onClick={() => navigate("/create-user")}>Create User</button>
            </div>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email ID</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map(
                            user => <tr key={user.id}>
                                <td> {user.firstName}</td>
                                <td> {user.lastName}</td>
                                <td> {user.emailId}</td>
                                <td>
                                    <button className={"btn btn-danger"} onClick={() => deleteUser(user)}>Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListUserComponent;