import React from 'react';
import { Link } from 'react-scroll';
import "./topcontent.css";
import resume from "../../assets/Suriya_Frontend-Developer_Resume - Copy.pdf";
const topcontent = () => {
  return (
    <div className='topcontent'>
        <div className='topcontent__container'>
              <h1>Suriya Kumar</h1> 
              <p>A Professional Web Developer</p>
              <a href={resume} download={resume}>
                <button className='topcontent_download'>
                    Download CV
                </button>
              </a>
              
              <Link to='project' smooth={true} duration={500}>
                  <button className='topcontent__mywork'>My Work</button>
              </Link>
        </div>
      
    </div>
  )
}

export default topcontent
