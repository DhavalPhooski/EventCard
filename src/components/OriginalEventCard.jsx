import React, { useState } from "react";
import "../App.css";
import CrossImg from "../assets/Cross.png";

export default function EventCard() {
  // State to track which card's details to show
  const [showDetails, setShowDetails] = useState(null);

  // Function to show card details
  const showCardDetails = (cardNumber) => {
    setShowDetails(cardNumber);
    document.querySelector(".container").classList.add("blurred");
    document.querySelector(".overlay").classList.remove("hidden");
    document.querySelector(".button-wrapper").classList.add("hidden");
  };

  // Function to hide card details
  const hideCardDetails = () => {
    setShowDetails(null);
    document.querySelector(".container").classList.remove("blurred");
    document.querySelector(".overlay").classList.add("hidden");
    document.querySelector(".button-wrapper").classList.remove("hidden");
  };

  return (
    <>
      <div className="container">
        <div className="button-wrapper">
          <div className="button">
            <div className="btnAll">
              <button type="button" className="btn">
                <strong>All</strong>
                <div id="container-stars">
                  <div id="stars"></div>
                </div>

                <div id="glow">
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>
              </button>
            </div>
            <div className="btnTech">
              <button type="button" className="btn">
                <strong>Tech Events</strong>
                <div id="container-stars">
                  <div id="stars"></div>
                </div>

                <div id="glow">
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>
              </button>
            </div>
            <div className="btnNonTech">
              <button type="button" className="btn">
                <strong>Non-Tech Events</strong>
                <div id="container-stars">
                  <div id="stars"></div>
                </div>

                <div id="glow">
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>
              </button>
            </div>
            <div className="btnWorkshop">
              <button type="button" className="btn">
                <strong>Workshop/Hands-On</strong>
                <div id="container-stars">
                  <div id="stars"></div>
                </div>

                <div id="glow">
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="overlay" onClick={hideCardDetails}></div>

        {/* Card 1 */}
        <div className="card c1 Workshop" onClick={() => showCardDetails(1)}>
          <h2>IOT Workshop</h2>
        </div>

        {/* Card 2 */}
        <div className="card c2 Workshop" onClick={() => showCardDetails(2)}>
          <h2>The Art Of Aero Modelling</h2>
        </div>

        {/* Card 3 */}
        <div className="card c3 Tech" onClick={() => showCardDetails(3)}>
          <h2>Robo Race</h2>
        </div>

        {/* Card 4 */}
        <div className="card c4 Tech" onClick={() => showCardDetails(4)}>
          <h2>Bits and Bytes</h2>
        </div>

        {/* Card 5 */}
        <div className="card c5 Tech" onClick={() => showCardDetails(5)}>
          <h2>Designverse with AI</h2>
        </div>

        {/* Card 6 */}
        <div className="card c6 Tech" onClick={() => showCardDetails(6)}>
          <h2>Trade X- Tech and more</h2>
        </div>

        {/* Card 7 */}
        <div className="card c7 Tech" onClick={() => showCardDetails(7)}>
          <h2>TECH HEIST</h2>
        </div>

        {/* Card 8 */}
        <div className="card c8 Tech" onClick={() => showCardDetails(8)}>
          <h2>CADATHON</h2>
        </div>

        {/* Card 9 */}
        <div className="card c9 Tech" onClick={() => showCardDetails(9)}>
          <h2>Google Chase : The Ultimate Treasure Hunt</h2>
        </div>

        {/* Card 10 */}
        <div className="card c10" onClick={() => showCardDetails(10)}>
          <h2>¢rypto $howdown Tech</h2>
        </div>

        {/* Card 11 */}
        <div className="card c11 Tech" onClick={() => showCardDetails(11)}>
          <h2>Stellar Cosmos</h2>
        </div>

        {/* Card 12 */}
        <div className="card c12 Tech" onClick={() => showCardDetails(12)}>
          <h2>The Ultimate VR Experience</h2>
        </div>

        {/* Card 13 */}
        <div className="card c13 Tech" onClick={() => showCardDetails(13)}>
          <h2>Civil bridge event Name will add further</h2>
        </div>

        {/* Card 14 */}
        <div className="card c14 NonTech" onClick={() => showCardDetails(14)}>
          <h2>Box Cricket</h2>
        </div>

        {/* Card 15 */}
        <div className="card c15 NonTech" onClick={() => showCardDetails(15)}>
          <h2>Valorant Showdown 3.0</h2>
        </div>

        {/* Card 16 */}
        <div className="card c16 NonTech" onClick={() => showCardDetails(16)}>
          <h2>FFS [FREE FIRE clash of champions]</h2>
        </div>

        {/* Card 17 */}
        <div className="card c17 NonTech" onClick={() => showCardDetails(17)}>
          <h2>POPCORN QUIZZY</h2>
        </div>

        {/* Card 18 */}
        <div className="card c18 NonTech" onClick={() => showCardDetails(18)}>
          <h2>IPL Auction</h2>
        </div>

        {/* Card 19 */}
        <div className="card c19 NonTech" onClick={() => showCardDetails(19)}>
          <h2>Infinity Quest</h2>
        </div>

        {/* Card 20 */}
        <div className="card c20 NonTech" onClick={() => showCardDetails(20)}>
          <h2>BGMI Conquest</h2>
        </div>

        {/* Card 21 */}
        <div className="card c21 NonTech" onClick={() => showCardDetails(21)}>
          <h2>Midnight Mystery</h2>
        </div>
      </div>

      {/* Card Details Popups */}
      <div className={`cardDetails1 ${showDetails === 1 ? "" : "hidden"}`}>
        <div className="animated-border-box-glow"></div>
        <div className="animated-border-box">
          <img
            src={CrossImg}
            className="cross1"
            alt="#"
            onClick={hideCardDetails}
          />
          <h3 className="text-Detail1">
            Dive into the world of IoT at Prakarsh25 with an engaging hands-on
            workshop! Master sensors like distance sensors and bring your ideas
            to life with real-time applications.
          </h3>
        </div>
      </div>

      <div className={`cardDetails2 ${showDetails === 2 ? "" : "hidden"}`}>
        <div className="animated-border-box-glow"></div>
        <div className="animated-border-box">
          <img
            src={CrossImg}
            className="cross2"
            alt="#"
            onClick={hideCardDetails}
          />
          <h3 className="text-Detail2">
            Dive into the world of aerodynamics and innovation! Join our
            hands-on workshop where you’ll learn to design and build an RC plane
            from scratch. Guided by experts, you’ll not only assemble your own
            aircraft but also experience the thrill of flying it. Whether you’re
            an enthusiast or a beginner, this is your chance to explore the
            skies and enhance your technical skills.
          </h3>
        </div>
      </div>

      {/* Repeat for all other cardDetails... */}
    </>
  );
}
