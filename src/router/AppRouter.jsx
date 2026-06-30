import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import ServicePage from '../pages/AllServicesPage'
import PortfolioPage from '../pages/PortfolioPage'
import AllCoursesPage from '../pages/AllCoursesPage'

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<AllCoursesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
    )
}

export default AppRouter