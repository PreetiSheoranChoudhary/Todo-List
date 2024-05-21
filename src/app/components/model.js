import React from "react"

const Modal = ({ modalOpen, onClose,children }) => {
    if (typeof modalOpen !== 'boolean') {
        console.error('modelOpen prop must be a boolean value (true or false).');
        return null;
    }

    const handleClose = () => {
        if (onClose) {
            onClose();
        }
        console.log('Modal should close!');
    };
    return (

        <div className={`modal ${modalOpen ? 'modal-open' : ''}`}>
            <div className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleClose} >✕</button>
                <h3 className="font-bold text-lg">Hello! </h3>
                {children}
            </div>
        </div>
    )
}
export default Modal;