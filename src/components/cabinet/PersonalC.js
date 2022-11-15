import React, {useState, useRef, useEffect} from 'react';
import axios from "axios";
import {FcSearch} from 'react-icons/fc';
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const PersonalC = () => {

    const headers = {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
    };

    /* -------------Yakka tartibdagi tadbirkor ---------------- */
    // const [pinfl, setPinfl] = useState();
    const [dataIn, setData] = useState();
    const inputYtt = useRef(null);

    const getIndividualInfo = () => {
        const pinfl = inputYtt.current.value;
        // setPinfl(pinfl)
        axios.get(process.env.REACT_APP_LOCAL_URL_GET_INDIVIDUAL_BY_PINFL + `?pinfl=${pinfl}`, {headers})
            .then((response) => {
                setData(response.data);
            }).catch((error) => {
            console.log(error);
        });
    }

    const dispData = () => {
        return dataIn && dataIn.success === true ? (<>
            <table className="table table-hover table-striped">
                <thead>
                <tr>
                    <th>F.I.O (nomi)</th>
                    <th>{dataIn.body.name}</th>
                </tr>
                <tr>
                    <th>Holati</th>
                    <th>{dataIn.body.status}</th>
                </tr>
                </thead>
                <tr>
                    <td>Pinfl</td>
                    <td>{dataIn.body.pinfl}</td>
                </tr>
                <tr>
                    <td>STIR raqami</td>
                    <td>{dataIn.body.tin ? dataIn.body.tin : "--"}</td>
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
        </>) : <div className="container alert alert-light"></div>
    }

    /* ----------------- Yuridik shaxs ----------------------- */

    // const [stir, setStir] = useState();
    const [YuridikData, setYuridikData] = useState();
    const inputYuridik = useRef(null);

    const getYuridikInfo = () => {
        const stir = inputYuridik.current.value;
        // setStir(stir)
        console.log(stir);
        axios.get(process.env.REACT_APP_LOCAL_URL_GET_YURIDIK_BY_STIR + `?inn=${stir}`, {headers})
            .then((response) => {
                setYuridikData(response.data);
            }).catch((error) => {
            console.log(error);
        });
    }
    // {
    //     "body": {
    //     "id": 11,
    //         "createdAt": "2022-11-14T17:08:31.506402304",
    //         "updatedAt": "2022-11-14T17:08:31.506404378",
    //         "createdBy": null,
    //         "deleted": false,
    //         "company": {
    //         "tin": 207054033,
    //             "name": "PASTDARG'OM TUMAN \"YULDUZCHA\" NOMLI 31-MAKTABGACHA TA'LIM MUASSASASI",
    //             "shortName": "PASTDARG'OM TUMAN \"YULDUZCHA\" NOMLI 31-MTM",
    //             "opf": "270",
    //             "kfs": "200",
    //             "soogu": "04443",
    //             "sooguRegistrator": "70414",
    //             "oked": "85100",
    //             "registrationDate": "26.12.2009",
    //             "licenseBeginDate": null,
    //             "licenseEndDate": null,
    //             "reregistrationDate": "26.12.2009",
    //             "registrationNumber": "2777",
    //             "status": "11",
    //             "statusUpdated": null,
    //             "taxStatus": null,
    //             "liquidationDate": null,
    //             "liquidationReason": null,
    //             "suspensionDate": null,
    //             "suspensionReason": null,
    //             "vatNumber": null,
    //             "taxpayerType": "1",
    //             "activityType": null,
    //             "businessType": "3",
    //             "individualEntrepreneurType": null,
    //             "businessFundCurrency": null,
    //             "businessFund": 0,
    //             "businessStructure": 36
    //     },
    //     "extraActivityTypes": null,
    //         "companyBanks": [],
    //         "companyBillingAddress": {
    //         "id": 846,
    //             "createdAt": "2022-11-14T17:08:31.502499596",
    //             "countryCode": "860",
    //             "soatoCode": "1718227848",
    //             "village": null,
    //             "sectorCode": "3",
    //             "streetName": null,
    //             "house": null,
    //             "flat": null,
    //             "postcode": null,
    //             "cadastreNumber": null
    //     },
    //     "companyShippingAddress": [],
    //         "companyExtraInfo": {
    //         "monthlyNumberEmployees": null,
    //             "avgNumberEmployees": 43
    //     },
    //     "director": {
    //         "lastName": "ISHNAZAROVA",
    //             "firstName": "SOHIBA",
    //             "middleName": "MUXTAROVNA",
    //             "gender": 2,
    //             "countryCode": null,
    //             "passportSeries": null,
    //             "passportNumber": null,
    //             "pinfl": 41009886090058,
    //             "tin": 540056798
    //     },
    //     "directorAddress": {
    //         "id": 847,
    //             "createdAt": "2022-11-14T17:08:31.502933039",
    //             "countryCode": "860",
    //             "soatoCode": "1718227",
    //             "village": "0",
    //             "sectorCode": null,
    //             "streetName": null,
    //             "house": null,
    //             "flat": null,
    //             "postcode": null,
    //             "cadastreNumber": null
    //     },
    //     "directorContact": {
    //         "id": 15,
    //             "createdAt": "2022-11-14T17:08:31.503518136",
    //             "phone": "902823131",
    //             "email": null
    //     },
    //     "accountant": {
    //         "lastName": "XUSANOV",
    //             "firstName": "GAYRAT",
    //             "middleName": "NASRIDINOVICH",
    //             "gender": 1,
    //             "countryCode": null,
    //             "passportSeries": null,
    //             "passportNumber": null,
    //             "pinfl": 31002613950020,
    //             "tin": 435319552
    //     },
    //     "accountantAddress": {
    //         "id": 845,
    //             "createdAt": "2022-11-14T17:08:31.501324132",
    //             "countryCode": "860",
    //             "soatoCode": "1718227",
    //             "village": "0",
    //             "sectorCode": "0",
    //             "streetName": null,
    //             "house": null,
    //             "flat": null,
    //             "postcode": null,
    //             "cadastreNumber": null
    //     },
    //     "accountantContact": null,
    //         "founders": null,
    //         "founderLegal": null,
    //         "founderContact": null
    // },
    //     "success": true
    // }
    const dispYuridikData = () => {
        return YuridikData && YuridikData.success === true ? (<>
                <table className="table table-hover table-striped">
                    <thead>
                    <tr>
                        <th>Tashkilot nomi</th>
                        <th>{YuridikData.body.company.name}</th>
                    </tr>
                    <tr>
                        <th>Tashkilot qisqa nomi</th>
                        <th>{YuridikData.body.company.shortName}</th>
                    </tr>
                    <tr>
                        <td>Rahbar (F.I.O)</td>
                        <td>{YuridikData.body.director.lastName} {YuridikData.body.director.firstName} {YuridikData.body.director.middleName}</td>
                    </tr>
                    <tr>
                        <td>Jinsi</td>
                        <td>{YuridikData.body.director.gender === 1 ? "Erkak" : YuridikData.body.director.gender === 2 ? "Ayol" : "-"}</td>
                    </tr>
                    </thead>
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
                        <td>Biznes shakli</td>
                        <td>{YuridikData.body.company.businessType}</td>
                    </tr>
                    <tr>
                        <td>Holati</td>
                        <td>{YuridikData.body.company.status}</td>
                    </tr>
                </table>
            </>

        ) : <div className="container"></div>
    }


    /* -------------- total table ------------------ */
    const optionsOfYear = [// {value: '', text: '--'},
        {value: 2020, text: "2020 yil"}, {value: 2021, text: "2021 yil"}, {value: 2022, text: "2022 yil"}]
    const optionsOfQuarter = [// {value: '', text: '--'},
        {value: 1, text: "1 chorak"}, {value: 2, text: "2 chorak"}, {value: 3, text: "3 chorak"}, {value: 4, text: "4 chorak"}]
    const [selectedYear, setSelectedYear] = useState(optionsOfYear[0].value);
    const [selectedQuarter, setSelectedQuarter] = useState(optionsOfQuarter[0].value);

    const handleChangeYear = event => {
        console.log(event.target.value);
        setSelectedYear(event.target.value);
    };
    const handleChangeQuarter = event => {
        console.log(event.target.value);
        setSelectedQuarter(event.target.value);
    };
    const tQuarter_ref = useRef(2020);
    const tYear_ref = useRef(1);
    const [reports, setReport] = useState([]);


    const get_report_year_quarter = () => {
        let yearRef = tYear_ref.current.value;
        let quarterRef = tQuarter_ref.current.value;

        axios.get(process.env.REACT_APP_LOCAL_URL_GET_REPORT_YEAR_QUARTER + `?year=${selectedYear}&quarter=${selectedQuarter}`, {headers})
            .then((response) => {
                setReport(response.data);
                console.log("response.data")
                console.log(response.data)
            }).catch((error) => {
            console.log(error);
        });
    }

    const getUzbData = (resData) => {
        if (resData === "LOW") {
            return <div className="bg-success text-white px-3 py-1 rounded">PAST</div>
        } else if (resData === "MEDIUM") {
            return <div className="bg-primary text-white px-3 py-1 rounded">O`RTA</div>
        } else if (resData === "HIGH") {
            return <div className="bg-warning text-white px-3 py-1 rounded">YUQORI</div>
        } else if (resData === "VERY_HIGH") {
            return <div className="bg-danger text-white px-3 py-1 rounded">O`TA YUQORI</div>
        }
    }

    const dispReportData = () => {
        return reports && reports.success === true ? (
            <>
                <table className="table table-hover table-bordered">
                    <thead>
                    <tr>
                        <td>
                            <div className="col-md text-end">{selectedYear} yil {selectedQuarter} chorak davri uchun ma'lumotlar</div>
                        </td>
                    </tr>
                    <tr>
                        <th colSpan="12" className="text-center bg-light">Davlat ishtirokidagi korxonalarning
                            xatarlari
                            bo'yicha umumlashtiruvchi jadval
                        </th>
                    </tr>
                    <tr>
                        <th rowSpan="3" className="w-25 text-center align-middle">Tashkilotlar</th>
                        <th colSpan="6" className="text-center">Xatarlar darajasi</th>
                        <th rowSpan="2" colSpan="2" className=" text-center align-middle"> Yakuniy</th>
                    </tr>
                    <tr className="text-center">
                        <th colSpan="2">Joriy likvidlik</th>
                        <th colSpan="2">Xarajatlarni qoplash</th>
                        <th colSpan="2">Kunlik kreditor qarzlar aylanmasi</th>
                    </tr>
                    <tr className="text-center">
                        <td>Ko'rsatgich
                        </td>
                        <td>Xatar darajasi</td>
                        <td>Ko'rsatgich</td>
                        <td>Xatar darajasi</td>
                        <td>Ko'rsatgich</td>
                        <td>Xatar darajasi</td>
                        <td>Ko'rsatgich</td>
                        <td>Xatar darajasi</td>

                    </tr>
                    </thead>
                    <tbody>
                    {reports.body.map(r => (
                        <tr>
                            <td>{r.orgName}</td>
                            <td>{r.likvidlikDarajasi?.amount === null ? "---" : r.likvidlikDarajasi?.amount}</td>
                            <td>
                                {getUzbData(r.likvidlikDarajasi?.status)}</td>
                            <td>
                                {r.kunlikKreditorQarzlarAylanmasi?.amount === null ? "---" : r.kunlikKreditorQarzlarAylanmasi?.amount}
                            </td>
                            <td>
                                {getUzbData(r.kunlikKreditorQarzlarAylanmasi.status)}</td>
                            <td>{r.xarajatlarningQoplanishi?.amount === null ? "---" : r.xarajatlarningQoplanishi?.amount}</td>
                            <td>{getUzbData(r.xarajatlarningQoplanishi.status)}</td>
                            <td>{r.total?.amount === null ? "---" : r.total?.amount}</td>
                            <td>{getUzbData(r.total.status)}</td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="9" className="text-end bg-light"> --- - DSQda ma'lumot mavjud emas.</td>
                    </tr>
                    </tbody>
                </table>
            </>
        ) : <div className="container"></div>
    }


    return (
        <>
            <Tabs
                defaultActiveKey="et"
                id="fill-tab-example"
                className="mb-3 mt-4"
                fill
            >
                <Tab eventKey="ytt" title="Yakka tartibdagi tadbirkor">
                    <div className="container mt-3 shadow-sm p-4 rounded">
                        <h5>
                            Yakka tartibdagi tadbirkor (YTT) to'g'risida ma'lumot
                        </h5>
                        <div className="bg-light border p-3 rounded-3">
                            PINFL:
                            <input type="text" name="pinfl" id="" className="form-text ms-2" ref={inputYtt}/>
                            {/*<input type="text" name="pinfl" id="" className="form-text ms-2" onChange={e => {*/}
                            {/*    setPinfl(e.target.value)*/}
                            {/*}}/>*/}
                            <button className="btn btn-sm btn-outline-secondary ms-2" onClick={getIndividualInfo}>
                                <FcSearch/>
                            </button>
                        </div>
                    </div>
                    <div className="container mt-3">
                        {dispData()}
                    </div>
                </Tab>
                <Tab eventKey="yuridik" title="Yuridik shaxs">
                    <div className="container mt-3 shadow-sm p-4 rounded">
                        <h5>
                            Yuridik shaxs to'g'risida ma'lumot
                        </h5>
                        <div className="bg-light border p-3 rounded-3">
                            STIR:
                            <input type="text" name="stir" id="" className="form-text ms-2" ref={inputYuridik}/>
                            {/*<input type="text" name="stir" id="" className="form-text ms-2" onChange={e => {*/}
                            {/*    setStir(e.target.value)*/}
                            {/*}}/>*/}
                            <button className="btn btn-sm btn-outline-secondary ms-2" onClick={getYuridikInfo}>
                                <FcSearch/>
                            </button>
                        </div>
                    </div>
                    <div className="container mt-3">
                        {dispYuridikData()}
                    </div>
                </Tab>
                <Tab eventKey="et" title="Umumlashtiruvchi jadval">
                    <div>
                        <div className="container text-end bg-white p-4 mb-3 rounded-3 shadow-sm">
                            Ma'lumot olish uchun davrni tanlang:
                            <select value={selectedYear} onChange={handleChangeYear} className="form-select-sm mx-4">
                                {optionsOfYear.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.text}
                                    </option>
                                ))}
                            </select>
                            <select value={selectedQuarter} onChange={handleChangeQuarter} className="form-select-sm">
                                {optionsOfQuarter.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.text}
                                    </option>
                                ))}
                            </select>

                            {/*<input type="text" name="tYear" className="form-text" ref={tYear_ref}/>*/}
                            {/*<input type="text" name="tQuarter" className="form-text" ref={tQuarter_ref}/>*/}
                            <button
                                className="btn btn-light form-control-sm  rounded-3 ms-2 text-secondary px-4" onClick={get_report_year_quarter}> Ma'lumot olish
                            </button>

                        </div>
                        {dispReportData()}
                    </div>
                </Tab>
            </Tabs>
        </>
    );
};
export default PersonalC;
