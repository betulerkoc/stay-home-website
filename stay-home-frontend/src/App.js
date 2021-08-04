import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./pages/SignUp";
import Login from ".//pages/Login";
import Patient from "./pages/Patient";
import Volunteer from "./pages/Volunteer";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/" component={Navbar} />
          <div className="appContainer">
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/patient" component={Patient} />
            <Route path="/volunteer" component={Volunteer} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
