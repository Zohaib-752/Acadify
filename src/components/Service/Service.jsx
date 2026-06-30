import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ecommerceIcon from '../../assets/images/ecommerce.png'
import webIcon from '../../assets/images/web.png'
import designIcon from '../../assets/images/design.png'

const Service = () => {
    return (
        <>
            <Container className='text-center mb-5'>
                <h1 className='servicesMainTitle'>Our Courses</h1>
                <div className='bottom'></div>
                <Row >
                    <Col lg={4} md={6} sm={12}>
                        <div className='serviceCard text-center'>
                            <img src={ecommerceIcon} className='ecommerceIcon' />
                            <h2 className="serviceName">Ecommerce</h2>
                            <p className="serviceDescription">I will design and develop ecommerce online store website.</p>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard text-center">
                            <img className="webIcon" src={webIcon} />
                            <h2 className="serviceName">Web Development</h2>
                            <p className="serviceDescription">Clean and fresh issue free code to make your website dynamic perfectly.</p>
                        </div>
                    </Col>

                    <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard text-center">
                            <img className="designIcon" src={designIcon} />
                            <h2 className="serviceName">Web Design</h2>
                            <p className="serviceDescription">Qualified web design and attractive effects which catches visitor’s Eye.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Service