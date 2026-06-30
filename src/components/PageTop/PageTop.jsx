import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const PageTop = (props) => {
    return (
        <>
            <Container fluid={true} className="topFixedPage p-0 mb-5" >
                <div className="topPageOverlay">
                    <Container className="topContentPage">
                        <Row>
                            <Col className="text-center">
                                <h4 className="topPageTitle">{props.pagetitle} </h4>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        </>
    )
}

export default PageTop