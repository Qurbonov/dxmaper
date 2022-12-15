import React, {useEffect} from 'react';
import PageRoutes from './pageRoutes'
import jwt_decode from "jwt-decode";
import {setAuthToken} from './components/helpers/setAuthToken'

import "./App.css";
import {useNavigate} from "react-router-dom";

function App() {
    const token = localStorage.getItem("token")
    const navigate = useNavigate();
    const userLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('role')
        navigate("/")
    }

    if (token) {
        setAuthToken(token);
        let decodedToken = jwt_decode(token);
        let currentDate = new Date();
        if (decodedToken.exp * 1000 < currentDate.getTime()) {
            console.log("Token expired.");
            userLogout()
        }
    }
    return (
        <div className="pp">
            <PageRoutes/>
        </div>
    );
}

export default App;
