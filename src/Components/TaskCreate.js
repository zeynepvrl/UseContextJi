import {useState} from 'react';

function TaskCreate({onCreate}) {                   //props {} içinde taşınır 
   const [title, setTitle] = useState('');
   const [taskDesc, setTaskDesc] = useState('');

   const handleChange=(event) =>{
      setTitle(event.target.value);    // burdaki value kullanıcı tarafından girilen değer, title içine atılıyor
   }
   const handleTaskChange=(event)=>{
      setTaskDesc(event.target.value);
   };
   const handleSubmit=(event)=>{
      event.preventDefault();
      onCreate(title,taskDesc);  //onSubmit adında bir prop tanımladık, App js e aktarabilmek için, gönderdikten sonra form u boşaltsın diye =>
      setTitle('');
      setTaskDesc('');
   }
   return (
      <div className="task-create">
        <h3>Lütfen Task Ekleyiniz!</h3>
        <form className="task-form">
          <label className="task-label">Başlık</label>
          <input value={title} onChange={handleChange} className="task-input" />
          <label className="task-label">Task Giriniz!</label>
          <textarea
            value={taskDesc}
            onChange={handleTaskChange}
            className="task-input"
            rows={5}
          />
          <button className="task-button" onClick={handleSubmit}>
            Oluştur
          </button>
        </form>
      </div>
    );
  }

export default TaskCreate;
//rows textarea nın başlangıç uzunluk değeri


/*handleChange fonksiyonu, herhangi bir input değiştiğinde tetiklenir ve bu değişikliğin neden olduğu event
 objesini alır. event.target.value, input elemanının yeni değerini içerir. Bu değer, setTitle fonksiyonuna 
 verilerek title state'i güncellenir. Böylece, input elemanına girilen her yeni değer title state'ine yansır 
 ve bu bileşenin state'i güncellenir.   */


/*event.target.value form elemanına kullanıcı tarafından girilen değeri içerirken, value={title} state içindeki
 değeri temsil eder. useState hook'u, component state'ini bir değişken olarak tutar ve title değişkeni
  başlangıçta boş bir string olarak tanımlanır. handleChange fonksiyonu, herhangi bir input değiştiğinde 
  tetiklenir ve event.target.value ile title state'ini günceller. Böylece, input'taki kullanıcının girilen 
  değer state'teki title değişkeninde saklanır.   */

  /* satır 12 de title ın taşıdığı değeri export edebilmek için bir props a aktarmalıyız*/