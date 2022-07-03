import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {useNavigate} from 'react-router-dom';
import UserService from "../services/UserService";

const ListUserComponent = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        UserService.getUsers().then((res) => {
            setUsers(res.data);
        });
    }, []);

    function deleteUser(e, user) {
        e.preventDefault();
        let flag = window.confirm('Are you sure you want to remove ' + user.firstName);
        if (flag) {
            UserService.deleteUserById(user.id).then((res) => {
                window.location.reload();
            }).catch((error) => {
                alert('Unable to delete. Error: ' + error);
            });
        }
    }

    function updateUser(user) {
        navigate('/upsert-user/' + user.id);
    }

    return (
        <div>
            <h2 style={{textAlign: "center"}}>User List</h2>
            <div style={{textAlign:"right"}}>
                <button className={"bms-btn bms-btn-create"} onClick={() => navigate("/upsert-user")}>Create User</button>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <table className={"bms-user-table"}>
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
                                    <button className={"bms-btn bms-btn-update"} onClick={() => updateUser(user)}>Update</button>
                                    <button className={"bms-btn bms-btn-delete"} onClick={e => deleteUser(e, user)}>Delete</button>
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