import React from 'react'
import { About, Contact, Skills, Hero, Project, Service, GitContribution } from '../components/Components_Import'
import "../assets/css/Navbar.css"

const Home = () => {
    return (
        <div className='Home-container'>
                
            {/* Hero Section */}
            <section id='HERO' className='Home-section'>
                <Hero />
            </section>

            <section id='GIT_CONTRIBUTION' className='Home-section'>
                <GitContribution />
            </section>

            {/* About Section */}
            <section id='ABOUT' className='Home-section'>
                <About />
            </section>

            {/* Service Section */}
            {/* <section id='ABOUT' className='Home-section'>
                <Service />
            </section> */}


            {/* Skills Section */}
            <section id='SKILLS' className='Home-section'>
                <Skills />
            </section>


            {/* Project Section */}
            <section id='PROJECTS' className='Home-section'>
                <Project />
            </section>


            {/* Contact Section */}
            <section id='CONTACT' className='Home-section'>
                <Contact />
            </section>


        </div>
    )
}

export default Home