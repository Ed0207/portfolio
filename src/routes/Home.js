import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';

function Home(){
    return(
    <div className='Home'>
        <Navbar name="Edward's Portfolio"></Navbar>
        <Hero text="Work in progress.. (~20% complete)"></Hero>
        <AboutMe></AboutMe>
        <ProjectCard></ProjectCard>
        <Footer></Footer>
    </div>)
}

export default Home;