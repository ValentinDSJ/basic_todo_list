import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Todolist } from './Todolist';
import '../stylesheet/App.css'

export const Home = () => {
  return (
    <Fragment>
      <div className="App">
        <h3 className="m-3">My TODO list</h3>
        <Todolist />
        <Link to="/add">
          <button className="magnifyBorder m-3">
            <span className="pl-2">Add a todo task</span>
          </button>
        </Link>
      </div>
    </Fragment>
  )
}