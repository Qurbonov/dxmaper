import "./App.css";
import React from 'react';


import PageRoutes from './pageRoutes'

import {setAuthToken} from './components/helpers/setAuthToken'

function App() {
    const token = localStorage.getItem("token");
    if (token) {
        setAuthToken(token);
    } else {
        console.log("NO token")
    }
    return (
        <div className="pp">
            <PageRoutes/>
        </div>
    );
}

export default App;
