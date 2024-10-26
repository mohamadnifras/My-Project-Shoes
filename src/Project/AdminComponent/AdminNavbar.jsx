import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket,faBox, faChartLine, faUser } from '@fortawesome/free-solid-svg-icons';
function AdminNavbar() {
  return (
    <>
<div className="bg-gray-900 h-screen w-1/5 p-4 text-white flex flex-col">
      <div className="mb-6">
        <img src="./shoeimages/adminlogo.png" alt="Admin Logo" className="w-30 h-30 rounded-full mx-auto" />
      </div>
      
      <nav className="flex flex-col gap-4">
        <button className="flex items-center gap-2 bg-gray-300 bg-opacity-20 hover:bg-opacity-40 py-2 px-4 rounded transition duration-300">
          <FontAwesomeIcon icon={faChartLine} />
          Dashboard
        </button>
        <button className="flex items-center gap-2 bg-gray-300 bg-opacity-20 hover:bg-opacity-40 py-2 px-4 rounded transition duration-300">
          <FontAwesomeIcon icon={faBox} />
          Products
        </button>
        <button className="flex items-center gap-2 bg-gray-300 bg-opacity-20 hover:bg-opacity-40 py-2 px-4 rounded transition duration-300">
          <FontAwesomeIcon icon={faUser} />
          Users
        </button>
        <button className="flex items-center gap-2 bg-gray-300 bg-opacity-20 hover:bg-opacity-40 py-2 px-4 rounded transition duration-300 mt-auto">
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
          Logout
        </button>
      </nav>
    </div>
    </>
  )
}

export default AdminNavbar