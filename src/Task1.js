import React from "react";
import "./Task1.css";
import taskPic from './img/Component 1.svg'
import Navbar from './Navbar'
import { Link } from "react-router-dom";

const Task1 = () => {

  return (
    <div>
    <Navbar text1={"New Tasks"} text2={"All Tasks"}/>
        <div className="manageTask">
      <div className="manage">
          <h1>Manage your Tasks on <span className="spanTask">TaskDuty</span></h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus,
            sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea
            tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl
            semper porttitor. Nec accumsan.
          </p>
          <Link to="/alltask"><button className="btnGo">Go to My Tasks</button></Link>
        </div>
        <div className="taskP">
            <img src={taskPic}  alt="" className="taskPic"/>
        </div>
      </div>
    </div>
  );
};

export default Task1;
