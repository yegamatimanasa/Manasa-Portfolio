// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Animate } from "react-simple-animate";
// import "./styles.scss";

// const Home = () => {
//   const navigate = useNavigate();

//   const handleNavigateToContactMePage = () => {
//     navigate("/contact");
//   };

//   return (
//     <section id="home" className="home">
//       <div className="home__text-wrapper">
//         <h1>
//           Hello!
//           <br />
//           I'm Manasa
//         </h1>
//       </div>
//       <Animate
//         play
//         duration={1.5}
//         delay={1}
//         start={{
//           transform: "translateY(550px)",
//         }}
//         end={{
//           transform: "translatex(0px)",
//         }}
//       >
//         <div className="home__contact-me">
//           <button onClick={handleNavigateToContactMePage}>Hire Me</button>
//         </div>
//       </Animate>
//     </section>
//   );
// };
// export default Home;

import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Home = () => {

  const handleNavigateToContactMePage = () => {
    window.open("/ManasaYegamati_Resume.pdf", "_blank");
  };

  return (
    <section id="home" className="home">
      <div className="home__content-wrapper">
        <div className="home__text-wrapper">
          <h1>
            Hello! <span role="img" aria-label="wave"><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Woman%20Raising%20Hand.png" alt="Woman Raising Hand" width="70" height="70" /></span>
            <br />
            I'm<span className="name">Manasa</span>
          </h1>
          <p className="description">
            A passionate <i>Software Engineer </i>  focused on building scalable, efficient, and user-friendly applications. With a blend of industry experience and academic knowledge, I enjoy solving complex challenges and creating impactful solutions that stand out.
          </p>
          <p className="description">
            Let’s collaborate to bring innovative ideas to life and create solutions that leave a lasting impact!
          </p>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateY(550px)" }}
            end={{ transform: "translatex(0px)" }}
          >
            <div className="home__contact-me">
              <button onClick={handleNavigateToContactMePage}>Resume</button>
            </div>
          </Animate>
        </div>
        {/* Placeholder for an image or avatar */}
        <div className="home__avatar-wrapper">
          <img src="/mylogo-removebg-preview (1).png" alt="Avatar" />
        </div>
      </div>
    </section>
  );
};

export default Home;
