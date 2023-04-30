import TaskShow from "./TaskShow";
import { useContext } from "react";
import TasksContext from "../context/task";

function TaskList() {
  //functiona propsları {} içinde taşırsın   //şimdi App.js deki TaskList de OnDelete karşılanmal
  const {tasks}=useContext(TasksContext);
  return (
    <div className="task-list">
      {tasks.map((perTask, index) => {  //burda mapping yapığımız için bir alt componente inerken props kullanmak zorundayız
        return <TaskShow key={index} onetaskforShow={perTask} />; //aynı prop isimi ile OnDelete i karşıladım
      })}
    </div> //onUnd i tekrar bir üste taşıyoryz , App.js e
  );
}

export default TaskList;
