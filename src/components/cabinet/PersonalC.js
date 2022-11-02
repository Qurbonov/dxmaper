import React, {useEffect, useState} from 'react';
import axios from "axios";
import {FcSearch} from 'react-icons/fc';

const PersonalC = () => {

    const [pinfl, setPinfl] = useState();

    const onChangePinfl = (e) => {
        const pinfl = e.target.value;
        setPinfl(pinfl);
    };

    const headers = {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
    };
    const [dataIn, setData] = useState();

    const getIndividualInfo = () => {
        axios.get(process.env.REACT_APP_LOCAL_URL_GET_INDIVIDUAL_BY_PINFL + `?pinfl=${pinfl}`, {headers})
            .then((response) => {
                setData(response.data);
            }).catch(
            (error) => {
                console.log(error);
            });
    }

    const dispData = () => {
        return dataIn ? (
            <>
                <table className="table table-hover table-striped">
                    <thead>
                    <th>F.I.O (nomi</th>
                    <th>{dataIn.body.name}</th>
                    </thead>
                    <tr>
                        <td>Pinfl</td>
                        <td>{dataIn.body.pinfl}</td>
                    </tr>
                    <tr>
                        <td>STIR raqami</td>
                        <td>{dataIn.body.tin ? dataIn.body.tin : "-"}</td>
                    </tr>
                    <tr>
                        <td>Ro'yhatga olingan san</td>
                        <td>{dataIn.body.registrationDate}</td>
                    </tr>
                    <tr>
                        <td>Ro'yhatga olish ID</td>
                        <td>{dataIn.body.registrationId}</td>
                    </tr>
                    <tr>
                        <td>Yo'nalish</td>
                        <td>{dataIn.body.activityTypeName}</td>
                    </tr>
                    <tr>
                        <td>Manzil</td>
                        <td>{dataIn.body.entrepreneurshipAddress.address}</td>
                    </tr>
                </table>
            </>

        ) : <div className="container">Ma'lumot topilmadi !!</div>
    }
    return (
        <>
            <div className="container mt-3 shadow-sm p-4 rounded">
                <h5>
                    Yuridik shaxslar va YTT lar to'g'risida ma'lumot
                </h5>
                <div className="bg-light border p-3 rounded-3">
                    PINFL:
                    <input type="text" name="pinfl" id="" className="form-text ms-2" onChange={onChangePinfl}/>
                    <button className="btn btn-sm btn-outline-secondary ms-2" onClick={getIndividualInfo}><FcSearch/>
                    </button>
                </div>
            </div>
            <div className="container mt-3">
                {dispData()}
            </div>
        </>
    );
};


export default PersonalC;
