import React from 'react';
import { ReactComponent as Github } from '../images/github.svg';
import { ReactComponent as LinkedIn } from '../images/linkedin.svg';
import { ReactComponent as Insta } from '../images/insta.svg';
export default function Footer() {
    return (
    <div className='footer pb-1'>
        <a href='https://www.instagram.com/gamma2dot2/'>
           <Insta/>
        </a>
        <a href='https://github.com/Tooboi'>
           <Github/> 
        </a>
        <a href='https://www.linkedin.com/in/joshua-pica-4194111b5/'>
            <LinkedIn/> 
        </a>
        
    </div>
      
    )
}