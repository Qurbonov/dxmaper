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
                console.log(response.data);


                console.log(dataIn);
            }).catch(
            (error) => {
                console.log(error);
            });
    }
    //
    // {
    //     "body": {
    //     "pinfl": 51911046450026,
    //         "tin": null,
    //         "name": "ABDULHAMIDOV YUNUS ABDULBOQI O‘G‘LI",
    //         "isEntrepreneur": 1,
    //         "registrationDate": "05.07.2022",
    //         "registrationId": 1338737,
    //         "activityTypeName": "Компьютер дастурларини ишлаб чикиш хизматлари, компьютер ўйинларини ташкил этиш, шунингдек компьютер ёрдамида матнларни териш ва босиб чикариш хизматлари, матндан нусха олишва кўпайтириш билан боглик хизматлар",
    //         "status": 1,
    //         "liquidationDate": null,
    //         "suspensionDate": null,
    //         "activityTypeId": "277",
    //         "vatNumber": null,
    //         "beginDate": "05.07.2022",
    //         "endDate": "31.07.2025",
    //         "entrepreneurshipAddress": {
    //         "soatoCode": "1724401",
    //             "regionId": 24,
    //             "districtId": 10,ede
    //             "address": "SIRDARYO VILOYATI, GULISTON SHAHRI"
    //     }
    // },
    //     "success": true
    // }
    const dispData = () => {
        return dataIn ? (
            <>
                <table className="container table table-hover table-striped">
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
                        <td>{dataIn.body.soatoCode.address}</td>
                    </tr>

                </table>

                <b>dataIn.body.pinfl</b> <br/>
            </>

        ) : <div className="container">
        </div>
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
            <div>

                {dispData()}

            </div>
        </>
    );
};


export default PersonalC;
