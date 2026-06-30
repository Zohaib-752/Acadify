import React, { Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation.jsx'
import PageTop from '../components/PageTop/PageTop.jsx'
import Footer from '../components/Footer/Footer.jsx'
import ContactSec from '../components/ContactSec/ContactSec'
import PageTitle from '../components/PageTitle/PageTitle'

const ContactPage = () => {
    return (
        <>
            <TopNavigation />
            <PageTitle pagetitle="Contact" />
            <PageTop pagetitle="Contact" />
            <ContactSec />
            <Footer />
        </>
    )
}

export default ContactPage