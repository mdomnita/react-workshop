import React, { Component } from 'react';
import UserListItem from './UserListItem';
import mockApi from '../utils/mockApi';

class UsersList extends Component {

    constructor(props) {
        super(props);
        this.state= {
            users: []
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
        <ul className={'users-list-container'}>
            {
                users.map((user) => (
                    <UserListItem key={user.id} user={user}/>
                ))
            }
        </ul>)
    
    render() {
        let { users } = this.state;
        console.log('users: ', users);
        return (
            users.length && this.renderUsersList(users)
        );
    }
}

export default UsersList;
