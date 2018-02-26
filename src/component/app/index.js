import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Dashboard from '../dashboard';

export default class App extends React.Component{
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <header>
              <h1> Flight Tracker </h1>
            </header>
            <Route exact path='/' component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}