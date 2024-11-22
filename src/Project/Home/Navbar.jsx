// import React, { useContext, useState } from "react";
// import { productContext } from "./ProductContext";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faRectangleList, faSearch, faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import { faCircleUser } from "@fortawesome/free-solid-svg-icons/faCircleUser";
// import { Button, Menu, MenuItem } from "@mui/material";
// import { passContext } from "../RegisterAnsLogin/RegisterContext";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const { setSearch, cart, setCart } = useContext(productContext);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const { user, logout } = useContext(passContext);
//   const navigate = useNavigate();

//   const handleSearchChange = (e) => {
//     setSearch(e.target.value.toLowerCase());
//   };

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const open = Boolean(anchorEl);

//   const handleLogout = () => {
//     logout();
//     setCart([]);
//     handleClose();
//   };

//   return (
//     <nav className="sticky top-0 z-50 w-full h-10 bg-white shadow-md" >
//       <div className="flex items-center justify-between w-full h-16 px-6 py-4 mx-auto md:py-6 lg:px-12">
//         <div className="text-2xl font-bold lg:text-3xl">
//           <a href="/">
//             <span className="text-gray-500">TEACH</span>
//             <span className="text-orange-500">SHOE</span>
//           </a>
//         </div>

//         {/* Search Bar */}
//         <div className="flex items-center justify-center flex-1">
//           <div className="relative w-full max-w-lg">
//             <input
//               type="text"
//               placeholder="Search for Products, Brands"
//               onChange={handleSearchChange}
//               className="w-full h-1 p-4 pl-12 transition duration-200 ease-in-out bg-gray-200 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500"
//             />
//             <FontAwesomeIcon
//               icon={faSearch}
//               className="absolute text-gray-600 transform -translate-y-1/2 left-4 top-1/2"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Navbar Links */}
//       <div className="w-full flex justify-between items-center bg-[#0f172a] p-3 lg:p-4 h-10 top-0">
//         <ul className="flex justify-center flex-1 space-x-6 lg:space-x-12">
//           <li>
//             <Link
//               to="/men"
//               className="font-serif text-xl text-white hover:text-blue-200 lg:text-2xl hover:scale-105"
//             >
//               Mens
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/women"
//               className="font-serif text-xl text-white hover:text-blue-200 lg:text-2xl hover:scale-105"
//             >
//               Women
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/kids"
//               className="font-serif text-xl text-white hover:text-blue-200 lg:text-2xl hover:scale-105"
//             >
//               Kids
//             </Link>
//           </li>
//         </ul>

//         {/* Icons and Profile Menu */}
//         <div className="flex space-x-6 lg:space-x-12">
//           <Link to="/orderlist" className="flex flex-col items-center">
//             <FontAwesomeIcon
//               icon={faRectangleList}
//               className="text-3xl text-white lg:text-4xl"
//             />
//             <span className="text-lg text-white lg:text-xl">Order List</span>
//           </Link>

//           <Link to="/cartproduct" className="relative flex flex-col items-center">
//             <FontAwesomeIcon
//               icon={faCartShopping}
//               className="text-3xl text-white lg:text-4xl"
//             />
//             {cart.length > 0 && (
//               <span className="absolute top-0 right-0 px-2 py-1 text-xs text-white bg-red-500 rounded-full lg:text-sm">
//                 {cart.length}
//               </span>
//             )}
//             <span className="text-lg text-white lg:text-xl">Cart</span>
//           </Link>

//           <Button
//             aria-controls={open ? "user-menu" : undefined}
//             aria-haspopup="true"
//             onClick={handleClick}
//             className="flex flex-col items-center"
//           >
//             <FontAwesomeIcon
//               icon={faCircleUser}
//               className="text-3xl text-white lg:text-4xl"
//             />
//             <span className="text-lg text-white lg:text-xl">
//               {user ? user.firstname : "Login"}
//             </span>
//           </Button>

