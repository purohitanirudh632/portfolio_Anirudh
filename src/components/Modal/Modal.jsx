import React, { useRef } from 'react'
import { X } from 'lucide-react';
import Services_Data from '../../assets/services_data'
import './Modal.css'
function Modal({service,onClose }) {
    const modalRef = useRef();
    const closeModal = (e)=>{
        if(modalRef.current === e.target){
            onClose();
        }
    }
  return (
    <div ref={modalRef} onClick={closeModal} className='modal'>
        <div className="modal-container">
            <button onClick={onClose}  className='close-modal'><X size={40}/></button>
                <h1 className='modal-title'>{service.s_name}</h1>
            <div className="modal-content">
            <h3>{service.s_time}</h3>
                <p>{service.s_desc}</p>

                <p>{service.s_detail}</p>

                <h3>{service.s_stack}</h3>
                
                <h3>{service.s_live}</h3>
           </div>    
      </div>
    </div>
  )
}

export default Modal
