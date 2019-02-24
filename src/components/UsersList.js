import React, { Component } from 'react';


class UsersList extends Component {

    constructor(props) {
        super(props);
        this.state= {
            users: [{id: 0, name: 'Ionel'}, {id: 1, name:'Anca'}]
        }
    }

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
        return (
            users.length && this.renderUsersList(users)
        );
    }
}

export default UsersList;
