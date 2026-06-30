import React from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation.jsx'
import PageTop from '../components/PageTop/PageTop.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Service from '../components/Service/Service.jsx'
import ContactSec from '../components/ContactSec/ContactSec.jsx'
import PageTitle from '../components/PageTitle/PageTitle'

const AllServicesPage = () => {
    return (
        <>
            <TopNavigation />
            <PageTitle pagetitle="Services" />
            <PageTop pagetitle="Services" />
            <Service />
            <ContactSec />
            <Footer />
        </>
    )
}

export default AllServicesPage