import React from "react";
import ReactDOM from "react-dom";
import modalStyles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

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
            style={{ position: "absolute", right: 40, top: 65, zIndex: 8 }}
          >
            <CloseIcon type="primary" />
          </div>
          {children}
        </div>
        <div onClick={closeModal} className={modalStyles.ModalOverlay}></div>
      </>
    ),
    document.querySelector("#modal")
  );
};

export default Modal;
