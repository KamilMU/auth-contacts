import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ContactsPage from './components/ContactsPage';
import LoginPage from './components/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" component={LoginPage} />
        <ProtectedRoute path="/contacts" component={ContactsPage} />
      </Switch>
    </div>
  );
}

export default App;
