import React, {useEffect, useState} from 'react';
import axios from "axios";

const PersonalC = () => {
    const [pinfl, setPinfl] = useState();
    const [iResult, setIResult] = useState();
    const onChangePinfl = (e) => {
        const pinfl = e.target.value;
        setPinfl(pinfl);
    };
    const headers = {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
    };

    const getIndividualInfo = async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_LOCAL_URL_GET_INDIVIDUAL_BY_PINFL + `?pinfl=${pinfl}`, {headers});
            console.log(response)
            setIResult(response.data.body);
        } catch (error) {
            console.log(error);
        }
    };

    // useEffect(() => {
    //     console.log(localStorage.getItem("token"))
    //     // process.env.DSQ_GET_INDIVIDUAL_BY_PINFL
    //     axios.get(`http://localhost:8585/v1/atm/dsq/getIndividualInfo?pinfl=51911046450026`, {headers})
    //         .then(response => setPinfl(response.data))
    //     console.log(pinfl)
    //     // getIndividualInfo();
    // }, []);


    return (
        <div className="container mt-3">
            <h1>
                Yuridik shaxslar va YTT lar to'g'risida ma'lumot
            </h1>
            <p>YTT PINFLni kiriting:</p>
            <input type="text" name="pinfl" id="" className="form-text" onChange={onChangePinfl}/>
            <button className="btn btn-light" onClick={getIndividualInfo}> qidirish</button>
        </div>
    );
};

export default PersonalC;