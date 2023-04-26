import TaskShow from "./TaskShow";
function TaskList({tasksLi,onDelete}) {    //functiona propsları {} içinde taşırsın   //şimdi App.js deki TaskList de OnDelete karşılanmal
    return(
       <div className="task-list">
         {tasksLi.map((perTask, index)=>{
            return <TaskShow key={index} onetaskforShow={perTask} onDelete={onDelete} />   //aynı prop isimi ile OnDelete i karşıladım
         })}
       </div> 
    );
}

export default TaskList;