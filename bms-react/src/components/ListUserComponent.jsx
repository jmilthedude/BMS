import React, {useEffect, useState} from 'react';
import UserService from "../services/UserService";
import 'bootstrap/dist/css/bootstrap.css';
import {useNavigate} from 'react-router-dom';

function ListUserComponent() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        UserService.getUsers().then((res) => {
            setUsers(res.data);
        });
    }, []);

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
                            users => <tr key={users.id}>
                                <td> {users.firstName}</td>
                                <td> {users.lastName}</td>
                                <td> {users.emailId}</td>
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