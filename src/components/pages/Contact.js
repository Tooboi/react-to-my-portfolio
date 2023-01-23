import React from 'react';
import background from '../../images/JPjumble2k3.png';
export default function Contact() {
  return (
    <div className="contactPage pt-5 container flex-column align-items-center" style={{ backgroundImage: `url(${background})` }}>
      <h1 className="m-5 inline-flex justify-content-center glass-2 px-3 select-none">Contact Me</h1>
      <div className="glass-2 p-4 row inline-flex justify-content-center">
        <div class="justify-content-center">
          <div class="p-2 mx-2 justify-content-space-evenly">
           <form>
            <div className='row'>
                <label for='name' className='mb-0'>Name</label>
                <input id='name' placeholder='Elfo'></input>
            </div>
                
           </form>
          </div>
        </div>
      </div>
    </div>
  );
}
