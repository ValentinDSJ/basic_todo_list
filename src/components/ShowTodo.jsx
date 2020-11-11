import React, { Fragment, useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useHistory, Link } from "react-router-dom";

export const ShowTodo = (route) => {
  let history = useHistory();
  const { todos } = useContext(GlobalContext);
  const [current, setCurrent] = useState({
    id: null,
    title: '',
    body: '',
    addDate: '',
    modDate: ''
  });
  const currentTodoId = route.match.params.id;

  if (todos.length < 1)
    history.push('/');

  useEffect(() => {
    const todoId = currentTodoId;
    const currentTodo = todos.find(elem => elem.id === parseInt(todoId));
    setCurrent(currentTodo);
  }, []);

  return (
    <Fragment>
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="card add">
          <div className="m-2"><Link to='/'>Back</Link></div>
          <div className="card-title text-center m-2">
            <h3>{current.title}</h3>
          </div>
          <div className="card-body text-center pt-0 pb-0">
              <p className="renderArea">{current.body}</p>
              <p>Date Added: {current.addDate}</p>
              {
                current.modDate === "" ? null :
                <p>Date Modified: {current.modDate}</p>
              }
          </div>
        </div>
      </div>
    </Fragment>
  )
}