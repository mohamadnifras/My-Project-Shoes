import axios from 'axios'
import React, { createContext } from 'react'


export const passContext = createContext()
function RegisterContext({children}) {
    //all ready Register
    const userRegister = async (email)=>{
     try{
        const respons = await axios.get(`http://localhost:5000/users?email=${email}`);
        if(respons.data&&respons.data.length>0)
        return true;
     }catch(errors){                                                
      console.log("Error checking user registration", errors)  
     }
    }

    //new register 
    const addRegiter = async (userData)=>{
        try{
            const newRegister = await axios.post('http://localhost:5000/users', userData);
            return newRegister;
        }catch(errors){
            console.log("Error confirm user registration", errors);
            
        }
    }

    //login page
    const loginResgister = async (email, password)=>{
        try{
            const newLogin = await axios.get(`http://localhost:5000/users?email=${email}&password=${password}`);
            if(newLogin.data.length > 0){
                const id = newLogin.data[0].id;
                return id ;
            }
            return null;
        }catch(errors){
            return null;
        }
    }
  return (
  <passContext.Provider value={{userRegister, addRegiter, loginResgister}}>
    {children}
  </passContext.Provider>
  )
}

export default RegisterContext