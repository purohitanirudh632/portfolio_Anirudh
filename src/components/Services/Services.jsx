import React, { useState } from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import Modal from '../Modal/Modal'
const Services = () => {

  const [modal, setModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const toggleModal= (service)=>{
    setSelectedService(service);
    setModal(!modal);
  }

  return (
    <div id='projects' className='services'>
      <div className="services-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((service,index)=>{
            return <div key={index} className='services-format'>
             <h3>{service.s_no}</h3>
             <h2>{service.s_name}</h2>
             <p>{service.s_desc}</p>  
             <div onClick={() => toggleModal(service)} className="services-readmore">
                <p>Read More</p>
                <img src={arrow_icon} alt="" />
                </div> 
            </div>
        })}
      </div>  
     {modal && selectedService &&  <Modal service ={selectedService} onClose={()=>setModal(false)}/>} 
    </div>
  )
}

export default Services
