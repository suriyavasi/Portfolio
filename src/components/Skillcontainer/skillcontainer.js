import React from 'react';
import { Element } from 'react-scroll';
import office from '../../assets/office.jpg';
import './skillcontainer.css';
import LinearProgress from "@mui/material/LinearProgress"

const Skillcontainer = () => {
  return (
    <Element className='skillcontainer' name="Skills">
        <div className='skillcontainer__image'>
            <img src={office} alt='img not found'/>
        </div>

        <div className='skillcontainer__text'>
            <h2>SKILLSET</h2>

            <div className='skillcontainer__skillset'>
                <h5>REACT</h5>
                <div className='skillcontainer__slider skillcontainer__slider1'>
                  <LinearProgress variant='determinate' value={90}/>   
                </div>
            </div>

            <div className='skillcontainer__skillset'>
                <h5>JAVASCRIPT</h5>
                <div className='skillcontainer__slider skillcontainer__slider2'>
                  <LinearProgress variant='determinate' value={70}/>   
                </div>
            </div>

            <div className='skillcontainer__skillset'>
                <h5>HTML</h5>
                <div className='skillcontainer__slider skillcontainer__slider3'>
                  <LinearProgress variant='determinate' value={80}/>   
                </div>
            </div>

            <div className='skillcontainer__skillset'>
                <h5>CSS</h5>
                <div className='skillcontainer__slider skillcontainer__slider4'>
                  <LinearProgress variant='determinate' value={80}/>   
                </div>
            </div>

            <div className='skillcontainer__skillset'>
                <h5>BOOTSTRAP</h5>
                <div className='skillcontainer__slider skillcontainer__slider5'>
                  <LinearProgress variant='determinate' value={80}/>   
                </div>
            </div>
        </div>
    </Element>
  )
}

export default Skillcontainer
