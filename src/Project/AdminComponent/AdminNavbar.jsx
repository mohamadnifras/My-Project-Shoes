import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket,faBox, faChartLine, faUser } from '@fortawesome/free-solid-svg-icons'; 
import { useNavigate } from 'react-router-dom';
function AdminNavbar() {
  const navigate = useNavigate()
  const handleLogout = () =>{
    ["id", "name", "email","password"].forEach(key => localStorage.removeItem(key));
    navigate('/login')
  }
  return (
    <>
     <div className="sticky top-0 bg-gray-900 h-screen p-4 text-white flex flex-col">
      <div className="mb-6 flex justify-center">
        <img src="/shoeimages/adminlogo.png" alt="Admin Logo" className="w-30 h-30 rounded-full" />
      </div>
      
      <nav className="flex flex-col gap-4">
        <button 
          className="flex items-center gap-2 bg-gray-300 bg-opacity-20 hover:bg-opacity-40 py-2 px-4 rounded transition duration-300" 
          onClick={() => navigate('dashboard')} 
        >
          <FontAwesomeIcon icon={faChartLine} />
          Dashboard
        </button>
        <button 
          className="flex items-center gap-2 bg-gray-300 bg-opacity-20 hover:bg-opacity-40 py-2 px-4 rounded transition duration-300" 
          onClick={() => navigate('/admin/adminproduct')} 
        >
          <FontAwesomeIcon icon={faBox} />
          Products
        </button>
        <button 
          className="flex items-center gap-2 bg-gray-300 bg-opacity-20 hover:bg-opacity-40 py-2 px-4 rounded transition duration-300" 
          onClick={() => navigate('/admin/adminuser')} 
        >
          <FontAwesomeIcon icon={faUser} />
          Users
        </button>
        <button 
          className="flex items-center gap-2 bg-gray-300 bg-opacity-20 hover:bg-opacity-40 py-2 px-4 rounded transition duration-300 mt-auto" 
          onClick={handleLogout} 
        >
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
          Logout
        </button>
      </nav>
    </div>
    </>
  )
}

export default AdminNavbar