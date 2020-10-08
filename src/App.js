import React from "react";
import Registration from "./Components/Registration/RegistrationForm";
import Login from "./Components/Login/Login";
import Dashboard from './Components/Dashboard/Dashboard';
import PrivateRouting from './PrivateRouting';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <PrivateRouting path="/admindashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
