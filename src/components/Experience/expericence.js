import React from 'react';
import { Element } from 'react-scroll';
import Experiencebox from '../ExperienceBox/experiencebox.js';
import './experience.css';

const expericence = () => {
  return (
    <Element className='expericencecontainer' name="Experience" >
        <h1>
            EXPERIENCE
        </h1>
        <div className='experiencesquare'>
            <Experiencebox number='1+' title='Years trainee' style={{backgroundColor:" rgb(231, 235, 14)"}}/>
            <Experiencebox number='6+' title='Months webdeveloper'/>
        </div>
    </Element>
  )
}

export default expericence
