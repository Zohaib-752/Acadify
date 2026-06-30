import React, { useState } from 'react'
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Modal, Row, Button } from 'react-bootstrap';
import ReactPlayer from 'react-player';




const Video = () => {
    const [show, setShow] = useState(false);

    const handleOpen = () => setShow(true)
    const handleClose = () => setShow(false)

    return (
        <>
            <Container className='mb-5'>
                <h1 className='servicesMainTitle text-center'>Our Video</h1>
                <div className='bottom'></div>
                <Row className='justify-item-center align-items-center'>
                    <Col lg={6} md={12} sm={12}>
                        <p className='servicesDescription text-center'>
                            My name is Zohaib, and I am a first-year Computer Science student.
                            <br />
                            I am passionate about web development and currently learning technologies such as HTML, CSS, Bootstrap, React.js, Next.js, PHP, Laravel, and WordPress.
                            <br />
                            I enjoy improving my programming skills and building modern websites.
                            <br />
                            My goal is to become a successful full-stack developer and pursue opportunities abroad in the future.
                            <br />
                            Apart from my studies, I spend a lot of time learning and practicing web development. I enjoy working with modern technologies and building projects that help me gain real-world experience. My passion for technology motivates me to keep improving my skills and stay updated with the latest trends in the field.

                        </p>
                    </Col>
                    <Col lg={6} md={12} sm={12} className="videoCard text-center">
                        <FontAwesomeIcon onClick={handleOpen} className="iconProject" icon={faVideo} />
                    </Col>
                </Row>
            </Container>
            <Modal className='p-2 p-lg-0' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Celebration</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ReactPlayer
                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                        controls
                        width="100%"
                        height="100%"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Video
