import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import laravelImage from '../../assets/images/Laravel.jpg'
import wordpressImage from '../../assets/images/Wordpress.png'
import reactImage from '../../assets/images/React.jpg'
import phpImage from '../../assets/images/PHP.png'

const AllCoursesSec = () => {
    return (
        <>
            <Container className='mb-5'>
                <h1 className='text-center servicesMainTitle'>OUR COURSES</h1>
                <div className='bottom'></div>
                <Row>
                    <Col lg={6} md={12} sm={12} >
                        <div className='courseBox flex-column flex-lg-row align-items-center justify-content-between justify-content-lg-start align-items-lg-start text-center text-lg-start'>
                            <div className='courseBoxImage'>
                                <img src={reactImage} alt="" className='courseImage' />
                            </div>
                            <div className='courseBoxContent'>
                                <h2 className='servicesName'> React JS </h2>
                                <p className='servicesDescription px-5 px-lg-0'>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </p>
                                <a className="courseViewMore float-left" href="#" >View Details</a>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6} md={12} sm={12} >
                        <div className='courseBox flex-column flex-lg-row align-items-center justify-content-between justify-content-lg-start align-items-lg-start text-center text-lg-start'>
                            <div className='courseBoxImage'>
                                <img src={laravelImage} alt="" className='courseImage' />
                            </div>
                            <div className='courseBoxContent'>
                                <h2 className='servicesName'> Laravel </h2>
                                <p className='servicesDescription px-5 px-lg-0'>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </p>
                                <a className="courseViewMore float-left" href="#" >View Details</a>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6} md={12} sm={12} >
                        <div className='courseBox flex-column flex-lg-row align-items-center justify-content-between justify-content-lg-start align-items-lg-start text-center text-lg-start'>
                            <div className='courseBoxImage'>
                                <img src={wordpressImage} alt="" className='courseImage' />
                            </div>
                            <div className='courseBoxContent'>
                                <h2 className='servicesName'> Wordpress </h2>
                                <p className='servicesDescription px-5 px-lg-0'>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </p>
                                <a className="courseViewMore float-left" href="#" >View Details</a>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6} md={12} sm={12} >
                        <div className='courseBox flex-column flex-lg-row align-items-center justify-content-between justify-content-lg-start align-items-lg-start text-center text-lg-start'>
                            <div className='courseBoxImage'>
                                <img src={phpImage} alt="" className='courseImage' />
                            </div>
                            <div className='courseBoxContent'>
                                <h2 className='servicesName'> PHP </h2>
                                <p className='servicesDescription px-5 px-lg-0'>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </p>
                                <a className="courseViewMore float-left" href="#" >View Details</a>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6} md={12} sm={12} >
                        <div className='courseBox flex-column flex-lg-row align-items-center justify-content-between justify-content-lg-start align-items-lg-start text-center text-lg-start'>
                            <div className='courseBoxImage'>
                                <img src={reactImage} alt="" className='courseImage' />
                            </div>
                            <div className='courseBoxContent'>
                                <h2 className='servicesName'> React JS </h2>
                                <p className='servicesDescription px-5 px-lg-0'>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </p>
                                <a className="courseViewMore float-left" href="#" >View Details</a>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6} md={12} sm={12} >
                        <div className='courseBox flex-column flex-lg-row align-items-center justify-content-between justify-content-lg-start align-items-lg-start text-center text-lg-start'>
                            <div className='courseBoxImage'>
                                <img src={laravelImage} alt="" className='courseImage' />
                            </div>
                            <div className='courseBoxContent'>
                                <h2 className='servicesName'> Laravel </h2>
                                <p className='servicesDescription px-5 px-lg-0'>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </p>
                                <a className="courseViewMore float-left" href="#" >View Details</a>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6} md={12} sm={12} >
                        <div className='courseBox flex-column flex-lg-row align-items-center justify-content-between justify-content-lg-start align-items-lg-start text-center text-lg-start'>
                            <div className='courseBoxImage'>
                                <img src={wordpressImage} alt="" className='courseImage' />
                            </div>
                            <div className='courseBoxContent'>
                                <h2 className='servicesName'> Wordpress </h2>
                                <p className='servicesDescription px-5 px-lg-0'>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </p>
                                <a className="courseViewMore float-left" href="#" >View Details</a>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6} md={12} sm={12} >
                        <div className='courseBox flex-column flex-lg-row align-items-center justify-content-between justify-content-lg-start align-items-lg-start text-center text-lg-start'>
                            <div className='courseBoxImage'>
                                <img src={phpImage} alt="" className='courseImage' />
                            </div>
                            <div className='courseBoxContent'>
                                <h2 className='servicesName'> PHP </h2>
                                <p className='servicesDescription px-5 px-lg-0'>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </p>
                                <a className="courseViewMore float-left" href="#" >View Details</a>
                            </div>
                        </div>
                    </Col>


                </Row>
            </Container>
        </>
    )
}


export default AllCoursesSec