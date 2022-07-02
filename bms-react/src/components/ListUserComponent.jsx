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
            <h2 className="text-center">User List</h2>
            <div style={{textAlign: "right"}}>
                <button className={"btn btn-primary"} style={{marginBottom: 5, marginLeft: 0, padding: 5}}
                        onClick={() => navigate("/upsert-user")}>Create User
                </button>
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
                                    <button className={"btn btn-info"} style={{marginRight: 5}}
                                            onClick={() => updateUser(user)}>Update
                                    </button>
                                    <button className={"btn btn-danger"} onClick={e => deleteUser(e, user)}>Delete
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