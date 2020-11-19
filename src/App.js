import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import {routesHome} from "./routes";
import Admin from "./containers/Admin";
function App() {
  const showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <Home
            key={index}
            exact={item.exact}
            path={item.path}
            component={item.component}
          />
        );
      });
    }
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" component={Admin} />
        {showLayoutHome(routesHome)}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
