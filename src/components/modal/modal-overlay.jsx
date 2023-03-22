import modalOverlayStyles from "./modal-overlay.module.css";


const ModalOverlay =({clickevent})=>{

    return(
      <>
        <div onClick={clickevent} className={modalOverlayStyles.modalOverlay}></div>
     </>
    )
}

export default ModalOverlay;