import React from "react";
import "./style.css";
import Home from "./Home";
import About from "./About";
import { Link } from "react-router-dom";
function Mainpage() {
  return (
    <>
        
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <a href=".">Find Me</a>
            </li>
          </ul>
        </nav>
        
    </>
  );
}
export default Mainpage;
