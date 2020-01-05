import React from 'react';
import Layout from './layouts'
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import ReactNotifications from 'react-notifications-component';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "tabler-react/dist/Tabler.css";

function App() {
  return (
    <div className="App">
      <ReactNotifications />
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Layout} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
