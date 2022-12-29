import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Loader from '../Loader'
import Spinner from '../Spinner'
import { Urls } from '../urlConstant'

const AdminSiteData = () => {
    const [isLoading, setIsloading] = useState(false)
    const [spinner, setSpinner] = useState(false)
    const [sitename, setSiteName] = useState('')
    const [sitetype, setSiteType] = useState('')
    const [sitelocation, setSiteLocation] = useState('')
    const [date, setDate] = useState('')
    const [ytlink, setLink] = useState('')
    const [images, setImages] = useState(null)
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

    const syncData = async () => {
        setSpinner(true)
        for (let i = 0; i < images.length; i++) {
            await uploadImageToCloud(images[i])
        }
        setImagesLinks([...imageLinks])
        setSpinner(false)

    }

    const submit = async (e) => {
        setIsloading(true)
        e.preventDefault()
        // for (let i = 0; i < images.length; i++) {
        //     await uploadImageToCloud(images[i])
        // }
        var data = {
            site_name: sitename,
            site_type: sitetype,
            site_location: sitelocation,
            date: date,
            yt_link: ytlink,
            images: imagesLinks,
            site_description: sitedesc
        }
        console.log(data)
        try {
            const res = await axios.post(Urls.mainUrl + '/sitedetails', data)
            console.log(res)
            // setImagesLinks([])
            setSiteName("")
            setDate("")
            setDescription("")
            setImages(null)
            setLink("")
            setIsloading(false)
        } catch (error) {
            console.log(error)
            setIsloading(false)
            alert("Please photos again")
        }
    }
    useEffect(() => {

    }, [])
    return (
        <Container style={{ marginTop: "100px" }}>
            {isLoading ? <Loader /> : ""}
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
                        onClick={syncData}
                        variant="contained"
                        style={{ marginTop: "20px", display: "block", width: "350px" }}
                        disabled={(!images || imagesLinks.length > 0)}
                    >
                        {spinner ? <Spinner /> : "Upload Images"}
                    </Button>
                    <TextField onChange={(e) => setDescription(e.target.value)} value={sitedesc} id="filled-basic" type={'text'} variant="filled" label='Description' placeholder='Write something about site..' className='inputsitename' />

                    <Button disabled={imagesLinks <= 0} onClick={submit} style={{ width: "350px", marginTop: "20px" }} variant="contained">
                        Save
                    </Button>
                </Col>
                <Col>
                    {imagesLinks?.length > 0 ? imagesLinks.map((img) => {
                        return <img src={img} alt='none' height={"100px"} width="100px" />
                    }) : ""}
                </Col>
            </Row>
        </Container >
    )
}

export default AdminSiteData