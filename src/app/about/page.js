
// import Herosection from "@/app/components/Herosection";

// const About = () => {
//     return (
//         <Herosection title={"OUR STORY"} imageUrl ={"/about1.svg"} />
//     );
// };

// export default About;



"use client";
import React, { useState } from "react";
import heroStyles from "@/app/styles/herosection.module.css";
import styles from "@/app/styles/common.module.css";
import footerStyles from "@/app/styles/footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { Mulish } from 'next/font/google';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
    FaSmile,
    FaBullhorn,
  } from "react-icons/fa";

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
 
  import { BsJournalRichtext, BsEmojiSmile } from "react-icons/bs";
  import { IoGlobeOutline } from "react-icons/io5";
  import { GoClock } from "react-icons/go";
  import { TfiWindow } from "react-icons/tfi";
  import { TbCalendarEvent } from "react-icons/tb";
  import { BiWorld, BiSolidTachometer } from "react-icons/bi";
  import { AiFillDribbbleCircle } from "react-icons/ai";
  import { FiMapPin,FiPhone } from 'react-icons/fi';
  
  
  import {RiMailSendLine} from 'react-icons/ri';

const mulish = Mulish({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap'
});

const About = ({ title, imageUrl }) => {
    
      
    return (
        <main className={heroStyles.main_section}>
            <div className={styles.container}>
               </div>
            <h2 style={{ textAlign: 'center', margin: '-97px auto 7px' }}>-ABOUT US-</h2>


<div className={footerStyles["about-us"]}>
  <div className={footerStyles["about-content"]}>
    <ul>
      <li>
        We are Akeshya, a firm that specializes in web design and
        marketing. We help transform ideas into reality with a team of
        passionate graphic designers, web developers, and seasoned
        marketing advisors.
      </li>
      <li>
        We started with a simple idea: do what is best for the client.
      </li>
      <li>
        Our methodical and individual approach to each project
        delivers the finest possible results for your media.
      </li>
      <li>
        Our day-to-day work is to solve your problems utilising the
        most up-to-date, practical adaptive technology, and we have a
        lot of fun doing it.
      </li>
    </ul>
    <ul>
      <li>
        We're professional, but we're also friendly, and we'll always
        pay attention to your concerns.
      </li>
      <li>
        We expect to work with innovative people that have an open
        mind and are dedicated to making every idea a reality.
      </li>
      <li>
        We want to hear from you if you're interested in SEO, have Web
        Development ideas, or require a graphic designer who can match
        your goals.
      </li>
      <li>    <Link href="/services">Learn More</Link></li>
    </ul>
  </div>

</div>
<div className={styles.client_logos1}>
          <Image src="/counts-img.svg" alt="Client 1" width={100} height={50}   style={{ marginTop: 60 }}/>
        </div>

        <div className={footerStyles.stats}>
          <div className={footerStyles["stats-text"]}>
            <div className={footerStyles["stats-row"]}>
              <BsEmojiSmile className={footerStyles.icon21} />
              <div>
                3835039
                <br />
                Organic Reach (Global)
              </div>
              <BsJournalRichtext className={footerStyles.icon21} />

              <div>
                85
                <br />
                Campaigns
              </div>
            </div>
           

            

          </div>
        </div>
        <div className={footerStyles.stats}>
   
            
            <div className={footerStyles["stats-text1"]}>
            <div className={footerStyles["stats-row"]}>
              <GoClock className={footerStyles.icon20} />
              <div>
                14081
                <br />
                Watch Hours (Asia)
              </div>
              <IoGlobeOutline className={footerStyles.icon20} />
              <div>
                17
                <br />
                Excellent 
                CTR % (Asia) 
              </div>
            </div>

            </div>

          </div>
     

       
      
           
       
   
       
    
        </main>
    );
};

export default About;
