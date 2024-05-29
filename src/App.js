import React from 'react';
import Header from './components/Header';
import Topcontainer from './components/Topcontainer/topcontainer.js';
import Skillcontainer from './components/Skillcontainer/skillcontainer.js';
import ProjectContainer from './components/ProjectContainer/projectcontainer.js';
import Experience from './components/Experience/expericence.js';
import Contact from './components/Contact/contact.js';
import "./App.css";


const App = () => {
  return (
    <div>
        <Header/>
        <Topcontainer/>
        <Skillcontainer/>
        <ProjectContainer/>
        <Experience/>
        <Contact/>


    </div>
  )
}

export default App
