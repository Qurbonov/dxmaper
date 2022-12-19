import React, {useEffect, useState} from "react";
import axios from "axios";
import {setAuthToken} from "../helpers/setAuthToken"

function Cabinet() {
    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUserName(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = () => {
        axios.post(process.env.REACT_APP_LOCAL_URL_LOGIN, {
            username: username,
            password: password
        })
            .then(response => {
                const token = response.data.token;
                localStorage.setItem("token", token);
                localStorage.setItem("role", response.data.role);
                setAuthToken(token);
                if (response.data.role === 'ROLE_SUPERADMIN') {
                    window.location.href = '/personalCabinet'
                }
                if (response.data.role === 'ROLE_ADMIN') {
                    window.location.href = '/personalCabinet'
                }
                if (response.data.role === 'ROLE_MANAGER') {
                    window.location.href = '/taxreport'
                }
            })
            .catch(err => console.log(err));
    };
    return (
        <>
            <form
                onSubmit={
                    (event) => {
                        event.preventDefault()
                        handleSubmit()
                    }
                }
                className="container form-control mt-4 p-4">
                <label htmlFor="username">Login</label>
                <input type="text" id="username" name="username" className="form-control" onChange={onChangeUsername}/>
                <label htmlFor="password" className="mt-4">Password</label>
                <input type="password" id="password" name="password" className="form-control"
                       onChange={onChangePassword}/>
                <input type="submit" value="Kirish" className="mt-3  btn btn-success"/>
            </form>
        </>
    );
}

export default Cabinet