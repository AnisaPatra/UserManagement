import React from 'react';

const UserDetails = ({ user }) => {
  return (
    <div>
      <h2>User Details</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email_address}</p>
      <p>Description: {user.description}</p>
      <p>Role: {user.role}</p>
      <p>Registration Date: {user.registration_date}</p>
      <p>Phone: {user.phone}</p>
      <p>Address: {user.address}</p>
    </div>
  );
};

export default UserDetails;
