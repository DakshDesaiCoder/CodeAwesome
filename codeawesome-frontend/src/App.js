
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { AuthContextProvider } from "./context/AuthContext";
import Router from "./Router";

axios.defaults.withCredentials=true
function App() {
  return (
    <div className="App" style={{backgroundColor: "white", position: "absolute", height: "100%", width: "100%", border: "none"}}>
      
      <AuthContextProvider>
      <Router />
    </AuthContextProvider>
    </div>

  );
}

export default App;
