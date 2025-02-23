import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsFillPersonFill } from "react-icons/bs";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css'
import { data } from "./utils";
import './styles.scss';
import {MdWork} from 'react-icons/md';
import { Animate } from "react-simple-animate";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";



const Resume = () => {

  const formatTextWithItalics = (text) => {
    return text.split(/(".*?")/g).map((part, index) =>
      part.startsWith('"') && part.endsWith('"') ? (
        <em key={index} style={{ color: "yellowgreen" }}>{part.replace(/"/g, '')}</em>
      ) : (
        part
      )
    );
  };
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsFillPersonFill size={40} />}
      />

     <section id="about" className="about">
      <div className="about__content">
        <div className="about__content__personalWrapper">
        <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            
        <p>
        {data.about[0].description} 
        </p>
        </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var( --yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>

      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Experience</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
            
            {data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: 'none',
                  color : 'var(--yellow-theme-sub-text-color)',
                 
                }}
                //date="2020 - Present"
                icon={<MdWork/>}
                iconStyle={{
                  background : '#181818',
                  color : 'var(--yellow-theme-main-color)',

                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h2>
                    {item.title}
                  </h2>

                  <h6>
                    {item.subTitle}
                  </h6>
                  <h6>{item.duration}</h6>
                </div>
                <p className="vertical-timeline-element-title-wrapper-description">
                {formatTextWithItalics(item.description) }</p>

              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="timeline__education">
          <h3 className="timeline__education__header-text">Education</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
          {data.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: 'none',
                  color : 'var(--yellow-theme-sub-text-color)',
                
                }}
                icon={<MdWork/>}
                iconStyle={{
                  background : '#181818',
                  color : 'var(--yellow-theme-main-color)',

                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h2>
                    {item.title}
                  </h2>

                  <h6>
                    {item.subTitle}
                  </h6>
                  <h6>{item.duration}</h6>
                </div>
                <p className="vertical-timeline-element-title-wrapper-description">
                {item.description?.modules ? (
    <>
      <span>Coursework:</span>
      <ul>
        {item.description.modules.map((module, index) => (
          <li key={index}>{module}</li>
        ))}
      </ul>
    </>
  ) : (
    <p>{item.description || "No description available"}</p> // Default value if missing
  )} 
                  </p>

              </VerticalTimelineElement>
            ))}
            </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};
export default Resume;
