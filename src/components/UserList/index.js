import React from 'react';
import { useSelector } from 'react-redux';
import './UserList.css';


const UserList = () => {
    const userList = useSelector(state => state.userList);

    if (userList.length === 0) {
        return null;
    }

    return (
        <table>
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Message</th>
            </tr>
            </thead>
            <tbody>
            {userList.map((user, index) => (
                <tr key={index}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.message}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default UserList;
