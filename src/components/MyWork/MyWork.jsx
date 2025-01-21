import React ,{ useState } from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import Modal from '../Modal/Modal'
import WorkModal from '../Wmodal/WorkModal'

const MyWork = () => {

  const [modal, setModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const toggleModal= (work)=>{
    console.log("touch")
    setSelectedService(work);
    setModal(!modal);
  }

  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Work</h1>
           <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
          {mywork_data.map((work,index)=>{
            return  <img onClick={() => toggleModal(work)} key={index} src={work.w_img} alt=''/>
          })}
        </div>
      {modal && selectedService &&  <WorkModal service ={selectedService} onClose={()=>setModal(false)}/>}   
    </div>
  )
}

export default MyWork
