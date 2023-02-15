import React from 'react';
import Navbar from  './Navbar';
import arrow from './img/Vector.svg';
import './Task3.css';

const Task3 = () => {
  return (
    <div id='task3Top'>
        <Navbar text2={"All Task"}/>
        <div className='task3'>
        <div className='newTask'>
            <img src={arrow} alt="" className='arrow'/>
            <h1>New Task</h1>
        </div>
       <form action="">
       <div className='titleTask'>
            <label for="taskTitle">Task Title</label>
            <input type="text" id='taskTitle'/>
        </div>
        <div className='descripTion'>
            <label for="describe">Description</label>
            <input type="text" id='describe'/>
        </div>
        <div className='tagS'>
            <label for="tags">Task Title</label>
            <select name="" id="tags">
                <option value="value1">Urgent</option>
                <option value="value2">Important</option>
            </select>
        </div>
        <button className='btnDone'>Done</button>
       </form>
       <a href="#task3Top"><h5 className='toTop'>Back To Top</h5></a>
       </div>
    </div>
  )
}

export default Task3