import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const AdminDashboard = (props) => {
    return (
        <Container>
            <Row>
                <Row>
                    <Col>
                        <div style={{ fontWeight: "600px" }}>Dashboard</div>
                    </Col>
                </Row>
                <Col lg={4} sm={12}>
                    <div>
                        <div>No of sites</div>
                        <div>108</div>
                    </div>
                    <div>
                        <div>No of states</div>
                        <div>4</div>
                    </div>
                </Col>
                <Col lg={8} sm={12}>

                </Col>
            </Row>
        </Container>
    )
}

export default AdminDashboard