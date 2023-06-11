import React from "react";
//import Image from '../images/landing.jpg';
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="landing">
      <div className="header">
        <img src={Image} alt="logo" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <a href="/">
          <i class="fa fa-Home fa-lg"></i>Home
        </a>
        <a href="/Login">
          <i class="fa fa-Signin fa-lg"></i>Sign In
        </a>
        <Link to="/Appointment">Make Appointment</Link>
      </div>
      <div className="h1">
        <h1>LAND REGISTRATION SYSTEM</h1>
      </div>
      <div className="form-container" style={{ float: "left" }}>
        <h2>About Us</h2>
      </div>
      <div className="form-container" style={{ float: "left" }}>
        <h2>Contact</h2>
      </div>
    </div>
  );
}
