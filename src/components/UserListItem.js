import React from 'react';


function UserListItem(props) {
    let { user } = props;
    return (
        <li style={{padding: 10}}>
            <span style={{cursor: 'pointer'}}>name: <b>{user.name}</b> </span>
        </li>
    );
}

export default UserListItem;
