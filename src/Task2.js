import React from "react";
import "./Task2.css";
import edit from "./img/Frame 4.svg";
import delet from "./img/Frame 5.svg";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Task2 = () => {
  return (
    <div className="taskTask">
      <Navbar text1={"New Tasks"} />
      <div className="taskDiv">
        <div className="head">
          <h1>My Tasks</h1>
          <h4>+ Add New Task</h4>
        </div>
        <div className="taskBox">
          <div className="editDel">
            <h5 className="urgent">urgent</h5>
            <div>
              <Link to="/edittask"><img src={edit} alt="" className="edit" /></Link>
              <img src={delet} alt="" className="del" />
            </div>
          </div>
          <hr className="line2"/>
          <div>
            <h1 className="title">FinTech Website Update</h1>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
              obcaecati eos ipsa dolores ducimus pariatur quae maxime beatae
              maiores voluptas in temporibus autem nemo aperiam dolor harum. Ea,
              recusandae aliquam?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task2;
