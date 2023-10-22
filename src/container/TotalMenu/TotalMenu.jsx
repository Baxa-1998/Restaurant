
import { useState } from "react";
import style from "./TotalMenu.module.scss";


const TotalMenu = () => {

  const [back, setBack] = useState(style.back1)

  const [menu, setMenu] = useState([
    {id: 1,title: 'food', background: './slide1.jpg', active: true},
    {id: 2,title: 'drinks', background: './slide2.jpg', active: false},
    {id: 3,title: 'desserts', background: './slide3.jpg', active: false},
])




 
  function isChangeBackground (id) {
   const newArray = menu.map((menu)=>{
      if(menu.id === id){
        return {...menu, active: true}
    
      }
      return {...menu, active: false}
    })
    setMenu(newArray)
  }

 
  




  return (
    <div className={`${style.appTotalMenu} ${menu[0].active ? style.back1 : ''} ${menu[1].active ? style.back2 : ''} ${menu[2].active ? style.back3 : ''}`}>
       {menu.map((item,idx)=> (
            <div className={`${style.appMenuItems} ${item.active ? style.active : ''}`} onMouseEnter={()=>isChangeBackground(item.id)}>
          
            </div>

      ))} 
  
    

  
    </div>
  );
};

export default TotalMenu;
