import { PropertyDeclaration } from "typescript";
import modalOverlayStyles from "./modal-overlay.module.css";
import { FC } from "react";

interface IModalOverlay{
  eventClick:Function
}

const ModalOverlay:FC<IModalOverlay> =({eventClick})=>{

    return(
      <>
        <div onClick={()=>eventClick()} className={modalOverlayStyles.modalOverlay}></div>
     </>
    )
}

export default ModalOverlay;