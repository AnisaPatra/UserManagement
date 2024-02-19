// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserListPage from './pages/UserListPage';
import UserDetailsPage from './pages/UserDetailsPage';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/users' component={UserListPage} />
          <Route exact path='/users/:username' component={UserDetailsPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
