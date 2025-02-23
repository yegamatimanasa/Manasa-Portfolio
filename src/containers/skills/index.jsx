// import { Line } from "rc-progress";
// import React from "react";
// import { BsInfoCircleFill } from "react-icons/bs";
// import { Animate, AnimateKeyframes } from "react-simple-animate";
// import PageHeaderContent from "../../components/pageHeaderContent";
// import { skillsData } from "./utils";
// import './styles.scss';

// const Skills = () => {
//   return (
//     <section id="skills" className="skills">
//       <PageHeaderContent
//         headerText="My Skills"
//         icon={<BsInfoCircleFill size={40} />}
//       />
//       <div className="skills__content-wrapper">
//         {skillsData.map((item, i) => (
//           <div key={i} className="skills__content-wrapper__inner-content">
//             <Animate
//               play
//               duration={1}
//               delay={0.3}
//               start={{
//                 transform: "translateX(-200px)",
//               }}
//               end={{
//                 transform: "translateX(0px)",
//               }}
//             >
//               <h3 className="skills__content-wrapper__inner-content__category-text">
//                 {item.label}
//               </h3>
//               <div className="skills__content-wrapper__inner-content__progressbar-container">
//                 {item.data.map((skillItem, j) => (
//                   <AnimateKeyframes
//                     play
//                     duration={1}
//                     keyframes={["opacity : 1", "opacity : 0"]}
//                     iterationCount="1"
//                   >
//                     <div className="progressbar-wrapper" key={j}>
//                       <p>{skillItem.skillName}</p>
//                       <Line
//                         percent={skillItem.percentage}
//                         strokeWidth="2"
//                         strokeColor="var(--yellow-theme-main-color)"
//                         trailWidth="2"
//                         strokeLinecap="square"
//                       />
//                     </div>
//                   </AnimateKeyframes>
//                 ))}
//               </div>
//             </Animate>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };
// export default Skills;


// import React, { useEffect, useRef } from "react";
// import * as d3 from "d3";
// import { BsInfoCircleFill } from "react-icons/bs";
// import PageHeaderContent from "../../components/pageHeaderContent";
// import { skillsData } from "./utils";
// import "./styles.scss";

// const Skills = () => {
//   const chartRef = useRef();

//   useEffect(() => {
//     // Flatten skills data into one array
//     const allSkills = skillsData
//       .map((category) =>
//         category.data.map((skill) => ({
//           ...skill,
//           category: category.label,
//         }))
//       )
//       .flat();

//     const width = 800;
//     const height = 600;

//     // Create SVG
//     const svg = d3
//       .select(chartRef.current)
//       .attr("width", width)
//       .attr("height", height);

//     // Create simulation
//     const simulation = d3
//       .forceSimulation(allSkills)
//       .force(
//         "center",
//         d3.forceCenter(width / 2, height / 2)
//       ) // Center the cluster
//       .force("charge", d3.forceManyBody().strength(5)) // Slightly repel the nodes
//       .force(
//         "collision",
//         d3.forceCollide().radius((d) => +d.percentage / 2 + 5)
//       );

//     // Create bubbles
//     const bubbles = svg
//       .selectAll(".bubble")
//       .data(allSkills)
//       .enter()
//       .append("g")
//       .attr("class", "bubble");

//     bubbles
//       .append("circle")
//       .attr("r", (d) => +d.percentage / 2) // Radius proportional to percentage
//       .attr("fill", (d, i) =>
//         d3.interpolateCool(i / allSkills.length)
//       ) // Color based on index
//       .attr("stroke", "white")
//       .attr("stroke-width", 2);

//     bubbles
//       .append("text")
//       .attr("text-anchor", "middle")
//       .attr("dy", ".3em")
//       .style("font-size", "12px")
//       .style("fill", "#fff")
//       .text((d) => d.skillName);

//     // Update bubbles on each simulation tick
//     simulation.on("tick", () => {
//       bubbles.attr("transform", (d) => `translate(${d.x}, ${d.y})`);
//     });
//   }, []);

//   return (
//     <section id="skills" className="skills">
//       <PageHeaderContent
//         headerText="My Skills"
//         icon={<BsInfoCircleFill size={40} />}
//       />
//       <div className="skills__content-wrapper">
//         <svg ref={chartRef}></svg>
//       </div>
//     </section>
//   );
// };

// export default Skills;

// import React, { useEffect, useRef } from "react";
// import * as d3 from "d3";
// import { skillsData } from "./utils"; // Import your skills data
// import "./styles.scss";

// const NestedBubbleChart = () => {
//   const chartRef = useRef();

//   useEffect(() => {
//     const width = 800;
//     const height = 800;

//     // Flatten and structure data for hierarchy
//     const structuredData = {
//       name: "Skills",
//       children: skillsData.map((category) => ({
//         name: category.label,
//         children: category.data.map((skill) => ({
//           name: skill.skillName,
//           size: skill.percentage,
//         })),
//       })),
//     };

//     // Create a hierarchical pack layout
//     const root = d3
//       .hierarchy(structuredData)
//       .sum((d) => d.size)
//       .sort((a, b) => b.value - a.value);

