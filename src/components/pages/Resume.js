import React from 'react';
import background from '../../images/JPjumble2k4.png';
export default function Resume() {
    return (
        <div className='resumePage pt-5' style={{ backgroundImage: `url(${background})` }}>
            <h1 className='mt-4 inline-flex justify-content-center glass-2 px-3 select-none'>Resume</h1>
        </div>
    );
}