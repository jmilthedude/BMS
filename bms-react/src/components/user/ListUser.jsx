import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import UserService from "../../services/UserService";
import styles from "./listUser.module.scss";
import UserCard from "./UserCard";

const ListUser = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        UserService.getUsers().then((res) => {
            setUsers(res.data);
        });
    }, []);

    return (
        <div className={styles.userListContainer}>
            <h2 className={styles.h2}>Users</h2>
            <button className={styles.btnCreate} onClick={() => navigate("/upsert-user")}>+</button>
            <div className={styles.userGrid}>
                {
                    users.map(
                        user => <UserCard id={user.id} key={user.id} />
                    )
                }
            </div>
        </div>
    );
}

export default ListUser;