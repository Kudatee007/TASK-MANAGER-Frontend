import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import arrow1 from "./img/Vector.svg";
import "./Task3.css";
import { useNavigate, useParams } from "react-router-dom";

const TaskEdit = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const {taskId} = useParams();

  const url = `http://localhost:2600/api/v1/tasks/${taskId}`;
  console.log(url);

  const fetchTask = async () => {
    const res = await fetch(url);
    const {
      task: { tags, title, description },
    } = await res.json();
    console.log(tags, title, description);
    setTags(tags);
    setTitle(title);
    setDescription(description);
  };

  useEffect(() => {
    fetchTask();
  }, []);

    const redirect = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      const res = await fetch(url, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, tags }),
      });
      const data = await res.json();
      console.log(data);
      // return to all tasks
      redirect("/alltask");
    };

  return (
    <div>
      <Navbar text2={"All Task"} />
      <div className="task3">
        <div className="newTask">
          <img src={arrow1} alt="" className="arrow" />
          <h1>Edit Task</h1>
        </div>
        <form>
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
          <button type="submit" className="btnDone" onClick={handleSubmit}>
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

export default TaskEdit;
