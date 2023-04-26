import TaskShow from "./TaskShow";
function TaskList({tasksLi}) {    //functiona propsları {} içinde taşırsın 
    return(
       <div className="task-list">
         {tasksLi.map((perTask, index)=>{
            return <TaskShow key={index} onetaskforShow={perTask}/>
         })}
       </div> 
    );
}

export default TaskList;