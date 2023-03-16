import React from 'react';
import background from '../images/JPjumble2k2.webp';
import UIstyle from '../images/UIstyleGuide.webp';
import SoundByte from '../images/soundByte.webp';
import AfterAfters from '../images/afterAfters.webp';
import GammaUI from '../images/gammaUI.webp';
import MVCtb from '../images/techBlog.webp';
import Weather from '../images/weather.webp';
import Project from '../components/Project'
const projects = [
    {
        id: 1,
        image: UIstyle,
        title: 'UI Style Guide',
        link: 'https://tooboi.github.io/Style-Guide/',
        repo: 'https://github.com/Tooboi/Style-Guide',
        desc: 'Frontend UI style template for choosing colors, font, or random color'
    },
    {
        id: 2,
        image: SoundByte,
        title: 'Sound Byte',
        link: 'https://soundbyte.herokuapp.com/',
        repo: 'https://github.com/JoshuaCarter99/bandshare',
        desc: 'Full stack music sharing app utilizing MySQL, Node, Express, Handlebars, and Cloudinary'
    },
    {
        id: 3,
        image: AfterAfters,
        title: 'After Afters',
        link: 'https://tooboi.github.io/After-Afters/',
        repo: 'https://github.com/Tooboi/After-Afters',
        desc: 'Frontend app that allows the user to find sports or music events in Philly, then find food within a 15 minute walk of the venue'
    },
    {
        id: 4,
        image: GammaUI,
        title: 'Gamma UI',
        link: 'https://tooboi.github.io/Gamma-UI/',
        repo: 'https://github.com/Tooboi/Gamma-UI',
        desc: 'My own css framework for getting apps off the ground quickly with a flat UI'
    },
    {
        id: 5,
        image: MVCtb,
        title: 'MVC Tech Blog',
        link: 'https://tech-blog-2023.herokuapp.com/',
        repo: 'https://github.com/Tooboi/MVC-Tech-Blog',
        desc: 'Full stack MVC tech blog utilizing MySQL, Node, Express, and Handlebars'
    },
    {
        id: 6,
        image: Weather,
        title: 'Weather Dashboard',
        link: 'https://tooboi.github.io/Weather-Dashboard/',
        repo: 'https://github.com/Tooboi/Weather-Dashboard',
        desc: 'Frontend weather app utilizing restful API'
    },
]
export default function Portfolio() {
    return (
        <div className='portfolioPage pt-5 container flex-column align-items-center' style={{ backgroundImage: `url(${background})` }}>
            <h1 className='mt-5 inline-flex justify-content-center glass-2 px-3 select-none'>Recent Projects</h1>
            <Project projects={projects} image={projects.image} title={projects.title} link={projects.link} repo={projects.repo} desc={projects.desc} />
        </div>
    );
}