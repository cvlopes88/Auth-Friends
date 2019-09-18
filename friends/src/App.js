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
          <Link to='/form'  component={FriendsForm}>SignUp</Link>
        </li>
        <li>
        <Link to='/protected'  component={FriendsList}>Protected page</Link>
        </li>
      </ul>
      <Switch>
        
        <PrivateRoute exact path='/protected' component={FriendsList} />
    <Route to='/login' component={Login}/>
    <Route component={Login} />
    <Route  exact path='/form' component={FriendsForm} />
    </Switch>  
    </div>
    </Router>
  );
}

export default App;
