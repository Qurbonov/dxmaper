import React, {useEffect, useState} from 'react';
import axios from "axios";

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

        ) : <div className="container">Ma'lumot topilmadi !!!</div>
    }
    return (
        <>
            <div className="container mt-3">
                <h1>
                    Yuridik shaxslar va YTT lar togrisida malumot
                </h1>

                <p>YTT PINFLni kiriting:</p>
                <input type="text" name="pinfl" id="" className="form-text" onChange={onChangePinfl}/>
                <button className="btn btn-light" onClick={getIndividualInfo}> qidirish</button>
            </div>
            <div className="container mt-3">
                {dispData()}
            </div>
        </>
    );
};


export default PersonalC;
