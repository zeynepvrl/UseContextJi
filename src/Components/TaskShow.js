function TaskShow({onetaskforShow}) {   //onetaskforshow tasks ın içindeki bir tane task ı taşıyor
    console.log(onetaskforShow);
    return ( <div className="task-show">
        <h3 className="task-title" >Göreviniz</h3>
        <p>{onetaskforShow.title}</p>
        <h3 lassName="task-title" >Yapılacaklar</h3>
        <p>{onetaskforShow.taskDesc}</p>
        <div>
            <button className="task-delete">Sil</button>
            <button className="task-edit" >Güncelle</button>
        </div>
    </div> );
}

export default TaskShow;