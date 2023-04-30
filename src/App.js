import "./App.css";
import TaskCreate from "./Components/TaskCreate";
import TaskList from "./Components/TaskList";
import { useEffect, useContext } from "react";
import TasksContext from "./context/task";

function App() {
  const {fetchTasks}=useContext(TasksContext);
  useEffect(()=>{         //ilk render da çalışır
    fetchTasks();
  },[]);
  
  return (
    <div className="App">
      <TaskCreate/>
      <h1>Görevler</h1>
      <TaskList/>
    </div> // 3 parametreyi halen taşıyor
  );
}

export default App;
//onDelete in burdaki aktardığı yer bir arrow function u,,,,   onDelete silinecek id yi taşıyor ve bunu funksiyon da barındırıyor
// projeyi her yeniden açtığında json-server a api/db.json ı --watch etmelisin
