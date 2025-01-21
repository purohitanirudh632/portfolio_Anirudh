import React, { useRef } from 'react'
import { X } from 'lucide-react';
import mywork_data from '../../assets/mywork_data'
import Services_Data from '../../assets/services_data'
import { FaGithub } from "react-icons/fa";
import './WorkModal.css'

function WorkModal({service,onClose }) {
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
                <h1 className='modal-title'>{service.w_name}</h1>
            <div className="modal-content">
            <h3>{service.w_role}</h3>
            <p>{service.w_time}</p>   
                <p>{service.w_details}</p>                

           </div>    
      </div>
    </div>
  )
}

export default WorkModal
