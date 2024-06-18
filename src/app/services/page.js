"use client";
import React, { useState } from "react";
import heroStyles from "@/app/styles/herosection.module.css";

import footerStyles from "@/app/styles/footer.module.css";

import { Mulish } from "next/font/google";

import {
  FaMapMarkerAlt,
  FaAddressBook,
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

import { TfiWindow } from "react-icons/tfi";
import { TbCalendarEvent } from "react-icons/tb";
import { BiWorld, BiSolidTachometer } from "react-icons/bi";
import { AiFillDribbbleCircle } from "react-icons/ai";
import { FiMapPin, FiPhone } from "react-icons/fi";

import { RiMailSendLine } from "react-icons/ri";

const mulish = Mulish({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const Services = ({ title, imageUrl }) => {
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
    <main className={heroStyles.main_section}>
      <div className={footerStyles["services"]}>
        {/* <h2 style={{ textAlign: 'center', margin: '0 auto' }}>- SERVICES -</h2>
          <p style={{ textAlign: 'center', margin: '0 auto' }}> */}
        <h2 style={{ textAlign: "center", margin: "0 auto" }}>- SERVICES -</h2>
        <p style={{ textAlign: "center", margin: "20px auto 0" }}>
          Akeshya will serve as your consultant and development partner to help
          you turn your idea into a reality.
        </p>

        <div className={footerStyles["services-cards"]}>
          <div className={footerStyles["service-card"]}>
            <AiFillDribbbleCircle className={footerStyles["icon13"]} />
            <h3>Design</h3>
            <p>
              Our web design services can assist you in reclaiming your
              company's online image. Your business will flourish on the
              Internet thanks to the combination of style and technology we
              provide, as well as our experience.
            </p>
          </div>
          <div className={footerStyles["service-card"]}>
            <FaFileAlt className={footerStyles["icon13"]} />

            <h3>Development</h3>
            <p>
              Our development team can construct platforms to help your business
              thrive by creating powerful customised solutions tailored to your
              particular requirements. Akeshya makes use of established and
              effective web development tools.
            </p>
          </div>
          <div className={footerStyles["service-card"]}>
            <BiWorld className={footerStyles["icon13"]} />
            <h3>Marketing</h3>
            <p>
              A beautiful website is the foundation of effective marketing. Our
              customers achieve success where it counts—in the real world—by
              combining our proven approach with our passion for improving
              conversions and increasing ROI.
            </p>
          </div>
          <div className={footerStyles["service-card"]}>
            <BiSolidTachometer className={footerStyles["icon13"]} />
            <h3>Support</h3>
            <p>
              Since the beginning, we at Akeshya have specialised in website
              maintenance. We recognise the significance of having your business
              online 24 hours a day, seven days a week, and we've alike servises
              as and heading and afetr that one sentence line afett belw 4 cards
              coontaining the related explanation a system to ensure that we're
              always available.
            </p>
          </div>
        </div>
      </div>
      <div className={footerStyles["services"]}>
        <h2 style={{ textAlign: "center", margin: "40px auto" }}>
          - OUR PROCESS -
        </h2>
        <p style={{ textAlign: "center", margin: "20px auto 0" }}>
          Over the years we’ve evolved a tested method for attaining achievement
          for each one of our clients.
        </p>

        <div className={footerStyles["services-cardss"]}>
          <div className={footerStyles["process-steps-row"]}>
            <div className={footerStyles["process-step"]}>
              <h3>1. Planning</h3>
              <p>
                We help you turn all of your ideas into a digital product that
                meets all of your requirements. We begin each project by
                determining its scope and needs. This is done by collaborating
                closely with you to ensure that we're all on the same page.
              </p>
            </div>
            <div className={footerStyles["process-step"]}>
              <h3>2. Design</h3>
              <p>
                We build our websites carefully through a series of workshops,
                wire-framing, and user experience (UX) sessions, resulting in a
                site that reinforces trust, conveys important brand messaging,
                and provides a return on innovation.
              </p>
            </div>
          </div>
          <div className={footerStyles["process-steps-row"]}>
            <div className={footerStyles["process-step"]}>
              <h3>3. Development</h3>
              <p>
                We provide extensive front-end and back-end development that
                allows your idea to stand alone. Our in-house developers work
                side-by-side with the artistic team to seek out natural
                breakpoints inside the content and order practicality based on
                acknowledged statistics.
              </p>
            </div>
            <div className={footerStyles["process-step"]}>
              <h3>4. Marketing</h3>
              <p>
                We come up with ideas and campaigns to help your business
                prosper online. Our campaigns and virtual approach have a
                verified tune report of accomplishing brilliant results,
                gathering new leads and site visitors in your website and assist
                them convert.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={footerStyles["core-features"]}>
        <h2 style={{ textAlign: "center", margin: "40px 0" }}>
          - OUR CORE FEATURES -
        </h2>

        <p style={{ textAlign: "center", margin: "20px auto 0" }}>
          Akeshya is a forward-thinking and intelligent design firm that is
          technically and creatively capable of transforming your brand into its
          best digital self. Our approach to design and development results in
          compelling, engaging branding and immersive digital experiences that
          provide a value for money.
        </p>
        <div className={footerStyles["features-list"]}>
          <div className={footerStyles["feature-row"]}>
            <div className={footerStyles["feature"]}>
              <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
                <div className={footerStyles["icon-heading-container"]}>
                  <TfiWindow className={footerStyles["icon1"]} />
                  <h3>Web design</h3>
                </div>
              </a>
            </div>
            {/* <div className={footerStyles['feature']}>
            <FaCode className={footerStyles['feature-icon']} />
            <h3>Development</h3>
          
        </div> */}
            <div className={footerStyles["feature"]}>
              <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
                <div className={footerStyles["icon-heading-container"]}>
                  <RiCodeBoxLine className={footerStyles["icon2"]} />
                  <h3>Development</h3>
                </div>
              </a>
            </div>

            <div className={footerStyles["feature"]}>
              <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
                <div className={footerStyles["icon-heading-container"]}>
                  <RiCreativeCommonsByLine className={footerStyles["icon3"]} />
                  <h3>Branding</h3>
                </div>
              </a>
            </div>
            <div className={footerStyles["feature"]}>
              <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
                <div className={footerStyles["icon-heading-container"]}>
                  <FaRegPlayCircle className={footerStyles["icon4"]} />
                  <h3>Media buying</h3>
                </div>
              </a>
            </div>
          </div>
          <div className={footerStyles["feature-row"]}>
            <div className={footerStyles["feature"]}>
              <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
                <div className={footerStyles["icon-heading-container"]}>
                  <RiSearchEyeLine className={footerStyles["icon5"]} />
                  <h3>Search engine</h3>
                </div>
              </a>
            </div>
            <div className={footerStyles["feature"]}>
              <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
                <div className={footerStyles["icon-heading-container"]}>
                  <RiTodoLine className={footerStyles["icon1"]} />
                  <h3>Brand strategy</h3>
                </div>
              </a>
            </div>
            <div className={footerStyles["feature"]}>
              {/* <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}> */}
              <a
                href="/"
                style={{ textDecoration: "none", color: "inherit" }}
              ></a>
              <div className={footerStyles["icon-heading-container"]}>
                <FaMapMarkerAlt className={footerStyles["icon7"]} />
                <h3>Local search marketing</h3>
              </div>
              {/* </a> */}
            </div>
            <div className={footerStyles["feature"]}>
              <a
                href="/"
                style={{ textDecoration: "none", color: "inherit" }}
              ></a>
              <div className={footerStyles["icon-heading-container"]}>
                <RiBarChartGroupedLine className={footerStyles["icon8"]} />
                <h3>Lead Tracking & Management</h3>
              </div>
            </div>
          </div>
          <div className={footerStyles["feature-row"]}>
            <div className={footerStyles["feature"]}>
              <a
                href="/"
                style={{ textDecoration: "none", color: "inherit" }}
              ></a>
              <div className={footerStyles["icon-heading-container"]}>
                <FaAddressBook className={footerStyles["icon9"]} />
                <h3>Contact management</h3>
              </div>
            </div>
            <div className={footerStyles["feature"]}>
              <a
                href="/"
                style={{ textDecoration: "none", color: "inherit" }}
              ></a>
              <div className={footerStyles["icon-heading-container"]}>
                <RiDiscLine className={footerStyles["icon10"]} />
                <h3>Media management</h3>
              </div>
            </div>
            <div className={footerStyles["feature"]}>
              <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
                <div className={footerStyles["icon-heading-container"]}>
                  <TbCalendarEvent className={footerStyles["icon11"]} />
                  <h3>Social scheduling</h3>
                </div>
              </a>
            </div>
            <div className={footerStyles["feature"]}>
              <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
                <div className={footerStyles["icon-heading-container"]}>
                  <RiAdvertisementFill className={footerStyles["icon12"]} />
                  <h3>Ad retargeting</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={footerStyles["- contact-us -"]}>
        <h2 style={{ textAlign: "center", margin: "40px auto" }}>CONTACT US</h2>
        <h2 style={{ marginLeft: "3%", marginTop: "4%", color: "#14279b" }}>
          Akeshya
        </h2>
        <p>
          Designers, developers & marketeers capable of <br></br>
          delivering solutions according to your needs.
        </p>
        {/* <div style={{ marginLeft: '500px',marginBottom:"-25%",marginTop:"2%", fontFamily: 'Arial, sans-serif', fontSize: '14px', color: '#333' }}> */}
        <address
          style={{
            marginLeft: "460px",
            marginTop: "-10%",
            fontFamily: "Arial, sans-serif",
            fontSize: "14px",
          }}
        >
          <FiMapPin
            style={{ marginRight: "10px", verticalAlign: "middle" }}
            className={footerStyles.icon25}
          />
          26-2-789, 7th street, Jyothi Nagar,
          <p
            style={{
              marginLeft: "38px",
              marginTop: "1%",
              fontFamily: "Arial, sans-serif",
              fontSize: "14px",
            }}
          >
            Nellore, Andhra Pradesh 524004
          </p>
        </address>
        <div
          style={{
            marginLeft: "460px",
            fontFamily: "Arial, sans-serif",
            fontSize: "14px",
          }}
        >
          <RiMailSendLine
            style={{ marginRight: "8px", verticalAlign: "middle" }}
            className={footerStyles.icon25}
          />
          <a
            href="mailto:info@akeshya.com"
            style={{ color: "#007bff", textDecoration: "none" }}
          >
            info@akeshya.com
          </a>
        </div>
        <p
          style={{
            marginLeft: "460px",
            fontFamily: "Arial, sans-serif",
            fontSize: "14px",
            color: "#333",
          }}
        >
          <FiPhone
            style={{ marginRight: "8px", verticalAlign: "middle" }}
            className={footerStyles.icon25}
          />
          +91 94942 40922
        </p>

        {successMessage && (
          <p className={footerStyles.success}>{successMessage}</p>
        )}

        <form
          style={{
            fontFamily: "Arial, sans-serif",
            marginTop: "-19%",
            fontSize: "14px",
          }}
          className={footerStyles["contact-form"]}
          onSubmit={handleSubmit}
        >
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
    </main>
  );
};

export default Services;
