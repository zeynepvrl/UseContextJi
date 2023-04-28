import "./App.css";
import TaskCreate from "./Components/TaskCreate";
import TaskList from "./Components/TaskList";
import { useEffect, useState } from "react"; 
import axios from 'axios';   // APİ ye istek atmak için 

function App() {
  const [tasks, setTasks] = useState([]); //taskları içinde tutacak array
  const createTask = async(title, taskDesc) => {   //bunun parametleri onCreate nin parametlerine karşılık gelir  //bu parametreler taskcreate den geliyor

    const response=await axios.post('http://localhost:3001/tasks',{
      title,
      taskDesc
    }); //post ettikten sonra aynı data cevap olarak geri döner, bunu response da tutalım
    const createNewArraywithnewTask = [
      ...tasks,response.data          //...tasks artık db.json dakileri alıyor
     /* {
        //...tasks spreadoperatörü ile eski arrayi alıp buraya kopyalıyor, ,{} ile de yeni arrayi yanına ekleyip 0 dan bir yeni bir array oluşturup setTasks a atıyor
        id: Math.round(Math.random() * 9999999),
        title, //key value değerleri birbirine eşit olsaydı sadece birini yazabilirdik
        taskDesc,   //ardtık bunlara gerek yok tasks a ilave olarak response.data ilave edilir
      },  */
    ];
    setTasks(createNewArraywithnewTask);
  };
  const fetchTasks =async()=>{          //async await yapısını uygulayabilmek için method oluşturduk
    const response2 =await axios.get('http://localhost:3001/tasks');
    setTasks(response2.data);
  }
  useEffect(()=>{         //ilk render da çalışır
    fetchTasks();
  },[]);



  const deleteTaskById = async(id) => {
    await axios.delete(`http://localhost:3001/tasks/${id}`);  //'' değil `` bunu kullanmalısın içerdeki id yi değişken olarak kullanabilmek için 
    const afterDeleting_TasksArray = tasks.filter((task) => {  //arrayden silinen task ı db.json dan da silmek için ^
      //burdaki task tasks arrayinin herbir elemanını temsil eder,
      return task.id !== id; //belirtilen id ye eşit olmayan arraye eklenir
    });
    setTasks(afterDeleting_TasksArray);
  };
  const editTaskById = async(gelenid, Updatedtitle, UpdatedtaskDec) => {
    await axios.put(`http://localhost:3001/tasks/${gelenid}`,{
      title:Updatedtitle,
      taskDesc:UpdatedtaskDec
    });  
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
