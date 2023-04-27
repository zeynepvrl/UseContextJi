import TaskShow from "./TaskShow";
function TaskList({tasksLi,onDelete, onUpd}) {    //functiona propsları {} içinde taşırsın   //şimdi App.js deki TaskList de OnDelete karşılanmal
    return(
       <div className="task-list">
         {tasksLi.map((perTask, index)=>{
            return <TaskShow key={index} onetaskforShow={perTask} onDelete={onDelete} onUpd={onUpd} />   //aynı prop isimi ile OnDelete i karşıladım
         })}                                                                           
       </div>                                                                            //onUnd i tekrar bir üste taşıyoryz , App.js e 
    );
}

export default TaskList;