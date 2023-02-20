import React, { useState, useEffect } from "react";
import "./Task2.css";
import edit from "./img/Frame 4.svg";
import delet from "./img/Frame 5.svg";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";


const Task2 = () => {
  const url = "http://localhost:2600/api/v1/tasks";
  const [tasks, setTasks] = useState([]);
  const [isloading, setLoading] = useState(true);

  const fetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setLoading(false);
    setTasks(data.task);
  };

  useEffect(() => {
    fetchData();
  }, []);
const redirect = useNavigate();
  const handleDelete = (id) => {
    const url = `http://localhost:2600/api/v1/tasks/${id}`;
     fetch(url, {
      method:"DELETE"
     }).then(() => {
        redirect("/")
     })
  };
  return (
    <div className="taskTask">
      <Navbar text1={"New Tasks"} />
      <div className="taskDiv">
        <div className="head">
          <h1>My Tasks</h1>
          <h4>+ Add New Task</h4>
        </div>
        {isloading && <div>Loading......</div>}
        {tasks.map((task) => {
          const { _id, title, description, tags } = task;
          return (
            <div className="taskBox" key={_id}>
              <div className="editDel">
                <h5 className={tags === "Urgent" ? "urgent" : "urgent2"}>
                  {tags}
                </h5>
                <div>
                  <Link to={`/tasks/${_id}`}>
                    <img src={edit} alt="" className="edit" />
                  </Link>
                  <img
                    src={delet}
                    alt=""
                    className="del"
                    onClick={() => handleDelete(_id) }
                  />
                </div>
              </div>
              <hr className="line2" />
              <div>
                <h1 className="title">{title}</h1>
                <p className="description">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Task2;
