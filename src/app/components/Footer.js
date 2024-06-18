




"use client";
import React, { useState } from "react";
import footerStyles from "@/app/styles/footer.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaSmile,
  FaBullhorn,
} from "react-icons/fa";
import Link from "next/link";
import {
  FaDesktop,
  FaCode,
  FaPalette,
  FaAd,
  FaSearch,
  FaBullseye,
  FaMapMarkerAlt,
  FaClipboardList,
  FaAddressBook,
  FaCamera,
  FaCalendarAlt,
  FaRetweet,
  FaFileAlt,
  FaRegPlayCircle,
} from "react-icons/fa";
import {
  RiTodoLine,
  RiBarChartGroupedLine,
  RiSearchEyeLine,
  RiDiscLine,
  RiAdvertisementFill,
  RiCreativeCommonsByLine,
  RiCodeBoxLine,
} from "react-icons/ri";
import Image from "next/image";
import { BsJournalRichtext, BsEmojiSmile } from "react-icons/bs";
import { IoGlobeOutline } from "react-icons/io5";
import { GoClock } from "react-icons/go";
import { TfiWindow } from "react-icons/tfi";
import { TbCalendarEvent } from "react-icons/tb";
import { BiWorld, BiSolidTachometer } from "react-icons/bi";
import { AiFillDribbbleCircle } from "react-icons/ai";
import { FiMapPin,FiPhone } from 'react-icons/fi';


import {RiMailSendLine} from 'react-icons/ri';
import heroStyles from "@/app/styles/herosection.module.css";
import styles from "@/app/styles/common.module.css";
// const Footer = () => {
  const Footer = () => {
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
    <>
      <footer className={footerStyles.footer}>
        <div className={footerStyles.content}>
       


        
           
        </div>
      
        <div className={footerStyles["bottom-details"]}>
          <div className={footerStyles.bottom_text}>
            <span className={footerStyles.copyright_text}>
              {" "}
              © Copyright Akeshya. All Rights Reserved
              {/* <Link href="/"> Thapa Technical.</Link> All rights reserved{" "} */}
            </span>
            <span className={footerStyles.policy_terms}>
            <a href="/terms-and-conditions.pdf" target="_blank" rel="noopener noreferrer">
            Terms & Condition
          </a>
            <a href="/Refund policy.pdf" target="_blank" rel="noopener noreferrer">Refund policy</a>
              <a href="/Privacy policy.pdf" target="_blank" rel="noopener noreferrer">Privacy policy</a>      
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
