import React, {Component} from 'react';
import EmployeeService from "../services/UserService";

class ListUserComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        EmployeeService.getUsers().then((res) => {
            this.setState({users: res.data});
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">User List</h2>
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
                            this.state.users.map(
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
}

export default ListUserComponent;