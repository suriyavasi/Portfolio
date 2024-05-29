import React from 'react';
import { Element } from 'react-scroll';
import Topcontent from '../Topcontent/topcontent';
import "./topcontainer.css";



const topcontainer = () => {
  return (
    <div>
      <Element name='About' className='Topcontainer'>
        <Topcontent/>
      </Element>
    </div>
  )
}

export default topcontainer
