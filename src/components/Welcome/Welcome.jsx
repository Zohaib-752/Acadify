import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import pageone from '../../assets/images/page1.png';
import pagetwo from '../../assets/images/page2.png';
import pagethree from '../../assets/images/page3.png';
import imgone from '../../assets/images/19.png';
import imgtwo from '../../assets/images/20.png';
import imgthree from '../../assets/images/21.png';


const Welcome = () => {
    return (
        <>
            <div className='intro-area-top'>
                <Container>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <div className='section-title text-center'>
                                <div className='intro-area-inner'>
                                    <h6 className='sub-title double-line mb-3'>WELCOME</h6>
                                    <h2 className='maintitle'>A Better Way <br />to Learn </h2>
                                    <Container>
                                        <Row>
                                            <Col lg={4} md={6} sm={12}>
                                                <img src={pageone} alt="imgOne" />
                                                <h1 className="serviceName">Easy As it Gets </h1>
                                                <p className="serviceDescription">Learning made simple</p>
                                            </Col>
                                            <Col lg={4} md={6} sm={12}>
                                                <img src={pagetwo} alt="imgTwo" />
                                                <h1 className="serviceName">The small matter </h1>
                                                <p className="serviceDescription">We value every child</p>
                                            </Col>
                                            <Col lg={4} md={6} sm={12}>
                                                <img src={pagethree} alt="imgThree" />
                                                <h1 className="serviceName">Teach Gracefully </h1>
                                                <p className="serviceDescription">We make it easier to share what you know</p>
                                            </Col>
                                        </Row>
                                        <Row className="intro-footer bg-base text-center mt-5">
                                            <Col lg={4} md={6} sm={12}>
                                                <Row>
                                                    <Col lg={6} md={6} sm={12}>
                                                        <img className="sideImg" src={imgone} />
                                                    </Col>
                                                    <Col lg={6} md={6} sm={12}>
                                                        <h5 className="text-justify homeIntro">Development</h5>
                                                        <p className="text-justify serviceDescription">Lorem ipsum dolor</p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col lg={4} md={6} sm={12}>
                                                <Row>
                                                    <Col lg={6} md={6} sm={12}>
                                                        <img className="sideImg" src={imgtwo} />
                                                    </Col>

                                                    <Col lg={6} md={6} sm={12}>
                                                        <h5 className="text-justify homeIntro">Web Design</h5>
                                                        <p className="text-justify serviceDescription">Lorem ipsum dolor</p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col lg={4} md={6} sm={12}>
                                                <Row>
                                                    <Col lg={6} md={6} sm={12}>
                                                        <img className="sideImg" src={imgthree} />
                                                    </Col>
                                                    <Col lg={6} md={6} sm={12}>
                                                        <h5 className="text-justify homeIntro">Ecommerce</h5>
                                                        <p className="text-justify serviceDescription">Lorem ipsum dolor</p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Welcome
