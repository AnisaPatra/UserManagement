import React, { useState } from 'react';

const UserForm = ({ addUser }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    description: '',
    role: '',
    registration_date: new Date()
  });

  const { username, email, description } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addUser(formData);
    setFormData({ username: '', email_address: '', description: '', role: '', registration_date: new Date() });
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Username'
          name='username'
          value={username}
          onChange={onChange}
          required
        />
        <input
          type='email'
          placeholder='Email'
          name='email'
          value={email_address}
          onChange={onChange}
          required
        />
        <textarea
          placeholder='Description'
          name='description'
          value={description}
          onChange={onChange}
        ></textarea>
        <input
          type='text'
          placeholder='Role'
          name='role'
          value={role}
          onChange={onChange}
          required
        />
        <input
          type='text'
          placeholder='Address'
          name='address'
          value={address}
          onChange={onChange}
        />
        <input
          type='text'
          placeholder='Phone'
          name='phone'
          value={phone}
          onChange={onChange}
        />
        <input
          type='date'
          placeholder='Registration Date'
          name='registration_date'
          value={registration_date}
          onChange={onChange}
          required
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
