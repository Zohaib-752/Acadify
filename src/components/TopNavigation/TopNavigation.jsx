import React, { useState, useEffect } from 'react'
import '../../assets/css/bootstrap.min.css'
import '../../assets/css/custom.css'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


const TopNavigation = () => {

    const [navBar, setNavbar] = useState({
        navBarBack: 'navBackground',
        navBarTitle: 'navTitle',
        navBarItem: 'navItem',
        navBarVariant: 'dark'

    })

    const OnScroll = () => {
        if (window.scrollY > 100) {
            setNavbar(prev => ({
                ...prev,
                navBarBack: 'navBackgroundScroll',
                navBarTitle: 'navTitleScroll',
                navBarItem: 'navItemScroll',
                navBarVariant: 'light'
            }))
        } else if (window.scrollY < 100) {
            setNavbar(prev => ({
                ...prev,
                navBarBack: 'navBackground',
                navBarTitle: 'navTitle',
                navBarItem: 'navItem',
                navBarVariant: 'dark'
            }))
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', OnScroll)

        return () => {
            window.removeEventListener('scroll', OnScroll)
        }
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])




    return (
        <>
            <Navbar expand="lg" className={navBar.navBarBack} fixed='top' variant={navBar.navBarVariant}>
                <Container>
                    <Navbar.Brand href="#home" className={navBar.navBarTitle}>Acadify</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbarToggler' />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link><NavLink to="/" className={({ isActive }) => isActive ? 'navLinkActive' : navBar.navBarItem}>Home</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/service" className={({ isActive }) => isActive ? 'navLinkActive' : navBar.navBarItem}>Services</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/about" className={({ isActive }) => isActive ? 'navLinkActive' : navBar.navBarItem}>About</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/portfolio" className={({ isActive }) => isActive ? 'navLinkActive' : navBar.navBarItem}>PortFolio</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/courses" className={({ isActive }) => isActive ? 'navLinkActive' : navBar.navBarItem}>Courses</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/contact" className={({ isActive }) => isActive ? 'navLinkActive' : navBar.navBarItem}>Contact</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default TopNavigation