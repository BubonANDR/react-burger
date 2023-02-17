import React from "react";


function AppHeaderButton({icon,name,style}){
  return( <div className={style}>
         {icon}
          <p>{name}</p>
   </div>
  )
}

export default AppHeaderButton