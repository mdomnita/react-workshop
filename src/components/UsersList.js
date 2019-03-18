import React, { Component } from 'react';
import UserListItem from './UserListItem';
import UserForm from './UserForm';
import mockApi from '../utils/mockApi';

class UsersList extends Component {

    constructor(props) {
        super(props);
        this.state= {
            users: [],
            isFormOpen: false,
            currentUserClicked: null
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
                    <UserListItem key={user.id} user={user} openUserForm={this.openUserForm}/>
                ))
            }
        </ul>
    );
    
    openUserForm = (userId) => {
        this.setState({
            currentUserClicked: userId,
            isFormOpen: true
        })
    };
    
    closeUserForm = () => {
        this.setState({
            currentUserClicked: null,
            isFormOpen: false
        })
    };
    
    render() {
        let { users, isFormOpen, currentUserClicked } = this.state;
        return (
            <div>
                {isFormOpen ? <UserForm
                        userId={currentUserClicked}
                        onCancel={this.closeUserForm}
                    /> :
                    users.length && this.renderUsersList(users)
                }
            </div>
        );
    }
}

export default UsersList;
