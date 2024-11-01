import React, { useContext, useState, useEffect } from "react";
import { productContext } from "./ProductContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleList } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
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
    <nav className="sticky top-0 z-50 bg-white shadow-md w-full">
  <div className="w-full mx-auto flex justify-between items-center py-2 md:py-3 px-4 md:px-6">
    <div className="text-lg md:text-2xl font-bold">
      <a href="/">
        <span className="text-gray-500">TEACH</span>
        <span className="text-orange-500">SHOE</span>
      </a>
    </div>

    <div className="flex-1 flex justify-center items-center">
      <div className="relative w-full max-w-xs md:max-w-md">
        <input
          type="text"
          placeholder="Search for Products, Brands"
          onChange={handleSearchChange}
          className="focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 pl-10 w-full rounded border-2 border-gray-300 transition duration-200 ease-in-out bg-gray-200 hover:border-blue-500"
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600"
        />
      </div>
    </div>
  </div>

  <div className="w-full flex justify-between items-center bg-[#0f172a] p-2 md:p-3">
    <ul className="flex-1 flex justify-center space-x-4 md:space-x-8">
      <li>
        <Link
          to=""
          className="text-white hover:text-blue-200 text-center font-serif"
        >
          Mens
        </Link>
      </li>
      <li>
        <Link
          to=""
          className="text-white hover:text-blue-200 text-center font-serif"
        >
          Women
        </Link>
      </li>
      <li>
        <Link
          to=""
          className="text-white hover:text-blue-200 text-center font-serif"
        >
          Kids
        </Link>
      </li>
    </ul>

    <div className="flex space-x-4">
      <Link to="/orderlist" className="flex flex-col items-center">
        <FontAwesomeIcon
          icon={faRectangleList}
          className="text-white text-2xl md:text-3xl"
        />
        <span className="text-white text-sm">Order List</span>
      </Link>

      <Link to="/cartproduct" className="flex flex-col items-center relative">
        <FontAwesomeIcon
          icon={faCartShopping}
          className="text-2xl md:text-3xl text-white"
        />
        {cart.length > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-1 text-xs">
            {cart.length}
          </span>
        )}
        <span className="text-white text-sm">Cart</span>
      </Link>

      <Button
        aria-controls={open ? "user-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        className="flex flex-col items-center"
      >
        <FontAwesomeIcon
          icon={faCircleUser}
          className="text-2xl md:text-3xl text-white"
        />
        <span className="text-white text-sm">
          {user ? user.firstname : "Login"}
        </span>
      </Button>
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
