import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { Urls } from '../urlConstant'

const AdminSiteData = () => {
    const [sitename, setSiteName] = useState('')
    const [sitetype, setSiteType] = useState('')
    const [sitelocation, setSiteLocation] = useState('')
    const [date, setDate] = useState('')
    const [ytlink, setLink] = useState('')
    const [images, setImages] = useState('')
    const [sitedesc, setDescription] = useState('')
    const [imagesLinks, setImagesLinks] = useState([])
    const handleChange = (event) => {
        setSiteType(event.target.value);
    };
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

    const submit = async (e) => {
        e.preventDefault()
        for (let i = 0; i < images.length; i++) {
            await uploadImageToCloud(images[i])
        }
        setImagesLinks([...imageLinks])
        var data = {
            site_name: sitename,
            site_type: sitetype,
            site_location: sitelocation,
            date: date,
            yt_link: ytlink,
            images: imageLinks,
            site_description: sitedesc
        }
        console.log(data)
        try {
            const res = await axios.post(Urls.mainUrl + '/sitedetails', data)
            console.log(res)
        } catch (error) {
            console.log(error)
            alert("Please photos again")
        }
    }
    return (
        <Container style={{ marginTop: "100px" }}>
            Site details
            <Row>
                <Col style={{ margin: "auto" }} lg={6}>
                    <TextField onChange={(e) => setSiteName(e.target.value)} id="filled-basic" label="Site name" variant="filled" value={sitename} className='inputsitename' />
                    <FormControl className='inputsitename'>
                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={sitetype}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={'1bhk'}>1BHK</MenuItem>
                            <MenuItem value={'2bhk'}>2BHK</MenuItem>
                            <MenuItem value={'3bhk'}>3BHK</MenuItem>
                            <MenuItem value={'4bhk'}>4BHK</MenuItem>
                            <MenuItem value={'jwellers'}>Jwellers</MenuItem>
                            <MenuItem value={'Bungalow'}>Bungalow</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField onChange={(e) => setSiteLocation(e.target.value)} value={sitelocation} id="filled-basic" label="Site location" variant="filled" className='inputsitename' />
                    <TextField onChange={(e) => setDate(e.target.value)} value={date} id="filled-basic" type={'date'} variant="filled" className='inputsitename' />
                    <TextField onChange={(e) => setLink(e.target.value)} value={ytlink} id="filled-basic" type={'text'} variant="filled" label='Youtube video link' placeholder='https://' className='inputsitename' />
                    <Button
                        variant="contained"
                        component="label"
                        style={{ marginTop: "20px", display: "block", width: "350px" }}
                    >
                        Upload Images
                        <input
                            id='images'
                            type="file"
                            hidden
                            onChange={(e) => setImages(e.target.files)}
                            multiple
                        />
                    </Button>
                    <TextField onChange={(e) => setDescription(e.target.value)} value={sitedesc} id="filled-basic" type={'text'} variant="filled" label='Description' placeholder='Write something about site..' className='inputsitename' />

                    <Button onClick={submit} style={{ width: "350px", marginTop: "20px" }} variant="contained">
                        Save
                    </Button>
                </Col>
                <Col>
                    {imagesLinks.length > 0 ? imagesLinks.map((img) => {
                        return <img src={img} alt='none' height={"100px"} width="100px" />
                    }) : ""}
                </Col>
            </Row>
        </Container >
    )
}

export default AdminSiteData