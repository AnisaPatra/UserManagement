import React from 'react';
import axios from 'axios';
import UserForm from '../components/UserForm';
import {Link} from 'react-router-dom';

const UserFormPage = () => {

    const addUser = async (formData) => {
      const res = await axios.post('http://localhost:3000/users',formData);
    };

  return (
    <div>
      <h2>Add User</h2>
      <UserForm addUser={addUser} />
      <Link to="/users" className="back-btn">Back</Link>
    </div>
  );
};

export default UserFormPage;
