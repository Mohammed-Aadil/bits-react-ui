import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from "./TodoList";
import { Login } from './login'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

var destination = document.querySelector('#container');

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' render={()=> <Redirect to='/login'/>} />
        <Route path='/login' component={Login} />
        <Route path='/todo' component={TodoList} />
      </Switch>
    </div>
  )
}

ReactDOM.render(
  <div>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>,
  destination
);
