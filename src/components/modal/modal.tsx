import React, { FC, ReactNode } from "react";
import ReactDOM from "react-dom";
import modalStyles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "./modal-overlay";

interface IModal{
  children:React.ReactNode;
  onClose:Function
}

const Modal:FC<IModal> = (  {children, onClose}) => {
 
  React.useEffect(() => {
    function closeByEscape(evt:KeyboardEvent) {
      if (evt.key === "Escape") {
        return onClose();
      }
    }
    document.addEventListener("keydown", closeByEscape);
    return () => {
      document.removeEventListener("keydown", closeByEscape);
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <div className={modalStyles.modalWindow}>
        <div onClick={()=>onClose()}  className={modalStyles.closeArea}>
          <CloseIcon type="primary"/>
        </div>
        {children}
      </div>
      <ModalOverlay eventClick={()=>onClose()}/>
    </>,
    document.querySelector("#modal") as HTMLElement
  );
};



export default Modal;