//     const pack = d3
//       .pack()
//       .size([width, height])
//       .padding(10);

//     const nodes = pack(root).descendants();

//     // Select and create SVG container
//     const svg = d3
//       .select(chartRef.current)
//       .attr("width", width)
//       .attr("height", height)
//       .append("g")
//       .attr("transform", `translate(${width / 2}, ${height / 2})`);

//     // Add circles for each node
//     const circleGroup = svg
//       .selectAll("circle")
//       .data(nodes)
//       .enter()
//       .append("circle")
//       .attr("class", (d) => (d.children ? "parent" : "child"))
//       .attr("cx", (d) => d.x)
//       .attr("cy", (d) => d.y)
//       .attr("r", (d) => d.r)
//       .attr("fill", (d) =>
//         d.children
//           ? d3.interpolateCool(Math.random())
//           : d3.interpolateRainbow(Math.random())
//       )
//       .attr("stroke", "white")
//       .attr("stroke-width", 2)
//       .attr("opacity", 0.8);

//     // Add text labels for each node
//     svg
//       .selectAll("text")
//       .data(nodes)
//       .enter()
//       .append("text")
//       .attr("x", (d) => d.x)
//       .attr("y", (d) => d.y)
//       .attr("text-anchor", "middle")
//       .attr("dy", ".3em")
//       .style("fill", "#fff")
//       .style("font-size", (d) => (d.children ? "14px" : "10px"))
//       .style("pointer-events", "none")
//       .text((d) => (d.children ? d.data.name : d.data.name));
//   }, []);

//   return (
//     <div className="nested-bubble-chart">
//       <svg ref={chartRef}></svg>
//     </div>
//   );
// };

// export default NestedBubbleChart;







// import React, { useEffect, useRef } from "react";
// import * as d3 from "d3";
// import { skillsData } from "./utils"; // Import updated skillsData with icons
// import "./styles.scss";

// const SkillsWithIcons = () => {
//   const chartRef = useRef();

//   useEffect(() => {
//     const width = 950;
//     const height = 900;


//     // Flatten the skills data to create nodes for D3
//     const allSkills = skillsData.flatMap((category) =>
//       category.data.map((skill) => ({
//         name: skill.skillName,
//         size: parseInt(skill.percentage, 10), // Use percentage as size
//         icon: skill.icon,
//         category: category.label,
//       }))
//     );

//     // Create SVG container
//     const svg = d3
//       .select(chartRef.current)
//       .attr("width", width)
//       .attr("height", height)
//       .append("g")
//       .attr("transform", `translate(${width / 2}, ${height / 2})`);

//     // Create a force simulation for positioning icons
//     const simulation = d3
//       .forceSimulation(allSkills)
//       .force("charge", d3.forceManyBody().strength(5)) // Slight repulsion
//       .force("center", d3.forceCenter(0, 0)) // Center nodes
//       .force(
//         "collision",
//         d3.forceCollide().radius((d) => d.size + 28) // Add extra spacing to prevent overlap
//       )
//       .on("tick", ticked);

//     // Create a group for each skill bubble
//     const skillGroup = svg
//       .selectAll(".skill-group")
//       .data(allSkills)
//       .enter()
//       .append("g")
//       .attr("class", "skill-group");

//     // Add the icons directly, making them fill the "bubble" area
//     skillGroup
//       .append("image")
//       .attr("xlink:href", (d) => d.icon) // Use the icon URL
//       .attr("width", (d) => d.size * 2) // Adjust icon size (diameter)
//       .attr("height", (d) => d.size * 2)
//       .attr("x", (d) => -d.size) // Center horizontally
//       .attr("y", (d) => -d.size); // Center vertically


//     // Add skill names below the icons
//     skillGroup
//       .append("text")
//       .text((d) => d.name)
//       .attr("text-anchor", "middle")
//       .attr("y", (d) => d.size + 10) // Position below the icon
//       .style("font-size","12px")
//       .style("fill", "#fff");

//     // Update positions on each tick
//     function ticked() {
//       skillGroup.attr("transform", (d) => `translate(${d.x}, ${d.y})`);
//     }
//   }, []);

//   return (
//     <div className="skills-with-icons">
//       <svg ref={chartRef}></svg>
//     </div>
//   );
// };

// export default SkillsWithIcons;



import React from "react";
import { skillsData } from "./utils"; // Import skills data with icons
import "./styles.scss";
import PageHeaderContent from "../../components/pageHeaderContent";
import {BsCodeSlash } from "react-icons/bs";

const SkillsWithIcons = () => {
  return (
    <section id="skill" className="skill">
    <PageHeaderContent
      headerText="Skills"
      icon={<BsCodeSlash size={40} />}
     />
    <section id="skills" className="skills">
      <div className="skills-container">
        {skillsData.map((category, index) => (
          <div key={index} className="skills-category">
            <h3 className="category-title">{category.label}</h3>
            <div className="skills-grid">
              {category.data.map((skill, i) => (
                <div key={i} className="skill-item">
                  <img src={skill.icon} alt={skill.skillName} className="skill-icon" />
                  <p className="skill-name">{skill.skillName}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    </section>
  );
};

export default SkillsWithIcons;

