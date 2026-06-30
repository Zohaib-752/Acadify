import React, { Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation.jsx'
import PageTop from '../components/PageTop/PageTop.jsx'
import Footer from '../components/Footer/Footer.jsx'
import AllProject from '../components/AllProject/AllProject.jsx'
import PageTitle from '../components/PageTitle/PageTitle'

const PortfolioPage = () => {
    return (
        <Fragment>
            <TopNavigation />
            <PageTitle pagetitle="Portfolio" />
            <PageTop pagetitle="Our Projects" />
            <AllProject />
            <Footer />
        </Fragment>
    )
}

export default PortfolioPage