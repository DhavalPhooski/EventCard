import React, { useState } from "react";
import "../App.css";
import CrossImg from "../assets/Cross.png";

// Event data
const events = [
  { id: 1, category: "Workshop", title: "IOT Workshop", details: "Dive into the world of IoT at Prakarsh25 with an engaging hands-on workshop! Master sensors like distance sensors and bring your ideas to life with real-time applications." },
  { id: 2, category: "Workshop", title: "The Art Of Aero Modelling", details: "Dive into the world of aerodynamics and innovation! Join our hands-on workshop where you’ll learn to design and build an RC plane from scratch." },
  { id: 3, category: "Tech", title: "Robo Race", details: "Unleash your RC car’s potential on a dynamic track filled with thrilling hurdles, sharp turns, and speed challenges!" },
  { id: 4, category: "Tech", title: "Bits and Bytes", details: "“Bits and Bytes” takes you through three thrilling stages! Kick off with a brain-teasing IT and CS quiz, step up to the challenge of programming charades, then dive into a high-stakes auction to build the ultimate virtual system." },
  { id: 5, category: "Tech", title: "Designverse with AI", details: "Step into an exciting three-round creative showdown! Design a stunning logo, generate mesmerizing AI visuals based on prompts, and craft a striking advertisement banner while delivering a persuasive pitch." },
  { id: 6, category: "Tech", title: "Trade X- Tech and more", details: "Experience the thrill of trading in our unique technology-driven event! Compete in teams, answer tech-centric questions to strategically boost your share prices, and emerge as the ultimate market leader with the highest shares." },
  { id: 7, category: "Tech", title: "TECH HEIST", details: "Break the Code: Embark on a pulse-pounding spy-themed mission where elite teams of four face off in a race against time. Crack complex codes, debug challenging programs, outsmart mind-bending logic puzzles, and decrypt hidden messages." },
  { id: 8, category: "Tech", title: "CADATHON", details: "Gear up for CADATHON 2025! Begin with an expert lecture to gain insights and sharpen your skills in AutoCAD (2D) and Fusion 360 (3D). Then, dive into an exciting competition where your creativity and innovation will take center stage." },
  { id: 9, category: "Tech", title: "Google Chase: The Ultimate Treasure Hunt", details: "Embark on an adventurous campus-wide quest to collect the letters G-O-O-G-L-E by solving tech and non-tech challenges at each checkpoint. With immunity pins, lucky draws, and bonus cards adding twists, this high-energy treasure hunt ensures fun, teamwork, and excitement at every step!" },
  { id: 10, category: "Tech", title: "¢rypto $howdown", details: "Join CryptoShowdown 2025, the ultimate event for crypto enthusiasts, traders, and innovators. Explore bold strategies, cutting-edge ideas, and the future of digital finance. Trade dummy currencies to make real money." },
  { id: 11, category: "Tech", title: "Stellar Cosmos", details: "“Empty Epsilon” is a technical event where teams compete in a virtual space combat simulator, promoting teamwork, strategy, and quick thinking." },
  { id: 12, category: "Tech", title: "The Ultimate VR Experience", details: "Dive into a whole new dimension with The Ultimate VR Experience! Explore a custom-designed game that combines immersive virtual reality with interactive gameplay, offering participants a thrilling, cutting-edge adventure like no other!" },
  { id: 13, category: "Tech", title: "Civil Bridge Event", details: "Not Given!!!" },
  { id: 14, category: "NonTech", title: "Box Cricket", details: "Step into the adrenaline-filled event of Box Cricket at PRAKARSH 2025! Experience the thrill of fast-paced cricket in a compact arena where strategy meets action." },
  { id: 15, category: "NonTech", title: "Valorant Showdown 3.0", details: "“Take the Stage, Claim the Title.” Gear up for the ultimate showdown in our Valorant Tournament, where strategy meets skill in Riot Games’ fast-paced tactical shooter." },
  { id: 16, category: "NonTech", title: "FFS [FREE FIRE Clash of Champions]", details: "“Where Gamers Rise and Champions Rule!” An Event where you can compete against fellow enthusiasts in exciting Free Fire matches and win exciting prizes and cash rewards for your skills." },
  { id: 17, category: "NonTech", title: "POPCORN QUIZZY", details: "FUN, BRAIN, SMILE ACTION!! GET READY TO BRING YOUR A-GAME TO POPCORN QUIZZY, WHERE EVERY QUESTION IS A BLOCKBUSTER AND EVERY BUZZ IS A HIT!" },
  { id: 18, category: "NonTech", title: "IPL Auction", details: "“Think, Bid, Win: Step into the Excitement of IPL Auction Strategy!” Experience the thrill of cricket strategy and team-building at our IPL Auction Challenge!" },
  { id: 19, category: "NonTech", title: "Infinity Quest", details: "“A treasure hunt to the universe.” Get ready for “Infinity Quest,” an electrifying Marvel-themed treasure hunt with an engineering twist!" },
  { id: 20, category: "NonTech", title: "BGMI Conquest", details: "Land. Fight. Dominate. The Battleground is Yours! The battle begins at BGMI, where warriors collide in an intense fight for survival!" },
  { id: 21, category: "NonTech", title: "Midnight Mystery", details: "“Face the dark, Escape the maze, Conquer the Mystery.” Step into a world of mystery and darkness with Challenges! This non-tech event is designed to test your instincts, teamwork, and problem-solving skills." },
];

export default function EventCard() {
  const [selectedEvent, setSelectedEvent] = useState(null); // Track selected event
  const [filter, setFilter] = useState("All"); // Track current filter

  // Show event details
  const showCardDetails = (eventId) => {
    setSelectedEvent(eventId);
  };

  // Hide event details
  const hideCardDetails = () => {
    setSelectedEvent(null);
  };

  // Filter events based on category
  const filteredEvents = filter === "All" ? events : events.filter(event => event.category === filter);

  return (
    <div className="container">
      {/* Filter Buttons */}
      <div className="button-wrapper">
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Tech")}>Tech Events</button>
        <button onClick={() => setFilter("NonTech")}>Non-Tech Events</button>
        <button onClick={() => setFilter("Workshop")}>Workshop/Hands-On</button>
      </div>

      {/* Event Cards */}
      <div className="card-container">
        {filteredEvents.map(event => (
          <div
            key={event.id}
            className={`card c${event.id} ${event.category}`}
            onClick={() => showCardDetails(event.id)}
          >
            <h2>{event.title}</h2>
          </div>
        ))}
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="cardDetails">
          <div className="animated-border-box-glow"></div>
          <div className="animated-border-box">
            <img
              src={CrossImg}
              className="cross"
              alt="Close"
              onClick={hideCardDetails}
            />
            <h3>{events.find(event => event.id === selectedEvent).details}</h3>
          </div>
        </div>
      )}
    </div>
  );
}