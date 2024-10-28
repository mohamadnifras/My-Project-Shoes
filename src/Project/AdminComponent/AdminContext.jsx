import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'


export const adminContext = createContext();
function AdminContext({children}) {
    const [adminProduct,setAdminProduct]=useState([]);
    const [adminUser,setAdminUser]=useState([])
// admin product
    useEffect(()=>{
        const fecthAdmin = async () =>{
            try{
                const respons = await axios.get("http://localhost:5000/products");
           setAdminProduct(respons.data)
            
            }catch(error){
                console.log("admin Product data", error.message)
            }
        }
        fecthAdmin();
    })
//admin user
    useEffect(()=>{
      const fecthAdminUser= async()=>{
      try{
        const respons = await axios.get("http://localhost:5000/users");
        setAdminUser(respons.data)
      }catch(error){
      console.log(error.message);
      }
      }
      fecthAdminUser();
    })

    //admin add product
    const addAdminProduct = async (newProduct) =>{
      try{
        const newAdminProduct = await axios.post("http://localhost:5000/products", newProduct);
        return newAdminProduct
      }catch(error){
        console.error(error.message);
        
        
      }
    }
    
  return (
<adminContext.Provider value={{adminProduct, adminUser, addAdminProduct}}>
   {children}
</adminContext.Provider>
  )
}

export default AdminContext