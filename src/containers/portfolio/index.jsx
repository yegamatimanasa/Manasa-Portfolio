import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsFillBriefcaseFill} from "react-icons/bs";
import crop from "../../images/crop.jpg";
import weathertracker from "../../images/weathertracker.jpg";
import GGEC from "../../images/GGEC.jpg"
import coldS from "../../images/coldS.jpg";
import Bus from "../../images/Bus.jpg";
import bookStore from "../../images/bookstore.jpg";
import rice from "../../images/rice.jpg";
import eye from "../../images/eye.jpg";
import mosquito from "../../images/mosquito.jpg";
import calc from "../../images/calc.jpg";
import "./styles.scss";
import { useState,useEffect } from "react";

const portfolioData = [
  {
    id: 1,
    name: "GeoCropAI",
    project: "Full Stack Application ",
    description: "GeoCropAI is a web tool that analyzes geographical and environmental data to recommend optimal crops, helping farmers maximize yield and sustainability.",
    image: crop,
    github: "https://github.com/yegamatimanasa/GeoCropAI",
  },
  {
    id: 2,
    name: "Weather Tracker",
    project: "Full Stack Application ",
    description: " A real-time weather app built with React, Vite, and OpenWeather API, featuring dynamic video backgrounds, live forecasts, and air quality insights for an immersive and responsive user experience.",
    image: weathertracker ,
    github: "https://github.com/yegamatimanasa/Weather-Tracker",
  },

  {
    id: 3,
    name: "Greenhouse Gas Emission Calculator",
    project: "Full Stack Application ",
    description: "A web tool for estimating GHG emissions based on energy use, transport, and waste, helping users track and reduce their carbon footprint.",
    image: GGEC ,
    github: "https://github.com/yegamatimanasa/Greenhouse-Gas-Emission_Calculator",
  },

  {
    id: 4,
    name: "Online Book Store",
    project: "Full Stack Application ",
    description: "A seamless online bookstore where users can search, buy, and access books with detailed information and secure transactions.",
    image: bookStore,
    github: "https://github.com/yegamatimanasa/OnlineBookStore",
  },
  {
    id: 5,
    name: "Travel Agency",
    project: "Full Stack Application ",
    description: "A real-time ticket reservation platform with secure payments and instant booking confirmations via email and SMS. Admins manage bus details and schedules, ensuring a seamless travel experience.",
    image: Bus,
    github: "https://github.com/yegamatimanasa/ColdStorageManagementSystem",
  },
  {
    id: 6,
    name: "Cold Storage Management System",
    project: "Full Stack Application ",
    description: "A Smart Cold Storage rental platform with multiple temperature zones for optimal preservation. Users reserve units as needed, while admins manage and update storage seamlessly.",
    image: coldS,
    github: "https://github.com/yegamatimanasa/ColdStorageManagementSystem",
  },

  {
    id: 7,
    name: "Scientific Calculator",
    project: "Web App ",
    description: "A powerful web-based calculator for arithmetic, trigonometry, logarithms, and advanced functions. Designed for accuracy and efficiency, it provides a seamless and intuitive math-solving experience.",
    image: calc,
    github: "https://github.com/yegamatimanasa/Scientific-Calculator",
  },

  {
    id: 8,
    name: "Rice Image Classification",
    project: "Machine Learning Model",
    description: "This project utilizes CNNs, ANNs, and DNNs to classify five rice varieties with 100% accuracy, analyzing morphological, shape, and color features from 75,000 images.",
    image: rice,
    github: "https://github.com/yegamatimanasa/Rice-Image-Classification-CNN",
  },
  {
    id: 9,
    name: "Smart Eye Movement Detection",
    project: "Machine Learning Model",
    description: "This project utilizes CNN to accurately classify different mosquito species based on images captured on human skin. By leveraging deep learning, it enhances vector surveillance, aiding in disease prevention and ecological studies. ",
    image: eye,
    github: "https://github.com/yegamatimanasa/Eye-Detection-using-CNN",
  },
  {
    id: 10,
    name: "Masquito Species Classification",
    project: "Machine Learning Model",
    description: "This project utilizes CNN to classify mosquito species from images captured on human skin. By analyzing unique visual patterns, the model enhances species identification, supporting vector-borne disease prevention and ecological research.",
    image: mosquito,
    github: "https://github.com/yegamatimanasa/Mosquito-Species-Classification-CNN",
  },

];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Developement",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);
  const [showToast, setShowToast] = useState(false);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }


  function handleOpenLink(url) {
    window.open(url, "_blank", "noopener,noreferrer");
    setShowToast(true);
    
    if (Notification.permission === "granted") {
      new Notification("Come back to your portfolio!", {
        body: "Click here to return.",
        icon: "/your-logo.png",
      });
    }
  }

  useEffect(() => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  }, []);

  

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsFillBriefcaseFill size={40} />}
      />
      <div className="portfolio__content">
        {/* <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul> */}
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <h1>{item.name}</h1>
                    <h3><i>{item.project}</i></h3>
                    <p>{item.description}</p>
                    <button onClick={() => handleOpenLink(item.github)}>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
