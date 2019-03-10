import React, { Component } from 'react';
import UserListItem from './UserListItem';
import UserForm from './UserForm';
import mockApi from '../utils/mockApi';

class UsersList extends Component {

    constructor(props) {
        super(props);
        this.state= {
            users: [],
            isFormOpen: true,
            currentUserClicked: 1
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
        </ul>
    );

    render() {
        let { users, isFormOpen, currentUserClicked } = this.state;
        return (
            <div>
                {isFormOpen ?
                    <UserForm userId={currentUserClicked}/> :
                    users.length && this.renderUsersList(users)
                }
            </div>
        );
    }
}

export default UsersList;
