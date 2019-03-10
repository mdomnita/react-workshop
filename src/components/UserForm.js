import React, { Component } from 'react';
import mockApi from '../utils/mockApi';
import {isObjectEmpty} from '../utils/utils';

class UserForm extends Component {

    constructor(props) {
        super(props);
        this.state= {
            user: {}
        }
    }

    componentDidMount() {
        mockApi.fetchUserById(this.props.userId).then((user)=>{
            this.setState({user})
        })
    }


    render() {
        let {user} = this.state;
        return (
            <>
                {user && !isObjectEmpty(user) && <div>User form for user {user.name}</div>}
            </>
        );
    };
}

export default UserForm;
