import React from "react";
import "../styles/Modal.css";

interface ModalProps {
  item: {
    id: number;
    name: string;
    description: React.ReactNode;
  };
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ item, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        <h3>{item.name}</h3>
        <div>{item.description}</div>
      </div>
    </div>
  );
};

export default Modal;
