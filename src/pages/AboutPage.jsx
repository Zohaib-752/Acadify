import React from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import AboutMe from '../components/AboutMe/AboutMe'
import AboutDescription from '../components/AboutDescription/AboutDescription'
import PageTitle from '../components/PageTitle/PageTitle'

const AboutPage = () => {
    return (
        <>
            <TopNavigation />
            <PageTitle pagetitle="About" />
            <PageTop pagetitle="About" />
            <AboutDescription />
            <AboutMe />
            <Footer />
        </>
    )
}

export default AboutPage
