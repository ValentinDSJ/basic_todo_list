import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './stylesheet/App.css';
import { Home } from './components/Home';
import { ShowTodo } from './components/ShowTodo';
import { EditTodo } from './components/EditTodo';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/add" component={EditTodo} exact />
        <Route path="/:id" component={ShowTodo} exact />
        <Route path="/edit/:id" component={EditTodo} exact />
      </Switch>
    </GlobalProvider>
  );
}

export default App;