import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'


const TopBanner = () => {
    return (
        <>
            <Container fluid={true} className='topFixedBanner p-0' id='home'>
                <div className='topBannerOverlay' >
                    <Container className='topContent'>
                        <Row>
                            <Col className='text-center'>
                                <h1 className='topBannerTitle'>Acadify</h1>
                                <h2 className='topBannerSubTitle'>Shaping Future Leaders Through Quality Education</h2>
                                <Button className='mt-4 topBannerBtn' type='button'>Discover More</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        </>
    )
}

export default TopBanner