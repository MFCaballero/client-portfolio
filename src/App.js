import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Profile from "./components/Auth/Profile";
import Rate from "./components/Auth/Rate";


function App() {
  let ctx = {}
  ctx.id = localStorage.getItem('id');
  ctx.email = localStorage.getItem('email');
  ctx.fullName = localStorage.getItem('fullName');

  return (
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route exact path="/" component={NavBar} />
      <Route exact path="/" component={SideBar} />
      {
        ctx.id ? <><Route exact path="/profile" component={Profile} /><Route exact path="/score" component={Rate} /></> : ""
      }
    </React.Fragment>
  );
}

export default App;
