import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "./admin.module.css"
import saiSolution from "../Assets/Icons/logo_sai_light.png"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AdminSiteData from './Admin/AdminSiteData';
import Loader from './Loader';
import AdminEditData from './Admin/AdminEditData';
import axios from 'axios';
import { Urls } from './urlConstant';
const AdminPanel = () => {
    const navigate = useNavigate()
    const [isLoading, setIsloading] = useState(false)
    const [allstate, setAllSatate] = useState({ dashboard: true, uploadData: false, userRole: false, testimonial: false, editData: false })
    const setState = (stateName) => {
        let obj = {}
        for (var key in allstate) {
            if (key == stateName) {
                obj[key] = true
            } else {
                obj[key] = false
            }
        }
        setAllSatate({ ...obj })
    }

    const checkAuth = async () => {
        let data = JSON.parse(localStorage.getItem("user_data"))
        try {
            let res = await axios.post(Urls.mainUrl + "/checkuser", data)
            console.log(res)

        } catch (error) {
            navigate("/")
            console.log(error)
        }
    }
    useEffect(() => {
        checkAuth()
    }, [])
    return (
        <Container style={{ margin: "0px" }}>
            {isLoading ? <Loader /> : ""}

            <Row>
                <Col style={{ padding: "10px" }} className={styles.leftPanel} lg={2} md={3} sm={2} >
                    <Row>
                        <img src={saiSolution} alt='Sai solution' style={{ margin: "auto", display: "block" }} height={'200px'} width='100px' />
                    </Row>
                    <Row style={{ padding: "10px" }}>
                        <ul>
                            <li onClick={() => setState('dashboard')} >Dashboard</li>
                            <li onClick={() => setState('uploadData')}>Upload site data</li>
                            <li onClick={() => setState('editData')}>Edit site data</li>
                            <li onClick={() => setState('userRole')}>Add user role</li>
                            <li onClick={() => setState('testimonial')}>Add testimonials</li>
                        </ul>
                    </Row>

                </Col>
                <Col className={styles.rightPanel} lg={10}>
                    {allstate.dashboard && <Row>
                        Dashboard
                    </Row>}
                    {allstate.uploadData && <Row>
                        <AdminSiteData />
                    </Row>}
                    {allstate.editData && <Row>
                        <AdminEditData />
                    </Row>}
                    {allstate.userRole && <Row>
                        userRole
                    </Row>}
                    {allstate.testimonial && <Row>
                        testimonial
                    </Row>}
                </Col>
            </Row>
        </Container>
    )
}

export default AdminPanel