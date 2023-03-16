import React from 'react';
import background from '../images/JPjumble2k4.webp';
import pdf from '../images/ResumeFAKE.pdf';
import { ReactComponent as Download } from '../images/file-pdf-solid.svg';


export default function Resume() {
  return (
    <div className="resumePage pt-5 container flex-column align-items-center" style={{ backgroundImage: `url(${background})` }}>
      <h1 className="m-5 inline-flex justify-content-center glass-text header-font px-3 select-none">Resume<a href={pdf} target='_blank' rel="noreferrer" className='pdf-icon pb-0 ms-2 mt-1'>
            <Download/>
            </a></h1>
      <div className="glass-2 p-4 row inline-flex justify-content-center">
        <div className="p-2 px-5 mx-2 container align-items-start flex-column">
            <h2>Front-end</h2>
            <ul>
                <li><b>HTML</b></li>
                <li><b>CSS</b></li>
                <li><b>JavaScript</b></li>
                <li><b>JQuery</b></li>
                <li><b>SASS</b></li>
                <li><b>React</b></li>
                <li><b>Bootstrap</b></li>
            </ul>
            <h2>Back-end</h2>
            <ul>
                <li><b>APIs</b></li>
                <li><b>Node</b></li>
                <li><b>MySQL, Sequelize</b></li>
                <li><b>MongoDB, Mongoose</b></li>
                <li><b>Express</b></li>
            </ul>
            
        </div>
      </div>
      
    </div>
  );
}
