import React from "react";

const Modal = ({ children, header, handleModal, showModal }) => {
  return (
    <div className="overlay" style={{display: showModal}}>
      <div className="modal">
        <div className="modalMain">
          <div className="modal-header">
            <p className="header-content">{header}</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
