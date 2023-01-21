import React from 'react';
import background from '../../images/JPjumble2k.png';
export default function About() {
  return (
    <div className="aboutPage py-5 px-3" style={{ backgroundImage: `url(${background})` }}>
      <div className="container  glass-2 flex-column my-4 force-v-center py-6 max-width-960">
        <div className="row justify-content-center col-6">
         <h1 className='glass-text mb-4 px-2 text-align-center'>Hey, I'm Josh</h1>  
        </div>
        <div className="row justify-content-center col-6">
         <h2 className='glass-text mb-0 px-2 text-align-center'>I'm a Full Stack Web Developer and 3D Artist</h2>  
        </div>
        <div className="row justify-content-center col-6">
         <h2 className='glass-text mb-0 px-2 text-align-center'>Based in Philadelphia, PA</h2>  
        </div>
      </div>
    </div>
  );
}
