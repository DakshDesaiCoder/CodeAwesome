import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar.jsx'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About';
import Contact from './components/Contact';
import Tutorials from './components/Tutorials'
import Admin from './components/Admin'
import DashBoard from './components/DashBoard'
import AuthContext from "./context/AuthContext";

function Router() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
      <Route exact path="/">
 
          <Home />
        </Route>
        <Route exact path="/projects">

          <Projects />  
        </Route> 
        <Route exact path="/about">

          <About />
        </Route>     
        <Route exact path="/contact">

          <Contact />
        </Route>    
        <Route exact path="/tutorials">

          <Tutorials />
        </Route>
        {loggedIn === false && (<>
          <Route exact path="/admin">
          <Admin />
        </Route >
        </>)}
        {
          loggedIn === true &&(
            <>
              <Route exact path="/admin">
                <DashBoard />
              </Route >
            </>
          )
        }
      </Switch>
    </BrowserRouter>
  );
}

export default Router;