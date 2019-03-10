import React, { Component } from 'react';
import mockApi from '../utils/mockApi';

class UsersList extends Component {

    constructor(props) {
        super(props);
        this.state= {
            users: [{id: 0, name: 'Ionel'}, {id: 1, name:'Anca'}]
        }
    }

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers = () => {
        mockApi.fetchUsers().then((users)=> {
            this.setState({users})
        })
    };

    renderUsersList = (users) => (
        <ul>
            {
                users.map((user) => (
                    <li key={user.id}>
                        {user.name}
                    </li>
                ))
            }
        </ul>
    );

    render() {
        let { users } = this.state;
        console.log('Notice when render gets called, depending on the state update');
        console.log('users: ', users);
        return (
            users.length && this.renderUsersList(users)
        );
    }
}

export default UsersList;
