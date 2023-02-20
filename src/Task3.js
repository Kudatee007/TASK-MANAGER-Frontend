import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import arrow from "./img/Vector.svg";
import "./Task3.css";
// controlled input -- value -- onchange handler

const Task3 = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  const url = "http://localhost:2600/api/v1/tasks";

  const redirect = useNavigate();

  const createTask = async (e) => {
    e.preventDefault();
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, tags }),
    });
    const data = await res.json();
    console.log(data);
    // return to all tasks
    redirect("/alltask");
  };

  return (
    <div id="task3Top">
      <Navbar text2={"All Task"} />
      <div className="task3">
        <div className="newTask">
          <img src={arrow} alt="" className="arrow" />
          <h1>New Task</h1>
        </div>
        <form onSubmit={createTask}>
          <div className="titleTask">
            <label htmlFor="taskTitle">Task Title</label>
            <input
              type="text"
              id="taskTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="descripTion">
            <label htmlFor="describe">Description</label>
            <input
              type="text"
              id="describe"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="tagS">
            <label htmlFor="tags">Task Title</label>
            <select
              name=""
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="Urgent">Urgent</option>
              <option value="Important">Important</option>
            </select>
          </div>
          <button type="submit" className="btnDone">
            Done
          </button>
        </form>
        <a href="#task3Top">
          <h5 className="toTop">Back To Top</h5>
        </a>
      </div>
    </div>
  );
};

export default Task3;
