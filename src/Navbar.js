import React, { useState } from "react";
import { Link } from "react-router-dom";
import Task from "./img/Group 1.svg";
import proPic from "./img/Group 6.svg";
import hamburger from "./img/icons8-hamburger-32.png";
import "./Navbar.css";

const Navbar = ({ text1, text2 }) => {
  const [expand, setExpand] = useState(true);

  function Handler() {
    setExpand(!expand);
  }
  return (
    <div>
      <nav className="nav">
        <Link className="task" to="/">
          <div className="task">
            <img src={Task} alt="" />
            <h1 className="taskH">TaskDuty</h1>
          </div>
        </Link>
        <div className={!expand ? "task2" : "task2 task2-Nx"}>
          <Link to="/newtask" className="new"><h3 className="new">{text1}</h3></Link>
          <Link to="/alltask" className="all"><h3 className="all">{text2}</h3></Link>
          <img src={proPic} alt="" />
        </div>
        <div className="hamburger" onClick={Handler}>
          <img src={hamburger} alt="" />
        </div>
      </nav>
      <hr className="line" />
    </div>
  );
};

export default Navbar;
