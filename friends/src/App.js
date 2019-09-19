import React from 'react';
import PrivateRoute from './components/PrivateRoute';

import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './components/Login';
import FriendsForm from './components/FriendsForm';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <Router>
    <div className="App App-header">
     
      <ul>
        <li>
          <Link to='/friendsForm'  component={FriendsForm}>SignUp</Link>
        </li>
        <li>
        <Link to='/protected'  component={FriendsList}>Protected page</Link>
        </li>
      </ul>
      
      <Switch>
      <PrivateRoute path="/friendsForm" component={FriendsForm} />
        <PrivateRoute path='/protected' component={FriendsList} />
    <Route to='/login' component={Login}/>
    
    
    </Switch>  
    </div>
    </Router>
  );
}

export default App;
