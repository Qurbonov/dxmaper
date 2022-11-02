import React, {useEffect, useState} from 'react';
import axios from "axios";
import {FcSearch} from 'react-icons/fc';

const PersonalC = () => {

    const headers = {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
    };

    /* Yakka tartibdagi tadbirkor */
    const [pinfl, setPinfl] = useState();
    const [dataIn, setData] = useState();

    const onChangePinfl = (e) => {
        const pinfl = e.target.value;
        setPinfl(pinfl);
    };
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

        ) : <div className="container"></div>
    }

    /* Yuridik shaxs */

    const [stir, setStir] = useState();
    const [YuridikData, setYuridikData] = useState();

    const onChangeStir = (e) => {
        const stir = e.target.value;
        setYuridikData(stir);
    };

    const getYuridikInfo = () => {
        axios.get(process.env.REACT_APP_LOCAL_URL_GET_GET_YURIDIK_BY_STIR + `?inn=${stir}`, {headers})
            .then((response) => {
                setYuridikData(response.data);
            }).catch(
            (error) => {
                console.log(error);
            });
    }

    const dispYuridikData = () => {
        return YuridikData ? (
            <>
                {YuridikData.success = "true" ? "yes" : "no"}
                <table className="table table-hover table-striped">
                    <thead>
                    <th>F.I.O (nomi</th>
                    <th>{YuridikData.body.company.name}</th>
                    </thead>
                    <tr>
                        <td>Pinfl</td>
                        <td>{YuridikData.body.company.shortName}</td>
                    </tr>
                    <tr>
                        <td>STIR raqami</td>
                        <td>{YuridikData.body.company.tin ? YuridikData.body.company.tin : "-"}</td>
                    </tr>
                    <tr>
                        <td>Ro'yhatga olingan sana</td>
                        <td>{YuridikData.body.company.registrationDate}</td>
                    </tr>
                    <tr>
                        <td>Ro'yhatga olish raqam</td>
                        <td>{YuridikData.body.company.registrationNumber}</td>
                    </tr>
                    <tr>
                        <td>Rahbar</td>
                        <td>{YuridikData.body.director.lastName} {YuridikData.body.director.firstName} {YuridikData.body.director.middleName}</td>
                    </tr>

                </table>
            </>

        ) : <div className="container"></div>
    }

    return (
        <>
            <div className="container mt-3 shadow-sm p-4 rounded">
                <h5>
                    Yakka tartibdagi tadbirkor (YTT) to'g'risida ma'lumot
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


            <div className="container mt-3 shadow-sm p-4 rounded">
                <h5>
                    Yuridik shaxs to'g'risida ma'lumot
                </h5>
                <div className="bg-light border p-3 rounded-3">
                    STIR:
                    <input type="text" name="stir" id="" className="form-text ms-2" onChange={onChangeStir}/>
                    <button className="btn btn-sm btn-outline-secondary ms-2" onClick={getYuridikInfo}><FcSearch/>
                    </button>
                </div>
            </div>
            <div className="container mt-3">
                {dispYuridikData()}
            </div>

        </>
    );
};


export default PersonalC;
