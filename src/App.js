import React from "react";
import Registration from "./Components/Registration/registrationForm";
import Login from "./Components/Login/Login";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/registration" component={Registration} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
