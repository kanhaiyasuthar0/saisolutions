import React from 'react'
import { useState } from 'react'
import sai_log from "../Assets/Icons/logo_sai_light.png"
import axios from "axios"
import { Urls } from '../urlConstant'
import { useNavigate } from 'react-router-dom'
const Admin = () => {
    const navigate = useNavigate()
    const [admin, setAdmin] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        setAdmin({ ...admin, [e.target.name]: e.target.value })
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(admin)
        axios.post(Urls.mainUrl + "/register", admin).then((res) => {
            console.log(res)
        }).catch((e) => {
            console.log(e)
        })
    }
    const handleLogin = (e) => {
        e.preventDefault()
        console.log(admin)
        axios.post(Urls.mainUrl + "/login", admin).then((res) => {
            navigate("/adminpanel")
        }).catch((e) => {
            console.log(e)
            alert("error")
        })
    }
    return (
        <><main class="form-signin w-100 m-auto">
            <form style={{ width: "40%", margin: "50px auto" }}>
                <img class="mb-4" src={sai_log} alt="" style={{ margin: "auto", width: "50%", display: "block" }} />
                {/* <h1 class="h3 mb-3 fw-normal">Plea</h1> */}

                <div class="form-floating my-2">
                    <input onChange={handleChange} type="email" name='email' class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input onChange={handleChange} type="password" name='password' class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>

                <div class="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <div>
                    <button class="w-100 btn btn-lg btn-primary" onClick={handleLogin}>Sign in</button>
                    {/* <button class="w-50 btn btn-lg btn-danger" onClick={handleSubmit}>Register</button> */}
                </div>
                <p class="mt-5 mb-3 text-muted">© 2017–2022</p>
            </form>
        </main></>
    )
}

export default Admin