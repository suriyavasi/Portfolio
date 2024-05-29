import React,{useRef} from 'react';
import { Element } from 'react-scroll';
import IconButton from '@mui/material/IconButton';
// or
// import { IconButton } from '@mui/material';
import {Instagram,LinkedIn,Facebook,GitHub}  from '@mui/icons-material';
import './contact.css';
import emailjs from '@emailjs/browser';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>


const Contact = () => {
  
    const form = useRef();
   



    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_15s3qg8', 
        'template_alwxs1m', 
        form.current, {
          publicKey: 'S73CunJO4mzKSJBce',
        })
        .then(
          (result) => {
            console.log('SUCCESS!',result.text);
            alert('Successfully submitted');
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        
      
        );
        
    };

  return (
   <Element className='contact' name='Contact'>
    <h1>
        CONTACT ME
    </h1>
    <div className='contact__container'>
    <form ref={form} onSubmit={sendEmail}>
      <label className='name'>Name</label><br></br>
      <input className='input1' id='name'  type="text" name="user_name" /><br></br><br></br>
      <label className='name'>Email</label><br></br>
      <input className="input1" id="email" type="email" name="user_email" /><br></br>
      <label className='m'>Message</label><br></br>
      <textarea className="mess"name="message" /><br></br>
      <input className="input1"type="submit" value="Send" id='submit' onClick={sendEmail}/>
      <input className="reset" type="reset" id="reset"/>
    </form>

  
    <div className='contact_icons'>
            <a href='https://www.linkedin.com/in/suriyakumar-g-7bb125289/'>
                <IconButton>
                   <LinkedIn/>
                </IconButton>
            </a>
            <a href='https://www.facebook.com/profile.php?id=100009293127713'>
                <IconButton>
                   <Facebook/>
                </IconButton>
            </a>
            {/* <a href='https://www.instagram.com/suriyavasi99/'>
                <IconButton>
                   <Instagram/>
                </IconButton>
            </a> */}
            <a href='https://github.com/suriyavasi'>
                <IconButton>
                   <GitHub/>
                </IconButton>
            </a>

</div>

        {/* <p>
            Email : <span>suriyaganesan1999@gmail.com</span>
        </p>
        <p>
GitHub Username : <span>suriyavasi</span>
        </p>
       
        <div className='contact_icons'>
            <a href='https://www.linkedin.com/in/suriyakumar-g-7bb125289/'>
                <IconButton>
                   <LinkedIn/>
                </IconButton>
            </a>
            <a href='https://www.facebook.com/profile.php?id=100009293127713'>
                <IconButton>
                   <Facebook/>
                </IconButton>
            </a>
            <a href='https://www.instagram.com/suriyavasi99/'>
                <IconButton>
                   <Instagram/>
                </IconButton>
            </a>
          

        </div> */}
    </div>
   </Element>
  )
}

export default Contact