//           {/* User Profile Menu */}
//           <Menu
//             id="user-menu"
//             anchorEl={anchorEl}
//             open={open}
//             onClose={handleClose}
//             anchorOrigin={{
//               vertical: "bottom",
//               horizontal: "center",
//             }}
//             transformOrigin={{
//               vertical: "top",
//               horizontal: "center",
//             }}
//           >
//             <MenuItem onClick={handleClose}>Profile</MenuItem>
//             <MenuItem onClick={handleClose}>My account</MenuItem>
//             {user ? (
//               <MenuItem onClick={handleLogout}>Logout</MenuItem>
//             ) : (
//               <MenuItem onClick={() => navigate("/login")}>Login</MenuItem>
//             )}
//           </Menu>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React, { useContext, useState } from "react";
import { productContext } from "./ProductContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleList, faSearch, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons/faCircleUser";
import { Button, Menu, MenuItem } from "@mui/material";
import { passContext } from "../RegisterAnsLogin/RegisterContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  const { setSearch, cart, setCart } = useContext(productContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const { user, logout } = useContext(passContext);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleLogout = () => {
    logout();
    setCart([]);
    handleClose();
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="flex items-center justify-between w-full h-16 px-6 py-4 mx-auto md:py-6 lg:px-12">
        <div className="text-2xl font-bold lg:text-3xl">
          <a href="/">
            <span className="text-gray-500">TEACH</span>
            <span className="text-orange-500">SHOE</span>
          </a>
        </div>

        {/* Search Bar */}
        <div className="flex items-center justify-center flex-1">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Search for Products, Brands"
              onChange={handleSearchChange}
              className="w-full h-12 p-4 pl-12 text-sm bg-gray-200 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute text-gray-600 transform -translate-y-1/2 left-4 top-1/2"
            />
          </div>
        </div>
      </div>

      {/* Navbar Links */}
      <div className="w-full flex justify-between items-center bg-[#0f172a] p-3 lg:p-4 h-10">
        <ul className="flex justify-center flex-1 space-x-6 lg:space-x-12">
          <li>
            <Link
              to="/men"
              className="font-serif text-xl text-white hover:text-blue-200 lg:text-2xl hover:scale-105"
            >
              Mens
            </Link>
          </li>
          <li>
            <Link
              to="/women"
              className="font-serif text-xl text-white hover:text-blue-200 lg:text-2xl hover:scale-105"
            >
              Women
            </Link>
          </li>
          <li>
            <Link
              to="/kids"
              className="font-serif text-xl text-white hover:text-blue-200 lg:text-2xl hover:scale-105"
            >
              Kids
            </Link>
          </li>
        </ul>

        {/* Icons and Profile Menu */}
        <div className="flex space-x-6 lg:space-x-12">
          <Link to="/orderlist" className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faRectangleList}
              className="text-3xl text-white lg:text-4xl"
            />
            <span className="text-lg text-white lg:text-xl">Order List</span>
          </Link>

          <Link to="/cartproduct" className="relative flex flex-col items-center">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-3xl text-white lg:text-4xl"
            />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 px-2 py-1 text-xs text-white bg-red-500 rounded-full lg:text-sm">
                {cart.length}
              </span>
            )}
            <span className="text-lg text-white lg:text-xl">Cart</span>
          </Link>

          <Button
            aria-controls={open ? "user-menu" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
            className="flex flex-col items-center"
          >
            <FontAwesomeIcon
              icon={faCircleUser}
              className="text-3xl text-white lg:text-4xl"
            />
            <span className="text-lg text-white lg:text-xl">
              {user ? user.firstname : "Login"}
            </span>
          </Button>

          {/* User Profile Menu */}
          <Menu
            id="user-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            {user ? (
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            ) : (
              <MenuItem onClick={() => navigate("/login")}>Login</MenuItem>
            )}
          </Menu>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

