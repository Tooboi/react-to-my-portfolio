import React from 'react';
import background from '../../images/JPjumble2k2.png';
import Project from '../Project'
const projects = [
    {
        id: '',
        image: '',
        title: '',
        link: '',
        repo: ''
    }
]
export default function Portfolio() {
    return (
        <div className='portfolioPage pt-5' style={{ backgroundImage: `url(${background})` }}>
            <h1>Portfolio</h1>
        </div>
    );
}