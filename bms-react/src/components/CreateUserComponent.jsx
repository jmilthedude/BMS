import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import UserService from "../services/UserService";

const CreateUserComponent = () => {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');

    useEffect(() => {

    }, []);

    function onChangeFirstName (event) {
        setFirstName(event.target.value);
    }
    function onChangeLastName (event) {
        setLastName(event.target.value);
    }
    function onChangeEmailId (event) {
        setEmailId(event.target.value);
    }
    function saveUser(e) {
        e.preventDefault();
        let user = {firstName, lastName, emailId}
        let userJson = JSON.stringify(user);
        UserService.saveUser(user).then(navigate('/users'));

    }
    function cancel() {
        navigate('/users');
    }


    return (
        <div>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"card col-md-6 offset-md-3"}>
                        <h3 className={"text-center"}>Create User</h3>
                        <div className={"card-body"}>
                            <form>
                                <div className={"form-group"}>
                                    <label>First Name:</label>
                                    <input className={"form-control"} placeholder={"First Name"} name={"firstName"}
                                        value={firstName} onChange={onChangeFirstName}/>
                                    <label>Last Name:</label>
                                    <input className={"form-control"} placeholder={"Last Name"} name={"lastName"}
                                           value={lastName} onChange={onChangeLastName}/>
                                    <label>Email:</label>
                                    <input className={"form-control"} placeholder={"Email"} name={"emailId"}
                                           value={emailId} onChange={onChangeEmailId}/>

                                </div>
                                <button className={"btn btn-success"} onClick={saveUser}>Save</button>
                                <button className={"btn btn-danger"} onClick={cancel} style={{marginLeft: "10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default CreateUserComponent;