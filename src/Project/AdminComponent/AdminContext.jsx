import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'


export const adminContext = createContext();
function AdminContext({children}) {
    const [adminProduct,setAdminProduct]=useState([]);

    useEffect(()=>{
        const fecthAdmin = async () =>{
            try{
                const respons = await axios.get("http://localhost:5000/products");
           setAdminProduct(respons.data)
            
            }catch(error){
                alert("admin Product data", error.message)
            }
        }
        fecthAdmin();
    })
  return (
<adminContext.Provider value={{adminProduct}}>
   {children}
</adminContext.Provider>
  )
}

export default AdminContext