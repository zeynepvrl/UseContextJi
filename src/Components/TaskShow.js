function TaskShow({onetaskforShow,onDelete }) {   //onetaskforshow tasks ın içindeki bir tane task ı taşıyor
    const handleDeleteClick=()=>{
        onDelete(onetaskforShow.id);  //onDelete adında bir prop oluşturdum ve bu silinecek taskın id sine eşit, 
    }                                  // ve bu prop u task listte karşılamam gerekir
    return ( 
        <div className="task-show">
        <h3 className="task-title" >Göreviniz</h3>
        <p>{onetaskforShow.title}</p>
        <h3 className="task-title" >Yapılacaklar</h3>
        <p>{onetaskforShow.taskDesc}</p>
        <div>
            <button className="task-delete" onClick={handleDeleteClick} >Sil</button>
            <button className="task-edit" >Güncelle</button>
        </div>
    </div> 
    );
}

export default TaskShow;