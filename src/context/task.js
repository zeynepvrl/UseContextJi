import { createContext } from "react";
import { useState } from "react";
import axios from "axios"; // APİ ye istek atmak için

const TasksContext = createContext();
function Provider({ children }) {
  //children burda bu fonksiyona gelen bir parametreyi temsil ediyor, gelen ise verileri kapsayıcı component oluyor
  const [tasks, setTasks] = useState([]); //taskları içinde tutacak array

  
  const createTask = async (title, taskDesc) => {
    //bunun parametleri onCreate nin parametlerine karşılık gelir  //bu parametreler taskcreate den geliyor
    const response = await axios.post("http://localhost:3000/tasks", {
      title,
      taskDesc,
    }); //post ettikten sonra aynı data cevap olarak geri döner, bunu response da tutalım
    const createNewArraywithnewTask = [
      ...tasks,
      response.data, //...tasks artık db.json dakileri alıyor
    ];
    setTasks(createNewArraywithnewTask);
  };

  
  const fetchTasks = async () => {
    //async await yapısını uygulayabilmek için method oluşturduk
    const response2 = await axios.get("http://localhost:3000/tasks");
    setTasks(response2.data);
  };

  
  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`); //'' değil `` bunu kullanmalısın içerdeki id yi değişken olarak kullanabilmek için
    const afterDeleting_TasksArray = tasks.filter((task) => {
      //arrayden silinen task ı db.json dan da silmek için ^
      //burdaki task tasks arrayinin herbir elemanını temsil eder,
      return task.id !== id; //belirtilen id ye eşit olmayan arraye eklenir
    });
    setTasks(afterDeleting_TasksArray);
  };


  
  const editTaskById = async (gelenid, Updatedtitle, UpdatedtaskDec) => {
    await axios.put(`http://localhost:3000/tasks/${gelenid}`, {
      title: Updatedtitle,
      taskDesc: UpdatedtaskDec,
    });
    const updatedTasksArray = tasks.map((pertask) => {
      if (pertask.id === gelenid) {
        // 3 tane === o_O
        return { gelenid, title: Updatedtitle, taskDesc: UpdatedtaskDec }; // {} ile return!  // id ler eşleşiyorsa güncelleyip geri döndür
      } else {
        return pertask; //idleri eşleşmiyorsa task ı aynen geri döndür
      }
    });
    setTasks(updatedTasksArray);
  };


  
  const sharedValuesAndMethods = {
    tasks,
    createTask,
    fetchTasks,
    deleteTaskById,
    editTaskById,
  };
  return (
    <TasksContext.Provider value={sharedValuesAndMethods}>
      {children}
    </TasksContext.Provider>
  );
}
export { Provider }; //bu funksiyonu index.js de App.js i(yani butun proje componentlerini) provider etmek için kullanacağımız için export ettik fonksiyonu
export default TasksContext;
//provider fonksiyonu artık tüm uygulamada geçerli olacak
