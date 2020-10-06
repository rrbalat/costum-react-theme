import React from 'react';
import './App.css';
import Home from './components/Home';
import { Router } from '@reach/router'
import SinglePost from './components/SinglePost';
import Login from './components/Login';
import Dashbord from './components/Dashbord';


class App extends React.Component
{
  render()
  {
    return (
      <div>
        <Router>
          <Home path="/" />
          <SinglePost path="/post/:id" />
          <Login path="/login" />
          <Dashbord exact path="/dashboard/:userName" />
        </Router>
      </div>
    )
  }
}

export default App;
