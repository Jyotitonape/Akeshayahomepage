


"use client";
import React, { useState } from "react";
import heroStyles from "@/app/styles/herosection.module.css";
import styles from "@/app/styles/common.module.css";
import footerStyles from "@/app/styles/footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { Mulish } from 'next/font/google';

 
 
  import { FiMapPin,FiPhone } from 'react-icons/fi';
  
  
  import {RiMailSendLine} from 'react-icons/ri';

const mulish = Mulish({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap'
});

const Herosection = ({ title, imageUrl }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      const [successMessage, setSuccessMessage] = useState("");
     
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
     
      const handleSubmit = (e) => {
        e.preventDefault();
     
        // Store message in local storage
        const storedMessages = JSON.parse(localStorage.getItem("messages")) || [];
        const newMessage = {
          id: new Date().getTime(),
          ...formData,
        };
        storedMessages.push(newMessage);
        localStorage.setItem("messages", JSON.stringify(storedMessages));
     
        // Show success message
        setSuccessMessage("Your message has been sent successfully!");
     
        // Clear the form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
     
        // Remove the success message after a few seconds
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      };
    return (
       
           
               
                   
        <div className={footerStyles["- contact-us -"]}>
        <h2 style={{ textAlign: 'center', margin: '40px auto' }}>- CONTACT US -</h2>
        <h2 style={{ marginLeft:"3%",marginTop:"4%",color:"#14279b" }}>Akeshya</h2>
        <p>
    Designers, developers & marketeers capable of  <br></br>
    delivering solutions according to your needs.
</p>
{/* <div style={{ marginLeft: '500px',marginBottom:"-25%",marginTop:"2%", fontFamily: 'Arial, sans-serif', fontSize: '14px', color: '#333' }}> */}
<address style={{ marginLeft: '460px', marginTop: '-10%', fontFamily: 'Arial, sans-serif', fontSize: '14px' }}>
                <FiMapPin style={{ marginRight: '10px', verticalAlign: 'middle' }} className={footerStyles.icon25}/>
                26-2-789, 7th street, Jyothi Nagar, 
                <p style={{ marginLeft: '38px', marginTop: '1%', fontFamily: 'Arial, sans-serif', fontSize: '14px' }}>Nellore, Andhra Pradesh 524004</p>
            </address>
            <div style={{ marginLeft: '460px', fontFamily: 'Arial, sans-serif', fontSize: '14px' }}>
                <RiMailSendLine style={{ marginRight: '8px', verticalAlign: 'middle' }} className={footerStyles.icon25}/>
                <a href="mailto:info@akeshya.com" style={{ color: '#007bff', textDecoration: 'none' }}>info@akeshya.com</a>
            </div>
            <p style={{ marginLeft: '460px', fontFamily: 'Arial, sans-serif', fontSize: '14px', color: '#333' }}>
                <FiPhone style={{ marginRight: '8px', verticalAlign: 'middle' }}className={footerStyles.icon25} />
                +91 94942 40922
            </p>
   
        {successMessage && <p className={footerStyles.success}>{successMessage}</p>}
 
        <form style={{fontFamily: 'Arial, sans-serif', marginTop:"-19%",fontSize: '14px', }}className={footerStyles["contact-form"]} onSubmit={handleSubmit}>
          <div>
          
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
        
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
           
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>  
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>

    
      
    );
};

export default Herosection;
