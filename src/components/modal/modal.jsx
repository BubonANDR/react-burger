import React from "react";
import ReactDOM from "react-dom";
import modalStyles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes  from 'prop-types'

const Modal = ({ children, toggle }) => {
  const [modal, setModal] = React.useState(false);
  const closeModal = () => {
    setModal(false);
  };

  React.useEffect(() => {
    !modal && setModal(toggle);
    document.addEventListener("keydown", (event) => {
      event.key === "Escape" && closeModal();
    });

    return () => {
      document.removeEventListener("keydown", (event) => {
        event.key === "Escape" && closeModal();
      });
    };
  }, [toggle]);

  return ReactDOM.createPortal(
    modal && (
      <>
        <div className={modalStyles.modalWindow}>
          <div
            onClick={closeModal}
            className={modalStyles.closeArea}
          >
            <CloseIcon type="primary" />
          </div>
          {children}
        </div>
        <div onClick={closeModal} className={modalStyles.modalOverlay}></div>
      </>
    ),
    document.querySelector("#modal")
  );
};

Modal.propTypes={
children: PropTypes.element.isRequired,
toggle:PropTypes.bool,

}

export default Modal;
