import TaskCreate from "./TaskCreate";
import { useState } from "react";

function TaskShow({ onetaskforShow, onDelete, onUpd }) {        //onetaskforshow tasks ın içindeki bir tane task ı taşıyor
  const [showEdit, setShowEdit] = useState(false);     //bunu eğer aşağıdaki fonksiyonun hemen üstüne yazarsan algılamıyor
  const handleDeleteClick = () => {
    onDelete(onetaskforShow.id); //onDelete adında bir prop oluşturdum ve bu silinecek taskın id sine eşit, // ve bu prop u task listte karşılamam gerekir
  }; 
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit=(id, Updatedtitle, UpdatedtaskDec )=>{  //onUpdate ile 3 parametre sırasıyla bu patantezdeilere eşit olacak, isimleri farklı olsa da
    setShowEdit(false);
    onUpd(id, Updatedtitle, UpdatedtaskDec); //bir üst class a taşımak için bir props oluşturduk
  }
  return (
    <div className="task-show">
      {showEdit ? ( //showEdit true ise : false ise
        <TaskCreate task={onetaskforShow} taskformUpdate={true} onUpdate={handleSubmit} /> //ikinci prop taskcreate basılırken true ise güncellemek için basılıyor false ise normal kendi amacı için basılıyor, bunu anlamak için
      ) : (                                                      //TaskCreate de taskformUpdate true ise güncelle buttonu click edilince onUpdate i gönderiyor, bundan sonra artık shoeEdit false olmalı ve yeni değerlerle düzenlenmiş normal yazılmalı
        <div> 
          <h3 className="task-title">Göreviniz</h3>
          <p>{onetaskforShow.title}</p>
          <h3 className="task-title">Yapılacaklar</h3>
          <p>{onetaskforShow.taskDesc}</p>
          <div>
            <button className="task-delete" onClick={handleDeleteClick}>
              Sil
            </button>
            <button className="task-edit" onClick={handleEditClick}>
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
