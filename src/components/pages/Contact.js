import React from 'react';
import background from '../../images/JPjumble2k3.png';
export default function Contact() {
    return (
        <div className='contactPage pt-5' style={{ backgroundImage: `url(${background})` }}>
            <h1 className='mt-4 inline-flex justify-content-center glass-2 px-3 select-none'>Contact</h1>
        </div>
    );
}