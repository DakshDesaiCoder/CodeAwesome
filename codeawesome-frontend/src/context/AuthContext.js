import React,{createContext,useState,useEffect} from 'react'
import axios from 'axios'

const AuthContext = createContext()
function AuthContextProvider(props){
    const [loggedIn,setLoggedIn] = useState(undefined)
    function getLoggedIn(){
        axios.get("http://localhost:8080/loggedIn").then((response)=>{
            const dataToRecive = response.data
            
            setLoggedIn(dataToRecive)
            
        })

    }
    useEffect(()=>{
        getLoggedIn()
    },[])

    return (
        <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
          {props.children}
        </AuthContext.Provider>
      );
    }
    
export default AuthContext;
export { AuthContextProvider };