import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const ClientReview = () => {
    var settings = {
        autoPlaySpeed: 3000,
        autoPlay: true,
        dots: true,
        infinite: true,
        speed: 1000,
        arrows: false,
        Horizontal: true,
        verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <Container fluid={true} className='siderBack text-center mb-5'>
                <h1 className='reviewMainTitle p-3'>Testimonials</h1>
                <div className="reviewbottom"></div>
                <Slider {...settings}>
                    <div>
                        <Row className='text-center justify-conent-center'>
                            <Col>
                                <img className="circleImg" src="https://image.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19637.jpg" />
                                <h2 className="reviewName">Zohaib Zikar</h2>
                                <p className="reviewDescription">Hi! I'm Zohaib Zikar. Im A software Engineer by profession and a developer by passion. </p>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row className='text-center justify-conent-center'>
                            <Col>
                                <img className="circleImg" src="https://image.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg" />
                                <h2 className="reviewName">Jhone Doe</h2>
                                <p className="reviewDescription">Hi! I'm Jhone Doe. Im A software Engineer by profession and a developer by passion. </p>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row className='text-center justify-conent-center'>
                            <Col>
                                <img className="circleImg" src="data:image/jpeg;base64,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" />
                                <h2 className="reviewName">Ali</h2>
                                <p className="reviewDescription">Hi! I'm Ali. Im A software Engineer by profession and a developer by passion. </p>
                            </Col>
                        </Row>
                    </div>
                </Slider>
            </Container>
        </>
    )
}


export default ClientReview