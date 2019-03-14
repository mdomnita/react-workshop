import React, { Component } from 'react';

const GET_USERS = "https://jsonplaceholder.typicode.com/users";

class UsersList extends Component {

    constructor(props) {
        super(props);
        this.state= {
            users: [{id: 0, name: 'Ionel'}, {id: 1, name:'Anca'}]
        }
    }

    renderUsersList = function (users) {
        return (<ul>
            {
                users.map((user) => (
                    <li key={user.id}>
                        {user.name}
                    </li>
                ))
            }
        </ul>)
    }

    componentDidMount() {
        fetch(GET_USERS)
            .then(response => response.json())
            .then(users => this.setState({users}))
    }
    
    render() {
        let { users } = this.state;
        return (
            users.length && this.renderUsersList(users)
        );
    }
}

export default UsersList;
