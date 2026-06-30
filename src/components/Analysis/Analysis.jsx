import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ResponsiveContainer, BarChart, XAxis, Bar, Tooltip } from 'recharts'

const Analysis = () => {

    const [analysisData, setAnalysisData] = useState({
        data: [
            { Technology: 'PHP', Project: '95' },
            { Technology: 'JavaScript', Project: '60' },
            { Technology: 'Laravel', Project: '80' },
            { Technology: 'WordPress', Project: '98' },
            { Technology: 'React', Project: '30' },
            { Technology: 'TailWind', Project: '70' },
            { Technology: 'Bootstrap', Project: '90' },
        ]
    });

    var barColor = '#062243ff';
    return (
        <>
            <Container className='text-center mb-5'>
                <h1 className='servicesMainTitle'>TECHNOLOGY USED</h1>
                <div className='bottom'></div>
                <Row>
                    <Col lg={6} md={12} sm={12} width='100%' height={350}>
                        <ResponsiveContainer>
                            <BarChart data={analysisData.data} >
                                <XAxis dataKey='Technology' />
                                <Tooltip />
                                <Bar dataKey="Project" fill={barColor} />
                            </BarChart>
                        </ResponsiveContainer>
                    </Col>
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
                </Row>
            </Container>
        </>
    )
}

export default Analysis