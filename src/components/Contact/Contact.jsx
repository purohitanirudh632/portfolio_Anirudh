import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "81242e47-17c4-47e7-89a8-6f90309a52b0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert(data.message);
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's Talk</h1>
            <p>I am avialable to connect with you</p>
           <div className="contact-details">
            <div className="contact-detail">
               <img src={mail_icon} alt="" /><p>purohitanirudh632@gmail.com</p> 
            </div>
            <div className="contact-detail">
               <img src={call_icon} alt="" /><p>9761968545</p> 
            </div>
            <div className="contact-detail">
               <img src={location_icon} alt="" /><p>Dehradun Uttrakhand</p> 
            </div>
            
           </div>
        </div>
        <form onSubmit={onSubmit}  className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter Your Name'  name='name' required="true"/>
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='"Enter your mail' name="email"  />
          <label htmlFor="">Write your Message Here </label>
          <textarea name="message" rows='8' placeholder='Enter your Message' required="true"></textarea>
          <button type='submit' className='contact-submit'>Submit now</button>

        </form>
      </div>
    </div>
  )
}

export default Contact
