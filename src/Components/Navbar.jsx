import { useContext } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const {user , logOut} = useContext(AuthContext)
  const handlelogOut = () => {
    logOut()
    .then(()=>{})

  }
  const navOptions = (
    <>
     <li><Link to="/">Home</Link></li>
      <li><Link to="/menu">Our Menu</Link></li>
     
      <li><Link to="/order">Order food</Link></li>
      <li><Link to="/secret">Secret</Link></li>
        {/* Cart Icon with Onbox */}
  <li className="relative">
    <Link to="/cart" className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-700 hover:text-blue-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h18l-2.25 12.75a2.25 2.25 0 01-2.25 1.75H7.5a2.25 2.25 0 01-2.25-1.75L3 3z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 21h6m-7.5-6h9"
        />
      </svg>
    </Link>
    {/* Badge */}
    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
      
    </span>
  </li>
      {
  user ? (
    <>
      {/* Profile Image and Name */}
      <div className="flex items-center gap-4">
        {user.photoURL && (
          <img
            src={user.photoURL}
            alt="User Profile"
            className="w-10 h-10 rounded-full"
          />
        )}
        <span className="font-semibold text-gray-700">{user.displayName}</span>
      </div>

      {/* Logout Button */}
      <button onClick={handlelogOut} className="btn btn-ghost">
        LogOut
      </button>
    </>
  ) : (
    <>
      {/* Login Link */}
      <li>
        <Link to="/Login">Login</Link>
      </li>
    </>
  )
}
    </>
  );

  return (
    <div>
      <div className="navbar fixed z-10 bg-white opacity-30 max-w-screen-xl font-extrabold   text-black">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Chop & Dine</a>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
