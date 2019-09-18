import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './components/Login';
import FriendsForm from './components/FriendsForm';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <Router>
    <div className="App App-header">
      <FriendsList />
      <FriendsForm />
      <ul>
        <li>
          <Link to='/form'  component={FriendsForm}>SignUp</Link>
        </li>
      </ul>
      <Switch>
    <Route to='/login' component={Login}/>
    </Switch>  
    </div>
    </Router>
  );
}

export default App;
