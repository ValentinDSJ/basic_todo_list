import React, { Fragment, useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useHistory, Link } from "react-router-dom";

export const EditTodo = (route) => {
  let history = useHistory();
  const currentTodoId = route.match.params.id;
  const type = currentTodoId === undefined ? "add" : "mod";
  const now = new Date();
  const { todos, addTodo, editTodo } = useContext(GlobalContext);
  const [current, setCurrent] = useState({
    id: todos[todos.length - 1]?.id + 1 || 1,
    title: '',
    body: '',
    addDate: `${now.getDate()}/${now.getMonth()}/${now.getFullYear()}`,
    modDate: ''
  });

  useEffect(() => {
    if (type === "mod") {
      let currentTodo = todos.find(elem => elem.id === parseInt(currentTodoId));
      if (currentTodo === undefined)
        history.push('/');
      currentTodo = {...currentTodo, modDate: getModDate() }
      setCurrent(currentTodo);
    }
  }, []);

  const onSubmit = e => {
    e.preventDefault();
    if (type === "add") {
      addTodo(current)
    } else {
      editTodo(current);
    }
    history.push('/');
  }

  const handleOnChange = (userKey, value) => setCurrent({ ...current, [userKey]: value });

  const getModDate = () => {
    const now = new Date();
    return `${now.getDate()}/${now.getMonth()}/${now.getFullYear()}`;
  }

  return (
    <Fragment>
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="mb-3">
          <h3>{type === "add" ? 'Add' : 'Edit'} a TODO</h3>
        </div>
        <div className="add card d-flex justify-content-center">
          <form onSubmit={onSubmit}>
            <div className="d-flex flex-column justify-content-center align-items-center m-3">
              <label className="" htmlFor="title">Title</label>
              <input
                value={current.title}
                onChange={(e) => handleOnChange('title', e.target.value)}
                type="text"
                placeholder="Enter Title"
              />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center m-3">
              <label htmlFor="body">Body</label>
              <textarea
                style={{ minHeight: '20vh' }}
                value={current.body}
                onChange={(e) => handleOnChange('body', e.target.value)}
                placeholder="Enter body"
              />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <button className="magnifyBorder m-2">
                {type === "add" ? 'Add' : 'Edit'} a TODO
              </button>
              <div className="m-2"><Link to='/'>Cancel</Link></div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  )
}