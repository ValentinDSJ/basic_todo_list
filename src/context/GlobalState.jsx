import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const initialState = {
    todos: []
}

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function delTodo(id) {
        dispatch({
            type: 'DEL_TODO',
            payload: id
        });
    };

    function addTodo(todos) {
        dispatch({
            type: 'ADD_TODO',
            payload: todos
        });
    };

    function editTodo(todos) {
        dispatch({
            type: 'EDIT_TODO',
            payload: todos
        });
    };

    return (<GlobalContext.Provider value={{
        todos: state.todos,
        addTodo,
        editTodo,
        delTodo
    }}>
        {children}
    </GlobalContext.Provider>);
}