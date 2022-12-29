import { Alert, FormControl, InputLabel, MenuItem, NativeSelect, Select, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Loader from '../Loader'
import Spinner from '../Spinner'
import { Urls } from '../urlConstant'
// import CancelIcon from '@mui/icons-material/Cancel';

const AdminEditData = (props) => {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [spinner, setSpinner] = useState(false)
    const [images, setImages] = useState(null)
    const [imagesLinks, setImagesLinks] = useState([])
    const [site_selected, setSiteSelected] = useState({})
    const [siteid, setSiteId] = useState("")
    const getAllData = async () => {
        setLoading(true)
        try {
            let res = await axios.get(Urls.mainUrl + "/allsitedata")
            setData([...res.data])
            setLoading(false)
        } catch (error) {
            setLoading(false)
            alert("error occured")
        }
    }
    var imageLinks = []
    const uploadImageToCloud = async (image) => {
        var form = new FormData()
        form.append("file", image)
        form.append("upload_preset", 'tlgdfr2f')
        form.append("cloud_name", 'dthmtmcvm')
        const res = await axios.post("https://api.cloudinary.com/v1_1/dthmtmcvm/image/upload", form)
        console.log(res.data.url)
        imageLinks.push(res.data.url)
    }
    const handleSelect = (id) => {
        setSiteId(id)
        let newData = data.filter((item) => {
            return item._id == id
        })
        setSiteSelected({ ...newData[0] })
    }

    const syncData = async () => {
        setSpinner(true)
        for (let i = 0; i < images.length; i++) {
            await uploadImageToCloud(images[i])
        }
        setImagesLinks([...imageLinks])
        setSpinner(false)
    }

    const createImagesLinksForSaving = () => {
        let data = [...site_selected.images, ...imagesLinks];
        return data
    }


    const updateSiteData = async () => {
        setLoading(true)
        let data = {
            ...site_selected,
            images: [...site_selected.images, ...imagesLinks]
        }
        console.log(data)
        try {
            let res = await axios.put(Urls.mainUrl + "/editSiteData", data);
            console.log(res)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            alert("Error occured", error.message)
        }
    }

    const handleFilter = (index) => {
        console.log(index)
        let newimage = (site_selected.images.filter((item, ind) => {
            return ind != index
        }))
        setSiteSelected({ ...site_selected, images: [...newimage] })
    }
    const handleChange = (e) => {
        setSiteSelected({
            ...site_selected, [e.target.name]: e.target.value
        })
    }
    console.log(site_selected)

    useEffect(() => {
        // getAllData()
        setData([...props.data])
    }, [])
    return (
        <Container>
            {isLoading ? <Loader /> : ""}
            <Row>
                <Col lg={6} sm={12}>
                    <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Site
                        </InputLabel>
                        <Select
                            value={siteid}
                            onChange={(e) => handleSelect(e.target.value)}
                        >
                            {data?.map((site, index) => {
                                console.log(site)
                                return (<MenuItem key={index} value={site._id}>{site.site_name}</MenuItem>)
                            })}
                        </Select>
                    </FormControl>
                    {site_selected._id ? <div>
                        <div class="form-floating my-2">
                            <input type="text" name='_id' class="form-control" id="floatingInput" disabled value={site_selected?._id} />
                            <label for="floatingInput">Unique Id</label>
                        </div>
                        <div class="form-floating my-2">
                            <input type="text" name='site_type' class="form-control" id="floatingInput" disabled value={site_selected?.site_type} />
                            <label for="floatingInput">Site type</label>
                        </div>
                        <div class="form-floating my-2">
                            <input onChange={handleChange} type="text" name='site_description' class="form-control" id="floatingInput" value={site_selected?.site_description} />
                            <label for="floatingInput">Site description</label>
                        </div>
                        <div class="form-floating my-2">
                            <input onChange={handleChange} type="text" name='yt_link' class="form-control" id="floatingInput" value={site_selected?.yt_link} />
                            <label for="floatingInput">Youtube link</label>
                        </div>
                    </div> : ""}
                    <input
                        className='inputsitename'
                        id='images'
                        type="file"
                        onChange={(e) => {
                            setImagesLinks([])
                            setImages(e.target.files)
                        }
                        }
                        multiple
                    />
                    <Button
                        className='btn btn-success'
                        onClick={syncData}
                        variant="contained"
                        style={{ marginTop: "20px", display: "block", width: "350px" }}
                        disabled={imagesLinks.length > 0}
                    >
                        {spinner ? <Spinner /> : "Add more images"}
                    </Button>
                </Col>

                <Col sm={12} lg={6} style={{ height: "100vh", overflowY: "scroll" }}>
                    {/* <Col lg={6} sm={12}> */}
                    {/* <div style={{}}> */}
                    {site_selected.images?.map((img, index) => {
                        return <span key={index} className='mx-1'>
                            <img src={img} alt='' height={"150px"} width={"150px"} />
                            <button className='btn' style={{ color: "red" }} onClick={() => handleFilter(index)}>Delete</button>
                        </span>
                    })}
                    {imagesLinks?.map((img, index) => {
                        return <span key={index} className='mx-1' style={{ textAlign: "center" }}>
                            <button className='btn btn-danger' onClick={() => handleFilter(index)}>Delete</button>
                            <img src={img} alt='' height={"150px"} width={"150px"} />
                        </span>
                    })}
                    {/* </div> */}
                    {/* </Col> */}
                </Col>
            </Row>
            <Row>
                <Col lg={6} sm={12}>
                    <Button style={{ width: "100%", marginTop: "20px" }} onClick={updateSiteData}>
                        Save
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default AdminEditData