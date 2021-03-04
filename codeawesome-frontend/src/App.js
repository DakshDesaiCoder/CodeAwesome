import NavBar from './components/NavBar.jsx'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About';
import Contact from './components/Contact';
import Tutorials from './components/Tutorials'
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
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
      </Router>
    </div>
  );
}

export default App;
