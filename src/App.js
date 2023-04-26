import './App.css';
import TaskCreate from './Components/TaskCreate';
import TaskList from './Components/TaskList';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([])  //taskları içinde tutacak array
  const createTask=(title,taskDesc)=>{   //bunun parametleri onCreate nin parametlerine karşılık gelir 
    const createNewArraywithnewTask=[
      ...tasks,
    {                                            //...tasks spreadoperatörü ile eski arrayi alıp buraya kopyalıyor, ,{} ile de yeni arrayi yanına ekleyip 0 dan bir yeni bir array oluşturup setTasks a atıyor
      id:Math.round(Math.random()*9999999),
      title,                  //key value değerleri birbirine eşit olsaydı sadece birini yazabilirdik
      taskDesc,
    },
  ];
  setTasks(createNewArraywithnewTask);
  };
  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList tasksLi={tasks} />
    </div>
  );
}

export default App;
