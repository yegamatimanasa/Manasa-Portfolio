import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsFillBriefcaseFill} from "react-icons/bs";
import crop from "../../images/crop.jpg";
import GGEC from "../../images/GGEC.jpg"
import ColdStorage from "../../images/ColdStorage.jpg";
import Bus from "../../images/Bus.jpg";
import bookStore from "../../images/bookstore.jpg";
import calculator from "../../images/calculator.jpg";
import rice from "../../images/rice.jpg";
import eye from "../../images/eye.jpg";
import mosquito from "../../images/mosquito.jpg";
import "./styles.scss";
import { useState,useEffect } from "react";

const portfolioData = [
  {
    id: 1,
    name: "GeoCropAI",
    project: "Full Stack Application ",
    description: "GeoCropAI is a web-based tool that helps farmers and agricultural experts determine the best crops to plant based on geographical data. By analyzing location, soil properties, and environmental factors, the system provides tailored crop recommendations to optimize yield and sustainability.",
    image: crop,
    github: "https://github.com/yegamatimanasa/GeoCropAI",
  },
  {
    id: 2,
    name: "Greenhouse Gas Emission Calculator",
    project: "Full Stack Application ",
    description: "A web-based tool that helps individuals and businesses estimate their greenhouse gas (GHG) emissions. By inputting data such as energy usage, transportation, and waste production, users can calculate their carbon footprint and explore strategies to reduce emissions.",
    image: GGEC ,
    github: "https://github.com/yegamatimanasa/Greenhouse-Gas-Emission_Calculator",
  },

  {
    id: 3,
    name: "Online Book Store",
    project: "Full Stack Application ",
    description: "A comprehensive web application where users can search, purchase, and access books online with detailed descriptions, author information, and publication dates. Designed with a seamless user experience and secure transactions, it provides a fully functional digital bookstore for book lovers.",
    image: bookStore,
    github: "https://github.com/yegamatimanasa/OnlineBookStore",
  },
  {
    id: 4,
    name: "Travel Agency - BUS Ticket Booking",
    project: "Full Stack Application ",
    description: "A real-time ticket reservation platform with secure payments and instant booking confirmations via email and SMS. Admins manage bus details and schedules, ensuring a seamless travel experience.",
    image: Bus,
    github: "https://github.com/yegamatimanasa/ColdStorageManagementSystem",
  },
  {
    id: 5,
    name: "Cold Storage Management System",
    project: "Full Stack Application ",
    description: "A smart storage rental platform that allows users to reserve temperature-controlled units based on their specific requirements. Featuring multiple temperature zones, it ensures optimal preservation for various goods. Admins manage and update storage units, providing an efficient and scalable solution for seamless cold storage operations.",
    image: ColdStorage,
    github: "https://github.com/yegamatimanasa/ColdStorageManagementSystem",
  },

  {
    id: 6,
    name: "Scientific Calculator",
    project: "Web App ",
    description: "A powerful web-based calculator for arithmetic, trigonometry, logarithms, and advanced functions. Designed for accuracy and efficiency, it provides a seamless and intuitive math-solving experience.",
    image: calculator,
    github: "https://github.com/yegamatimanasa/Scientific-Calculator",
  },

  {
    id: 7,
    name: "Rice Image Classification",
    project: "Machine Learning Model",
    description: "This project employs CNNs, ANNs, and DNNs to classify five rice varieties with high precision. Trained on 75,000 images, the CNN model achieved 100% accuracy, showcasing its ability to analyze morphological, shape, and color features for precise classification.",
    image: rice,
    github: "https://github.com/yegamatimanasa/Rice-Image-Classification-CNN",
  },
  {
    id: 8,
    name: "Smart Eye Movement Detection",
    project: "Machine Learning Model",
    description: "This project utilizes Convolutional Neural Networks (CNNs) to accurately classify different mosquito species based on images captured on human skin. By leveraging deep learning, it enhances vector surveillance, aiding in disease prevention and ecological studies. ",
    image: eye,
    github: "https://github.com/yegamatimanasa/Eye-Detection-using-CNN",
  },
  {
    id: 9,
    name: "Masquito Species Classification",
    project: "Machine Learning Model",
    description: "This project leverages the power of Convolutional Neural Networks (CNNs) to accurately classify different mosquito species based on images captured on human skin. By analyzing visual patterns and features, the model enhances species identification, which is crucial for vector-borne disease prevention and ecological studies.",
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
