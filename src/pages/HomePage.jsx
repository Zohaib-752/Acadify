import React from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Service from '../components/Service/Service'
import Analysis from '../components/Analysis/Analysis';
import Summary from '../components/Summary/Summary';
import Courses from '../components/Courses/Courses';
import Video from '../components/Video/Video';
import RecentProject from '../components/RecentProject/RecentProject';
import AboutMe from '../components/AboutMe/AboutMe';
import Footer from '../components/Footer/Footer';
import ClientReview from '../components/ClientReview/ClientReview';
import Welcome from '../components/Welcome/Welcome';
import TopBanner from '../components/TopBanner/TopBanner';
import PageTitle from '../components/PageTitle/PageTitle';


const HomePage = () => {
    return (
        <>
            <TopNavigation />
            <PageTitle pagetitle="Home" />
            <TopBanner />
            <Welcome />
            <Service />
            <Analysis />
            <Summary />
            <Courses />
            <Video />
            <RecentProject />
            <ClientReview />
            <AboutMe />
            <Footer />
        </>
    )
}

export default HomePage