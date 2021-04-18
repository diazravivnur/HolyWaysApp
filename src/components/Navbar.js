import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = ({ isLogin, showModalLogin, showModalRegister }) => {
  const [isProfileDropdown, setProfileDropdown] = useState(false);

  const showProfileDropdown = () => {
    setProfileDropdown(!isProfileDropdown);
  };
  return (
    <div>
      <div className="navbar-container">
        <Link to="/">
          <img src="/Icon.svg" alt="icon-holyways" className="icon" />
        </Link>
        {!isLogin && (
          <div className="button-login-register">
            <button className="btn-light" onClick={() => showModalRegister()}>
              Register
            </button>{" "}
            <button className="btn-red" onClick={() => showModalLogin()}>
              Login
            </button>
          </div>
        )}
        {isLogin && (
          <div className="profile">
            <img
              src="Ellipse 1.svg"
              alt=""
              onClick={() => showProfileDropdown()}
            />
          </div>
        )}
        {isProfileDropdown && (
          <ProfileDropdown showProfileDropdown={showProfileDropdown} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
