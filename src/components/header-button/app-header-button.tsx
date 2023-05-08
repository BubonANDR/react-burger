
import { FC, ReactNode } from "react"

interface IHeaderButton{
  icon:ReactNode
  name:string;
  style: any}

const AppHeaderButton:FC<IHeaderButton> =({icon,name,style})=>{
  return( <div className={style}>
         {icon}
          <p>{name}</p>
   </div>
  )
}

export default AppHeaderButton