import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from '../components/UsersList';
import {Link} from 'react-router-dom';

const UserListPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get('http://localhost:3000/users');
      setUsers(res.data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <Link to="/users/new" className="add">Add User</Link>
      <UserList users={users} />
    </div>
  );
};

export default UserListPage;
