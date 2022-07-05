import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import UserService from "../services/UserService";
import styles from "../styles/listUser.module.scss";

const ListUser = () => {
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
        <div className={styles.card}>
            <h2 className={styles.h2}>User List</h2>
            <div>
                <button className={styles.btnCreate} onClick={() => navigate("/upsert-user")}>+</button>
            </div>
            <div>
                <table>
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
                                    <button onClick={() => updateUser(user)}>Update</button>
                                    <button className={"btn-danger"} onClick={e => deleteUser(e, user)}>Delete</button>
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

export default ListUser;