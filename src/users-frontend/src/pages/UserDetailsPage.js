import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import UserDetails from '../components/UserDetails';

const UserDetailsPage = ({ match }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`http://localhost:3000/users/${match.params.username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [match.params.username]);

  return(
    <div>
      {user ? (
        <React.Fragment>
          <UserDetails user={user} />
          <Link to="/users" className="back-btn">Back</Link>
        </React.Fragment>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserDetailsPage;
