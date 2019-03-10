import React, { Component } from 'react';


class UsersList extends Component {

    constructor(props) {
        super(props);
        this.state= {
            users: []
        }
    }

    render() {
        return (
            <ul>
                <li>Some text</li>
            </ul>
        );
    }
}

export default UsersList;
