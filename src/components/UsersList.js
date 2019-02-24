import React, { Component } from 'react';
import UserListItem from "./UserListItem";

const GET_USERS_ENDPOINT = "https://jsonplaceholder.typicode.com/users";

class UsersList extends Component {

    constructor(props) {
        super(props);
        this.state= {
            users: [{id: 0, name: 'Ionel'}, {id: 1, name:'Anca'}]
        }
    }

    componentDidMount() {
        fetch(GET_USERS_ENDPOINT)
            .then(response => response.json())
            .then(users => this.setState({users}))
    }

    renderUsersList = (users) => (
        <ul className={'users-list-container'}>
            {
            users.map((user) => (<UserListItem key={user.id} user={user}/>))
            }
        </ul>
    );

    render() {
        let { users } = this.state;
        console.log('users: ', users);
        return (
            users.length && this.renderUsersList(users)
        );
    }
}

export default UsersList;
