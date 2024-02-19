import React from 'react';

const UserList = ({ users }) => {
    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.username}>
                        <pre>
                            Name - {user.username}
                            Email - {user.email_address}
                            Description - {user.description}
                        </pre>
                        <Link to={"/users/" + user.username}>View Details</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
