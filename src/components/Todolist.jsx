import React, { Fragment, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';

export const Todolist = () => {
  const { todos, delTodo } = useContext(GlobalContext);
  return (
    <Fragment>
      {todos.length > 0 ?
        <Fragment>
          <div className="row">
            {todos.map(todo => (
              <div className="col-xs-12 col-sm-6 col-md-4 add" key={todo.id}>
                <div className="card m-2">
                  <div className="card-body">
                    <h3 className="card-title">{todo.title}</h3>
                  </div>
                  <div className="d-flex justify-content-around mb-3">
                    <Link to={`/${todo.id}`}>
                      <button className="pushUpBtn">Voir</button>
                    </Link>
                    <Link to={`/edit/${todo.id}`}>
                      <button className="pushUpBtn">Edit</button>
                    </Link>
                    <button className="pushUpBtn" onClick={() => delTodo(todo.id)}>Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Fragment> : null}
    </Fragment>
  )
}