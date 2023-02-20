import { BrowserRouter, Routes, Route } from "react-router-dom"
import Task2 from './Task2';
import './App.css';
import Task1 from './Task1';
import Task3 from './Task3';
import TaskEdit from './TaskEdit';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Routes>
     <Route path="/" element={<Task1 />} />
     <Route path="/newtask" element={<Task3 />} />
     <Route path="/alltask" element={<Task2 />} />
     <Route path="/tasks/:taskId" element={<TaskEdit />} />
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
