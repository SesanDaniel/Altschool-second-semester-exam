import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <div className="nav">
        <Link to="/" className="btn">
          Home
        </Link>
        <Link to="/counter" className="btn">
          Counter
        </Link>
        <Link to="*" className="btn">
          404 Page
        </Link>
      </div>
    </>
  );
};

export default NavBar;
