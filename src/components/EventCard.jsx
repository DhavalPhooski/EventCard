import React, { useState, useRef } from "react";
import "../App.css";
import CrossImg from "../assets/Cross.png";

export default function EventCard() {
  // State to track which card's details to show
  const [showDetails, setShowDetails] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All"); // Active filter state

  // Refs to access the elements
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const buttonWrapperRef = useRef(null);

  // Function to show card details
  const showCardDetails = (cardNumber) => {
    setShowDetails(cardNumber);
    if (containerRef.current) containerRef.current.classList.add("blurred");
    if (overlayRef.current) overlayRef.current.classList.remove("hidden");
    if (buttonWrapperRef.current)
      buttonWrapperRef.current.classList.add("hidden");
  };

  // Function to hide card details
  const hideCardDetails = () => {
    setShowDetails(null);
    if (containerRef.current) containerRef.current.classList.remove("blurred");
    if (overlayRef.current) overlayRef.current.classList.add("hidden");
    if (buttonWrapperRef.current)
      buttonWrapperRef.current.classList.remove("hidden");
  };

  // Function to filter event cards
  const showCard = (filterValue) => {
    setActiveFilter(filterValue); // Set the active filter

    // Hide all event categories
    document.querySelectorAll(".Tech, .NonTech, .Workshop").forEach((elem) => {
      elem.classList.add("hidden");
    });

    // Show filtered category based on filterValue
    if (filterValue === "Tech") {
      document.querySelectorAll(".Tech").forEach((elem) => {
        elem.classList.remove("hidden");
      });
    } else if (filterValue === "NonTech") {
      document.querySelectorAll(".NonTech").forEach((elem) => {
        elem.classList.remove("hidden");
      });
    } else if (filterValue === "Workshop") {
      document.querySelectorAll(".Workshop").forEach((elem) => {
        elem.classList.remove("hidden");
      });
    } else {
      // Show all events if 'All' is selected
      document.querySelectorAll(".card").forEach((elem) => {
        elem.classList.remove("hidden");
      });
    }

    // Hide the filter buttons when a filter is applied
    document.querySelector(".filterValue").classList.add("hidden");
  };

  return (
    <>
      <div className="container" ref={containerRef}>
        <div className="button-wrapper" ref={buttonWrapperRef}>
          <div className="button">
            <div className="btnAll">
              <button
                type="button"
                className="btn"
                onClick={() => showCard("All")}
              >
                <strong>All</strong>
              </button>
            </div>
            <div className="btnTech">
              <button
                type="button"
                className="btn"
                onClick={() => showCard("Tech")}
              >
                <strong>Tech Events</strong>
              </button>
            </div>
            <div className="btnNonTech">
              <button
                type="button"
                className="btn"
                onClick={() => showCard("NonTech")}
              >
                <strong>Non-Tech Events</strong>
              </button>
            </div>
            <div className="btnWorkshop">
              <button
                type="button"
                className="btn"
                onClick={() => showCard("Workshop")}
              >
                <strong>Workshop/Hands-On</strong>
              </button>
            </div>
          </div>
        </div>

        <div
          className="overlay"
          ref={overlayRef}
          onClick={hideCardDetails}
        ></div>

        {/* Cards */}
        <div className="card c1 Workshop" onClick={() => showCardDetails(1)}>
          <h2>IOT Workshop</h2>
        </div>
        <div className="card c2 Workshop" onClick={() => showCardDetails(2)}>
          <h2>The Art Of Aero Modelling</h2>
        </div>
        <div className="card c3 Tech" onClick={() => showCardDetails(3)}>
          <h2>Robo Race</h2>
        </div>
        <div className="card c4 Tech" onClick={() => showCardDetails(4)}>
          <h2>Bits and Bytes</h2>
        </div>
        <div className="card c5 Tech" onClick={() => showCardDetails(5)}>
          <h2>Designverse with AI</h2>
        </div>
        <div className="card c6 Tech" onClick={() => showCardDetails(6)}>
          <h2>Trade X- Tech and more</h2>
        </div>
        <div className="card c7 Tech" onClick={() => showCardDetails(7)}>
          <h2>TECH HEIST</h2>
        </div>
        <div className="card c8 Tech" onClick={() => showCardDetails(8)}>
          <h2>CADATHON</h2>
        </div>
        <div className="card c9 Tech" onClick={() => showCardDetails(9)}>
          <h2>Google Chase: The Ultimate Treasure Hunt</h2>
        </div>
        <div className="card c10 Tech" onClick={() => showCardDetails(10)}>
          <h2>¢rypto $howdown Tech</h2>
        </div>
        <div className="card c11 Tech" onClick={() => showCardDetails(11)}>
          <h2>Stellar Cosmos</h2>
        </div>
        <div className="card c12 Tech" onClick={() => showCardDetails(12)}>
          <h2>The Ultimate VR Experience</h2>
        </div>
        <div className="card c13 Tech" onClick={() => showCardDetails(13)}>
          <h2>Civil bridge event Name will add further</h2>
        </div>
        <div className="card c14 NonTech" onClick={() => showCardDetails(14)}>
          <h2>Box Cricket</h2>
        </div>
        <div className="card c15 NonTech" onClick={() => showCardDetails(15)}>
          <h2>Valorant Showdown 3.0</h2>
        </div>
        <div className="card c16 NonTech" onClick={() => showCardDetails(16)}>
          <h2>FFS [FREE FIRE clash of champions]</h2>
        </div>
        <div className="card c17 NonTech" onClick={() => showCardDetails(17)}>
          <h2>POPCORN QUIZZY</h2>
        </div>
        <div className="card c18 NonTech" onClick={() => showCardDetails(18)}>
          <h2>IPL Auction</h2>
        </div>
        <div className="card c19 NonTech" onClick={() => showCardDetails(19)}>
          <h2>Infinity Quest</h2>
        </div>
        <div className="card c20 NonTech" onClick={() => showCardDetails(20)}>
          <h2>BGMI Conquest</h2>
        </div>
        <div className="card c21 NonTech" onClick={() => showCardDetails(21)}>
          <h2>Midnight Mystery</h2>
        </div>
      </div>

      {/* Card Details Popups */}
      {[...Array(21).keys()].map((i) => {
        return (
          <div
            className={`cardDetails${i + 1} ${
              showDetails === i + 1 ? "" : "hidden"
            }`}
            key={i + 1}
          >
            <div className="animated-border-box-glow"></div>
            <div className="animated-border-box">
              <img
                src={CrossImg}
                className={`cross${i + 1}`}
                alt="#"
                onClick={hideCardDetails}
              />
              <h3 className={`text-Detail${i + 1}`}>
                {/* Your Event Description for each card */}
                Event details for card {i + 1}
              </h3>
            </div>
          </div>
        );
      })}
    </>
  );
}
