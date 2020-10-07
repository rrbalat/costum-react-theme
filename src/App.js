import React from 'react';
import './App.css';
import Home from './components/Home';
import { Router } from '@reach/router'
import SinglePost from './components/SinglePost';
import Login from './components/Login';
import Dashboard from './components/dashboard/Dashboard';


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
          <Dashboard path="/dashboard/:userName" />

        </Router>
      </div>
    )
  }
}

export default App;
