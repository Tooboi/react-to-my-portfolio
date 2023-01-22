import React from 'react';
import background from '../../images/JPjumble2k2.png';
import UIstyle from '../../images/UIstyleGuide.png';
import SoundByte from '../../images/soundByte.png';
import AfterAfters from '../../images/afterAfters.png';
import GammaUI from '../../images/gammaUI.png';
import MVCtb from '../../images/techBlog.png';
import Project from '../Project'
const projects = [
    {
        id: 1,
        image: UIstyle,
        title: 'UI Style Guide',
        link: 'https://tooboi.github.io/Style-Guide/',
        repo: 'https://github.com/Tooboi/Style-Guide'
    },
    {
        id: 2,
        image: SoundByte,
        title: 'Sound Byte',
        link: 'https://soundbyte.herokuapp.com/',
        repo: 'https://github.com/JoshuaCarter99/bandshare'
    },
    {
        id: 3,
        image: AfterAfters,
        title: 'After Afters',
        link: 'https://tooboi.github.io/After-Afters/',
        repo: 'https://github.com/Tooboi/After-Afters'
    },
    {
        id: 4,
        image: GammaUI,
        title: 'Gamma UI',
        link: 'https://tooboi.github.io/Gamma-UI/',
        repo: 'https://github.com/Tooboi/Gamma-UI'
    },
    {
        id: 5,
        image: MVCtb,
        title: 'MVC Tech Blog',
        link: 'https://tech-blog-2023.herokuapp.com/',
        repo: 'https://github.com/Tooboi/MVC-Tech-Blog'
    },
    {
        id: 6,
        image: '',
        title: 'Sixth Project',
        link: '',
        repo: ''
    },
]
export default function Portfolio() {
    return (
        <div className='portfolioPage pt-5' style={{ backgroundImage: `url(${background})` }}>
            <h1>Portfolio</h1>
            <Project projects={projects} image={projects.image} title={projects.title} link={projects.link} repo={projects.repo} />
        </div>
    );
}