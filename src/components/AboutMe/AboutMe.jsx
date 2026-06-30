import React, { useEffect, useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { init } from 'ityped'


const AboutMe = () => {

    const initialized = useRef(false);

    useEffect(() => {
        if (initialized.current) return;

        initialized.current = true;

        init(document.querySelector('#myElement'), {
            showCursor: false,
            strings: ['Web Developer']
        });
    }, []);

    return (
        <>
            <Container className='mb-5'>
                <h1 className="servicesMainTitle text-center">ABOUT ME</h1>
                <div className="bottom"></div>
                <Row>
                    <Col lg={6} md={12} sm={12} className="d-flex justify-content-center align-items-center mb-5 mb-lg-0">
                        <div className='aboutMeImage'>
                            <img className='aboutImg' src="https://www.shutterstock.com/image-vector/confident-man-pointing-himself-big-600nw-2278018055.jpg" alt="aboutMe" />
                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={12} className="d-flex align-items-center justify-content-center justify-content-lg-start text-center text-lg-start">
                        <div className='aboutBody'>
                            <h2 className="aboutMeDetails">HI There, I'm</h2>
                            <h2 className="aboutMeTitle">Zohaib Zikar</h2>
                            <h3 className="aboutMeDetails">Work as <span id='myElement'> </span> </h3>
                        </div>

                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default AboutMe
