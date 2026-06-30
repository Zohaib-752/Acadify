import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { faCheckSquare, faGlobe, faLaptop, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CountUp from 'react-countup'


const Summary = () => {
    return (
        <>
            <Container fluid={true} className='summaryBanner p-0 mb-5'>
                <div className='summaryBannerOverlay'>
                    <Container>
                        <div>
                            <Row>
                                <Col lg={8} md={6} sm={12}>
                                    <Row className='countSection'>
                                        <Col className='text-center'>
                                            <FontAwesomeIcon className='iconProject' icon={faGlobe} />
                                            <h1 className="countNumber">
                                                <CountUp start={0} end={3500} enableScrollSpy={true} />
                                            </h1>
                                            <h4 className="countTitle">Students Worldwide</h4>
                                            <hr className="bg-white w-25" />
                                        </Col>
                                        <Col className='text-center'>
                                            <FontAwesomeIcon className='iconProject' icon={faLaptop} />
                                            <h1 className="countNumber">
                                                <CountUp start={0} end={500} enableScrollSpy={true} />
                                            </h1>
                                            <h4 className="countTitle">Courses Published</h4>
                                            <hr className="bg-white w-25" />
                                        </Col>
                                        <Col className='text-center'>
                                            <FontAwesomeIcon className='iconProject' icon={faStar} />
                                            <h1 className="countNumber">
                                                <CountUp start={0} end={40} enableScrollSpy={true} />
                                            </h1>
                                            <h4 className="countTitle">Student Reviews</h4>
                                            <hr className="bg-white w-25" />
                                        </Col>

                                    </Row>
                                </Col>
                                <Col lg={4} md={6} sm={12}>
                                    <Card className='workCard'>
                                        <Card.Body>
                                            <Card.Title className='cardTitle'>What I Have Achieved</Card.Title>
                                            <hr />
                                            <Card.Text>
                                                <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullet" icon={faCheckSquare} />Requirment Gathering </p>
                                                <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullet" icon={faCheckSquare} />System Analysis </p>
                                                <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullet" icon={faCheckSquare} />Coding Testing </p>
                                                <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullet" icon={faCheckSquare} />Implementation </p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </Container>
        </>
    )
}

export default Summary