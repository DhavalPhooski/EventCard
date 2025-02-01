import "../App.css";
import CrossImg from "../assets/Cross.png";

export default function EventCard() {
  const container = document.querySelector(".container");

  function showCardDetails(cardNumber) {
    document
      .querySelector(`.cardDetails${cardNumber}`)
      .classList.remove("hidden");
    container.classList.add("blurred");

    document.querySelector(".button-wrapper").classList.add("hidden");
  }

  function hideCardDetails(cardNumber) {
    document.querySelector(`.cardDetails${cardNumber}`).classList.add("hidden");
    container.classList.remove("blurred");

    document.querySelector(".button-wrapper").classList.remove("hidden");
  }

  for (let i = 1; i <= 21; i++) {
    document
      .querySelector(`.c${i}`)
      ?.addEventListener("click", () => showCardDetails(i));
    document
      .querySelector(`.cross${i}`)
      ?.addEventListener("click", () => hideCardDetails(i));
  }

  // Filter Buttons
  document.querySelector(".btnWorkshop")?.addEventListener("click", () => {
    document
      .querySelectorAll(".Tech")
      .forEach((el) => el.classList.add("hidden"));
    document
      .querySelectorAll(".NonTech")
      .forEach((el) => el.classList.add("hidden"));
    document
      .querySelectorAll(".Workshop")
      .forEach((el) => el.classList.remove("hidden"));
  });

  document.querySelector(".btnTech")?.addEventListener("click", () => {
    document
      .querySelectorAll(".Workshop")
      .forEach((el) => el.classList.add("hidden"));
    document
      .querySelectorAll(".NonTech")
      .forEach((el) => el.classList.add("hidden"));
    document
      .querySelectorAll(".Tech")
      .forEach((el) => el.classList.remove("hidden"));
  });

  document.querySelector(".btnNonTech")?.addEventListener("click", () => {
    document
      .querySelectorAll(".Workshop")
      .forEach((el) => el.classList.add("hidden"));
    document
      .querySelectorAll(".Tech")
      .forEach((el) => el.classList.add("hidden"));
    document
      .querySelectorAll(".NonTech")
      .forEach((el) => el.classList.remove("hidden"));
  });

  document.querySelector(".btnAll")?.addEventListener("click", () => {
    document
      .querySelectorAll(".Workshop")
      .forEach((el) => el.classList.remove("hidden"));
    document
      .querySelectorAll(".Tech")
      .forEach((el) => el.classList.remove("hidden"));
    document
      .querySelectorAll(".NonTech")
      .forEach((el) => el.classList.remove("hidden"));
  });
  return (
    <>
      <div className="container">
        <div className="button-wrapper">
          <div className="button">
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
        </div>

        <div className="card c1 Workshop">
          <h2>IOT Workshop</h2>
        </div>
        <div className="card c2 Workshop">
          <h2>The Art Of Aero Modelling</h2>
        </div>
        <div className="card c3 Tech">
          <h2>Robo Race</h2>
        </div>
        <div className="card c4 Tech">
          <h2>Bits and Bytes</h2>
        </div>
        <div className="card c5 Tech">
          <h2>Designverse with AI</h2>
        </div>
        <div className="card c6 Tech">
          <h2>Trade X- Tech and more</h2>
        </div>
        <div className="card c7 Tech">
          <h2>TECH HEIST</h2>
        </div>
        <div className="card c8 Tech">
          <h2>CADATHON</h2>
        </div>
        <div className="card c9 Tech">
          <h2>Google Chase : The Ultimate Treasure Hunt</h2>
        </div>
        <div className="card c10 Tech">
          <h2>¢rypto $howdown</h2>
        </div>
        <div className="card c11 Tech">
          <h2>Stellar Cosmos</h2>
        </div>
        <div className="card c12 Tech">
          <h2>The Ultimate VR Experience</h2>
        </div>
        <div className="card c13 Tech">
          <h2>Civil bridge event Name will add further</h2>
        </div>
        <div className="card c14 NonTech">
          <h2>Box Cricket</h2>
        </div>
        <div className="card c15 NonTech">
          <h2>Valorant Showdown 3.0</h2>
        </div>
        <div className="card c16 NonTech">
          <h2>FFS [FREE FIRE clash of champions]</h2>
        </div>
        <div className="card c17 NonTech">
          <h2>POPCORN QUIZZY</h2>
        </div>
        <div className="card c18 NonTech">
          <h2>IPL Auction</h2>
        </div>
        <div className="card c19 NonTech">
          <h2>Infinity Quest</h2>
        </div>
        <div className="card c20 NonTech">
          <h2>BGMI Conquest</h2>
        </div>
        <div className="card c21 NonTech">
          <h2>Midnight Mystery</h2>
        </div>
      </div>

      <div className="cardDetails1 hidden">
        <div className="animated-border-box-glow"></div>
        <div className="animated-border-box">
          <img src={CrossImg} className="cross1" alt="#" />
          <h3 className="text-Detail1">
            Dive into the world of IoT at Prakarsh25 with an engaging hands-on
            workshop! Master sensors like distance sensors and bring your ideas
            to life with real-time applications
          </h3>
        </div>
      </div>

      <div className="cardDetails2 hidden">
        <div className="animated-border-box-glow"></div>
        <div className="animated-border-box">
          <img src={CrossImg} className="cross2" alt="#" />
          <h3 className="text-Detail2">
            Dive into the world of aerodynamics and innovation! Join our
            hands-on workshop where you&apos;ll learn to design and build an RC
            plane from scratch. Guided by experts, you’ll not only assemble your
            own aircraft but also experience the thrill of flying it. Whether
            you’re an enthusiast or a beginner, this is your chance to explore
            the skies and enhance your technical skills.
          </h3>
        </div>
      </div>

      <div className="cardDetails3 hidden">
        <div className="animated-border-box-glow"></div>
        <div className="animated-border-box">
          <img src={CrossImg} className="cross3" alt="#" />
          <h3 className="text-Detail3">
            Unleash your RC car’s potential on a dynamic track filled with
            thrilling hurdles, sharp turns, and speed challenges! Gear up for
            the ultimate adrenaline-fueled race to victory at Prakarsh25.
          </h3>
        </div>
      </div>

      <div className="cardDetails4 hidden">
        <div className="animated-border-box-glow"></div>
        <div className="animated-border-box">
          <img src={CrossImg} className="cross4" alt="#" />
          <h3 className="text-Detail4">
            “Bits and Bytes” takes you through three thrilling stages! Kick off
            with a brain-teasing IT and CS quiz, step up to the challenge of
            programming charades then dive into a highstakes auction to build
            the ultimate virtual system. Only the smartest strategists will
            emerge victorious!
          </h3>
        </div>
      </div>

      <div className="cardDetails5 hidden">
        <div className="animated-border-box-glow"></div>
        <div className="animated-border-box">
          <img src={CrossImg} className="cross5" alt="#" />
          <h3 className="text-Detail5">
            Step into an exciting three-round creative showdown! Design a
            stunning logo , generate mesmerizing AI visuals based on prompts ,
            and craft a striking advertisement banner while delivering a
            persuasive pitch. Show off your innovation, artistry, and
            presentation skills to claim the ultimate design crown! 🏅
          </h3>
        </div>
      </div>

      <div className="cardDetails6 hidden">
        <div className="animated-border-box-glow"></div>
        <div className="animated-border-box">
          <img src={CrossImg} className="cross6" alt="#" />
          <h3 className="text-Detail6">
            Experience the thrill of trading in our unique technologydriven
            event! Compete in teams, answer tech-centric questions to
            strategically boost your share prices, and emerge as the ultimate
            market leader with the highest shares. Let the smartest team win!
          </h3>
        </div>
      </div>

      <div className="cardDetails7 hidden">
        <div className="animated-border-box-glow"></div>
        <div className="animated-border-box">
          <img src={CrossImg} className="cross7" alt="#" />
          <h3 className="text-Detail7">
            Break the Code embark on a pulse-pounding spy-themed mission where
            elite teams of four face off in a race against time. Crack complex
            codes, debug challenging programs, outsmart mind-bending logic
            puzzles, and decrypt hidden messages.
          </h3>
        </div>
      </div>

      <div className="cardDetails8 hidden">
        <div className="animated-border-box-glow"></div>
        <div className="animated-border-box">
          <img src={CrossImg} className="cross8" alt="#" />
          <h3 className="text-Detail8">
            Gear up for CADATHON 2025! Begin with an expert lecture to gain
            insights and sharpen your skills in AutoCAD (2D) and Fusion 360
            (3D). Then, dive into an exciting competition where your creativity
            and innovation will take center stage. Don’t miss this ultimate
            platform to shine!
          </h3>
        </div>
      </div>

      <div className="cardDetails9 hidden">
        <div className="animated-border-box-glow"></div>
        <div className="animated-border-box">
          <img src={CrossImg} className="cross9" alt="#" />
          <h3 className="text-Detail9">
            Google Chase: The Ultimate Treasure Hunt Embark on an adventurous
            campus-wide quest to collect the letters G-O-O-G-L-E by solving tech
            and non-tech challenges at each checkpoint. With immunity pins,
            lucky draws, and bonus cards adding twists, this high-energy
            treasure hunt ensures fun, teamwork, and excitement at every step!
          </h3>
        </div>
      </div>

      <div className="cardDetails10 hidden">
        <div className="animated-border-box-glow"></div>
        <div className="animated-border-box">
          <img src={CrossImg} className="cross10" alt="#" />
          <h3 className="text-Detail10">
            Join CryptoShowdown 2025, the ultimate event for crypto enthusiasts,
            traders, and innovators. Explore bold strategies, cutting-edge
            ideas, and the future of digital finance. Trade dummy currencies to
            make real money
          </h3>
        </div>
      </div>

      <div className="cardDetails11 hidden">
        <div className="animated-border-box-glow"></div>
        <div className="animated-border-box">
          <img src={CrossImg} className="cross11" alt="#" />
          <h3 className="text-Detail11">
            “Empty Epsilon” is a technical event where teams compete in a
            virtual space combat simulator, promoting teamwork, strategy, and
            quick thinking.
          </h3>
        </div>
      </div>

      <div className="cardDetails12 hidden">
        <div className="animated-border-box-glow"></div>
        <div className="animated-border-box">
          <img src={CrossImg} className="cross12" alt="#" />
          <h3 className="text-Detail12">
            The Ultimate VR Experience Dive into a whole new dimension with The
            Ultimate VR Experience! Explore a custom-designed game that combines
            immersive virtual reality with interactive gameplay, offering
            participants a thrilling, cutting-edge adventure like no other!
          </h3>
        </div>
      </div>

      <div className="cardDetails13 hidden">
        <div className="animated-border-box-glow"></div>
        <div className="animated-border-box">
          <img src={CrossImg} className="cross13" alt="#" />
          <h3 className="text-Detail13">Not Given!!!</h3>
        </div>
      </div>
      <div className="cardDetails14 hidden">
        <div className="animated-border-box-glow"></div>
        <div className="animated-border-box">
          <img src={CrossImg} className="cross14" alt="#" />
          <h3 className="text-Detail14">
            Step into the adrenaline-filled event of Box Cricket at PRAKARSH
            2025! Experience the thrill of fastpaced cricket in a compact arena
            where strategy meets action. Gather your team of 5-6 members
            showcase your cricketing skills, and compete for glory in this
            high-energy event. The game will be played with tennis bat and soft
            tennis ball. This event will be conducted in the hall. Get ready to
            hit big, dive for catches, and enjoy the spirit of the game like
            never before.
          </h3>
        </div>
      </div>

      <div className="cardDetails15 hidden">
        <div className="animated-border-box-glow"></div>
        <div className="animated-border-box">
          <img src={CrossImg} className="cross15" alt="#" />
          <h3 className="text-Detail15">
            “Take the Stage, Claim the Title.” Game Description: &quot;Gear up
            for the ultimate showdown in our Valorant Tournament, where strategy
            meets skill in Riot Games’ fast-paced tactical shooter. Compete
            alongside your squad in intense 5v5 battles, showcasing sharp aim,
            clever tactics, and teamwork. Whether you’re a seasoned duelist or a
            strategic sentinel, this is your chance to prove you’re the MVP. Big
            plays, clutch moments, and glory awaits.
          </h3>
        </div>
      </div>

      <div className="cardDetails16 hidden">
        <div className="animated-border-box-glow"></div>
        <div className="animated-border-box">
          <img src={CrossImg} className="cross16" alt="#" />
          <h3 className="text-Detail16">
            “Where Gamers Rise and Champions Rule!” Game Description: An Event
            where you can compete against fellow enthusiasts in exciting Free
            Fire matches and win exciting prizes and cash rewards for your
            skills. Showcase your strategic prowess and tactical abilities.
            Connect with other gaming enthusiasts and forge new friendships.
            Tournament open to all
          </h3>
        </div>
      </div>

      <div className="cardDetails17 hidden">
        <div className="animated-border-box-glow"></div>
        <div className="animated-border-box">
          <img src={CrossImg} className="cross17" alt="#" />
          <h3 className="text-Detail17">
            FUN, BRAIN, SMILE ACTION!! Event Description: GET READY TO BRING
            YOUR A-GAME TO POPCORN QUIZZY, WHERE EVERY QUESTION IS A BLOCKBUSTER
            AND EVERY BUZZ IS A HIT! GATHER YOUR TEAM OF 4 MEMBERS AND BE READY
            FOR FACEOFF. FROM BOLLYWOOD TADKA TO GEEKY MINDS, WE HAVE GOT IT
            ALL. READY TO ACE THE CULTURE TRIVIA OR CRACK THE MYSTERIOUS CLUES
            IN PICTOGRAPHY CHALLENGE? YOU CAN BE THE NEXT QUIZ BADSHAH. DON’T
            MISS OUT-THIS CHANCE TO FLEX YOUR KNOWLEDGE AND WIN THOSE EXTRA
            POINTS! DIL SE JOIN US, BECAUSE YE NAHI KHELA TO PHIR KYA KHELA?
          </h3>
        </div>
      </div>

      <div className="cardDetails18 hidden">
        <div className="animated-border-box-glow"></div>
        <div className="animated-border-box">
          <img src={CrossImg} className="cross18" alt="#" />
          <h3 className="text-Detail18">
            &quot;Think, Bid, Win: Step into the Excitement of IPL Auction
            Strategy!&quot; Event Description: Experience the thrill of cricket
            strategy and team-building at our IPL Auction Challenge! The event
            kicks off with two exciting selection rounds: a Google Form MCQ Quiz
            to test your cricket knowledge and an Audio-Visual Round featuring
            iconic IPL moments. The top 10 teams will then enter the grand
            auction, where participants use a virtual budget to bid for players
            and assemble their dream IPL squad. Evaluations will be done by our
            Smart Evaluation AI System, ensuring a fair and accurate assessment
            of your team&apos;s strength and strategy. With a mix of strategy,
            quick decision-making, and cricket smarts, this event is all about
            proving you&apos;re the ultimate cricket mastermind!
          </h3>
        </div>
      </div>

      <div className="cardDetails19 hidden">
        <div className="animated-border-box-glow"></div>
        <div className="animated-border-box">
          <img src={CrossImg} className="cross19" alt="#" />
          <h3 className="text-Detail19">
            “A treasure hunt to the universe.” Event Description: Get ready for
            &quot;Infinity quest,&quot; an electrifying Marvel-themed treasure
            hunt with an engineering twist! Travel across iconic realms, solving
            puzzles that challenge your general knowledge. Assemble your team,
            test your wit, and channel your inner superhero. The adventure of a
            lifetime awaits—only the sharpest minds will claim the ultimate
            treasure!
          </h3>
        </div>
      </div>

      <div className="cardDetails20 hidden">
        <div className="animated-border-box-glow"></div>
        <div className="animated-border-box">
          <img src={CrossImg} className="cross20" alt="#" />
          <h3 className="text-Detail20">
            Land. Fight. Dominate. The Battleground is Yours! Event Description:
            The battle begins at BGMI, where warriors collide in an intense
            fight for survival! Land, loot, and strategize your way to the top
            in Prakarsh’s most thrilling gaming event. Outplay, outgun, and
            outlast your opponents—only the best will claim victory!
          </h3>
        </div>
      </div>

      <div className="cardDetails21 hidden">
        <div className="animated-border-box-glow"></div>
        <div className="animated-border-box">
          <img src={CrossImg} className="cross21" alt="#" />
          <h3 className="text-Detail21">
            &quot;Face the dark, Escape the maze, Conquer the Mystery&quot;
            Event Description: Step into a world of mystery and darkness thrill
            with Challenges! This non-tech event is designed to test your
            instincts, teamwork, and problem-solving skills. The first round,
            Escape Room Challenge, will challenge your intelligence and presence
            of mind. Those who make it through will enter the Dark Room & Laser
            Maze in the final round, where speed, instincts, and agility will
            determine the ultimate winner. Do you have what it takes to escape
            the darkness?
          </h3>
        </div>
      </div>
    </>
  );
}
