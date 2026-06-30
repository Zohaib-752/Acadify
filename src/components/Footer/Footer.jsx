import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Col, Container, Row } from 'react-bootstrap'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <>
            <Container fluid={true} className='footerSection'>
                <Container>
                    <Row>
                        <Col lg={3} md={6} sm={12} >
                            <h2 className='footerName'>Follow us</h2>
                            <div className="socialContainer">
                                <a href="#" className='social'>
                                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                                </a>
                                <a href="#" className='social'>
                                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                                </a>
                                <a href="#" className='social'>
                                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                                </a>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12} >
                            <h2 className="footerName">Address </h2>
                            <p className='footerDescription'>123 Main Street, Anytown, NY 12401 <br></br>
                                <FontAwesomeIcon icon={faEnvelope} /> Email : abc@example.com<br></br>
                                <FontAwesomeIcon icon={faPhone} /> Phone : 03000000000<br></br>
                            </p>
                        </Col>
                        <Col lg={3} md={6} sm={12} >
                            <h2 className='footerName'>Information</h2>
                            <a className='footerLink' href="#">About Me</a><br></br>
                            <a className='footerLink' href="#">Company Profile</a><br></br>
                            <a className='footerLink' href="#">Contact Us</a><br></br>
                        </Col>
                        <Col lg={3} md={6} sm={12} >
                            <h2 className='footerName'>Policy</h2>
                            <a className='footerLink' href="#">Refund Policy</a><br></br>
                            <a className='footerLink' href="#">Terms and Condition</a><br></br>
                            <a className='footerLink' href="#">Privacy Policy</a><br></br>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid={true} className="text-center copyrightSection">
                <a className="copyrightlink" href="#">© Copyright 2009-2026 by Devox, All Rights Reserved</a>
            </Container>
        </>
    )
}

export default Footer
