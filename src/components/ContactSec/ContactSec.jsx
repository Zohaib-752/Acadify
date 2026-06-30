import React, { Fragment } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const ContactSec = () => {
    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <h1 className="serviceName text-justify">Quick Connect</h1>
                        <Form>
                            <Form.Group className='mb-3'>
                                <Form.Control type="text" placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type="email" placeholder="Enter Your email" />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control as="textarea" rows={3} placeholder='Enter Your message' />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <h1 className="serviceName text-justify">Discuss Now</h1>
                        <p className="serviceDescription">
                            123 Main Street, Anytown, NY 12401.<br></br>
                            <FontAwesomeIcon icon={faEnvelope} /> Email : abc@example.com<br></br>
                            <FontAwesomeIcon icon={faPhone} /> Phone : 123-456-7890<br></br>
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ContactSec
