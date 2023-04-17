import React from "react";
import ReactDOM from "react-dom";
import modalStyles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import ModalOverlay from "./modal-overlay";


const Modal = ({ children, onClose }) => {
 
  React.useEffect(() => {
    function closeByEscape(evt) {
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
        <div onClick={onClose}  className={modalStyles.closeArea}>
          <CloseIcon/>
        </div>
        {children}
      </div>
      <ModalOverlay clickevent={onClose} />
    </>,
    document.querySelector("#modal")
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Modal;
