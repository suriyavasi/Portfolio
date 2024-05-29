import React from 'react';
import { Element } from 'react-scroll';
import Project from '../Project/Project.js';
import '../Project/Project.css';
import Weather from '../../assets/weatherScreenshot .png';
// import onepiece from '../../assets/onepiece.jpg';
// import project from '../../assets/Project.png';
import portfolio from '../../assets/portfolio.png';
// import project2 from '../../assets/project2.png';
import "./projectcontainer.css"

const ProjectContainer = () => {

   const projects =[

  //   {
  //     image:[project],
  //     title:"FILTER",
  //     desc:"Html,Css is used in this page",
  //     link:"https://github.com/suriyavasi/project1"
  //  },
   {
    image:[Weather],
    title:'Weather',
    desc:' Developed a dynamic weather application using React.js to provide real-time weather information based on user location ,Integrated with the OpenWeatherMap API to fetch and display real-time weather information ,including temperature, humidity, wind speed, and weather conditions.Technologies Used: Frontend: React.js, HTML5, CSS, JavaScript Styling: CSS Modules APIs: OpenWeatherMap API  Version Control: GitHub ',
    link:"https://github.com/suriyavasi/analog-clock"
 },
//  {
//   image:[project2],
//   title:"FOOD SHOP",
//   desc:"This food shop page is creacted based on FONT-END",
//   link:"https://github.com/suriyavasi/project2"
// },
   {
    image:[portfolio],
    title:"PORTFOLIO",
    desc:"Developed a dynamic weather application using React.js to provide real-time weather information based on user location  Technologies UsedFrontend: React.js, HTML5, CSS, JavaScriptStyling: CSS ModulesRouting: React RouterState Management: React Hooks, ReduxVersion Control: GitHub",
    link:"https://github.com/suriyavasi/portfolio"
 },
 


 
  
   ]

  return (
    <Element className='projectcontainer' name="Project">
       <h1>PROJECT</h1>

       <p>Welcome to my React.js project! This project demonstrates the power and flexibility of React.js in building modern web applications. It includes various features and components that showcase efficient state management, dynamic rendering , By clicking image you will re-direct to <span>GitHub</span> </p>

        <div className='projectcontainer__projects'>
            {
              projects.map((project,index)=>{
                return(
          
                  <Project
                   key={index}
                  image={project.image}
                  title={project.title}
                  desc={project.desc}
                  link={project.link}

                  />
                
                )
              })
            }
        </div>
    </Element>
  )
}

export default ProjectContainer
