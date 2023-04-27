import "./App.css";
import TaskCreate from "./Components/TaskCreate";
import TaskList from "./Components/TaskList";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]); //taskları içinde tutacak array
  const createTask = (title, taskDesc) => {
    //bunun parametleri onCreate nin parametlerine karşılık gelir  //bu parametreler taskcreate den geliyor
    const createNewArraywithnewTask = [
      ...tasks,
      {
        //...tasks spreadoperatörü ile eski arrayi alıp buraya kopyalıyor, ,{} ile de yeni arrayi yanına ekleyip 0 dan bir yeni bir array oluşturup setTasks a atıyor
        id: Math.round(Math.random() * 9999999),
        title, //key value değerleri birbirine eşit olsaydı sadece birini yazabilirdik
        taskDesc,
      },
    ];
    setTasks(createNewArraywithnewTask);
  };

  const deleteTaskById = (id) => {
    const afterDeleting_TasksArray = tasks.filter((task) => {
      //burdaki task tasks arrayinin herbir elemanını temsil eder,
      return task.id !== id; //belirtilen id ye eşit olmayan arraye eklenir
    });
    setTasks(afterDeleting_TasksArray);
  };
  const editTaskById = (gelenid, Updatedtitle, UpdatedtaskDec) => {
    const updatedTasksArray = tasks.map((pertask) => {
      if (pertask.id === gelenid) {   // 3 tane === o_O
        return { gelenid, title: Updatedtitle, taskDesc: UpdatedtaskDec }; // {} ile return!  // id ler eşleşiyorsa güncelleyip geri döndür
      } else {
        return pertask; //idleri eşleşmiyorsa task ı aynen geri döndür
      }
    });
    setTasks(updatedTasksArray);
  };
  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList
        tasksLi={tasks}
        onDelete={deleteTaskById}
        onUpd={editTaskById}
      />
    </div> // 3 parametreyi halen taşıyor
  );
}

export default App;
//onDelete in burdaki aktardığı yer bir arrow function u,,,,   onDelete silinecek id yi taşıyor ve bunu funksiyon da barındırıyor
