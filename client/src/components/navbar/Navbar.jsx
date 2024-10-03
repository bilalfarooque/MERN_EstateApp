import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const user = true;

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="logo.png" alt="logo" />
          <span>Estate</span>
        </a>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Agents</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="userImg"
            />
            <span className="userName">John Doe</span>
            <Link to="/profile" className="profile" >
            <div className="nofication">3</div>
            <span className="profileText">Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="">Login</a>
            <a href="" className="signup">
              Signup
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt="menu"
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/" className="login">
            Login
          </a>
          <a href="/" className="signup">
            Signup
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
