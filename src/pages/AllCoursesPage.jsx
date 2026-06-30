import React, { Fragment } from 'react'
import AllCoursesSec from '../components/AllCoursesSec/AllCoursesSec'
import TopNavigation from '../components/TopNavigation/TopNavigation.jsx'
import PageTop from '../components/PageTop/PageTop.jsx'
import Footer from '../components/Footer/Footer.jsx'
import PageTitle from '../components/PageTitle/PageTitle'

const AllCoursesPage = () => {
    return (
        <>
            <TopNavigation />
            <PageTitle pagetitle="Courses" />
            <PageTop pagetitle="All Courses" />
            <AllCoursesSec />
            <Footer />
        </>
    )
}

export default AllCoursesPage