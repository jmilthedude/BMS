import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import UserService from "../../services/UserService";
import styles from './userCard.module.scss';

const UserCard = (props) => {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');

    useEffect(() => {
        if (props.id) {
            loadUser();
        }
    }, []);

    const loadUser = async () => {
        const response = await UserService.getUserById(props.id);
        setFields(response.data);
    }

    function setFields(user) {
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setEmailId(user.emailId);
    }

    function deleteUser(e, id) {
        e.preventDefault();
        let flag = window.confirm('Are you sure you want to remove ' + firstName);
        if (flag) {
            UserService.deleteUserById(id).then((res) => {
                window.location.reload();
            }).catch((error) => {
                alert('Unable to delete. Error: ' + error);
            });
        }
    }

    function updateUser(id) {
        navigate('/upsert-user/' + props.id);
    }

    return (
            <div className={styles.userCardContainer}>
                <label className={styles.name}>{firstName} {lastName}</label>
                <label className={styles.email}>{emailId}</label>
                <div className={styles.actions}>
                    <button onClick={() => updateUser(props.id)}>Edit</button>
                    <button className={"btn-danger"} onClick={e => deleteUser(e, props.id)}>Delete</button>
                </div>
            </div>
    );
}

export default UserCard;