import React from 'react';
import background from '../../images/JPjumble2k2.png';
import UIstyle from '../../images/UIstyleGuide.gif';
import Project from '../Project'
const projects = [
    {
        id: 1,
        image: UIstyle,
        title: 'First Project',
        link: '',
        repo: ''
    },
    {
        id: 2,
        image: '',
        title: 'Second Project',
        link: '',
        repo: ''
    },
    {
        id: 3,
        image: '',
        title: 'Third Project',
        link: '',
        repo: ''
    },
    {
        id: 4,
        image: '',
        title: 'Fourth Project',
        link: '',
        repo: ''
    },
    {
        id: 5,
        image: '',
        title: 'Fifth Project',
        link: '',
        repo: ''
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