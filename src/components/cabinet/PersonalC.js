import React, {useState, useRef, useEffect} from 'react';
import axios from "axios";
import {FcSearch} from 'react-icons/fc';
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import * as punycode from "punycode";
import {icons} from "react-icons";

const PersonalC = () => {

    const headers = {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
    };

    /* -------------Yakka tartibdagi tadbirkor ---------------- */
    const [pinfl, setPinfl] = useState();
    const [dataIn, setData] = useState();
    const inputYtt = useRef(null);

    const getIndividualInfo = () => {
        const pinfl = inputYtt.current.value;
        setPinfl(pinfl)
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
                <th>F.I.O (nomi)</th>
                <th>{dataIn.body.name}</th>
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

    const [stir, setStir] = useState();
    const [YuridikData, setYuridikData] = useState();
    const inputYuridik = useRef(null);

    const getYuridikInfo = () => {
        const stir = inputYuridik.current.value;
        setStir(stir)
        console.log(stir);
        axios.get(process.env.REACT_APP_LOCAL_URL_GET_YURIDIK_BY_STIR + `?inn=${stir}`, {headers})
            .then((response) => {
                setYuridikData(response.data);
            }).catch((error) => {
            console.log(error);
        });
    }

    const dispYuridikData = () => {
        return YuridikData && YuridikData.success === true ? (<>
                {/*{YuridikData.success}*/}
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


    /* -------------- total table ------------------ */
    // const r_year = useRef("");
    const optionsOfYear = [// {value: '', text: '--'},
        {value: 2020, text: "2020 yil"}, {value: 2021, text: "2021 yil"}, {value: 2022, text: "2022 yil"}]
    const optionsOfQuarter = [// {value: '', text: '--'},
        {value: 1, text: "1 chorak"}, {value: 2, text: "2 chorak"}, {value: 3, text: "3 chorak"}, {value: 4, text: "4 chorak"}]


    // const [year, setYear] = useState(2020);
    // const [quarter, setQuarter] = useState(1);

    const tQuarter_ref = useRef(2020);
    const tYear_ref = useRef(null);


    const [reports, setReport] = useState([]);

    const get_report_year_quarter = () => {
        let yearRef = tYear_ref.current.value;
        let quarterRef = tQuarter_ref.current.value;

        tYear_ref.current.value = 2022;
        tQuarter_ref.current.value = 1;
        axios.get(process.env.REACT_APP_LOCAL_URL_GET_REPORT_YEAR_QUARTER + `?year=${yearRef}&quarter=${quarterRef}`, {headers})
            .then((response) => {
                setReport(response.data);
                console.log("response.data")
                console.log(response.data)
            }).catch((error) => {
            console.log(error);
        });
    }
    const dispReportData = () => {
        return reports && reports.success === true ? (
            <>
                // r.inn
                <>
                    <table className="table table-hover table-bordered">
                        <thead>
                        <tr>
                            <th colSpan="12" className="text-center bg-light">Davlat ishtirokidagi korxonalarning
                                xatarlari
                                bo'yicha umumlashtiruvchi jadvalfff
                            </th>
                        </tr>
                        <tr>
                            <th rowSpan="3" className="w-25 text-center align-middle">Tashkilotlar</th>
                            <th colSpan="6" className="text-center">Xatarlar darajasi</th>
                            <th rowSpan="2" colSpan="2" className=" text-center align-middle"> TOTAL</th>
                        </tr>
                        <tr className="text-center">
                            <th colSpan="2">Joriy likvidlik</th>
                            <th colSpan="2">Kunlik kreditor qarzlar aylanmasi</th>
                            <th colSpan="2">Xarajatlarni qoplash</th>
                        </tr>
                        <tr className="text-center">
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
                                <td>{r.likvidlikDarajasi.amount == null ? "---" : r.likvidlikDarajasi.amount}</td>
                                <td className={r.likvidlikDarajasi.status == "LOW" ? "bg-success" : r.likvidlikDarajasi.status == "HIGH" ? "bg-warning" : r.likvidlikDarajasi.status == "MEDIUM" ? "bg-info" : r.likvidlikDarajasi.status == "VERY_HIGH" ? "bg-danger" : "bg-white"}>
                                    {r.likvidlikDarajasi.status}</td>
                                <td>
                                    {r.kunlikKreditorQarzlarAylanmasi.amount == null ? "---" : r.kunlikKreditorQarzlarAylanmasi.amount}
                                </td>
                                <td className={r.kunlikKreditorQarzlarAylanmasi.status == "LOW" ? "bg-success" : r.kunlikKreditorQarzlarAylanmasi.status == "HIGH" ? "bg-warning" : r.kunlikKreditorQarzlarAylanmasi.status == "MEDIUM" ? "bg-info" : r.kunlikKreditorQarzlarAylanmasi.status == "VERY_HIGH" ? "bg-danger" : "bg-white"}>{r.kunlikKreditorQarzlarAylanmasi.status}</td>
                                <td>{r.xarajatlarningQoplanishi.amount == null ? "---" : r.xarajatlarningQoplanishi.amount}</td>
                                <td>{r.xarajatlarningQoplanishi.status}</td>
                                <td>{r.total.amount == null ? "---" : r.total.amount}</td>
                                <td>{r.total.status}</td>
                            </tr>
                        ))}
                        {/*<span key={idx} className={paymentType == 2 ? "badge badge-secondary" : paymentType == 1 ? "badge badge-primary" : "badge badge-n"}>{paymentType}</span>*/}

                        </tbody>
                    </table>

                </>


            </>
        ) : <div className="container"> cointainers</div>
    }

    useEffect(() => {
        get_report_year_quarter()
        // console.log(reports)
    })
    return (<>
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
                    <div className="container bg-white p-4 text-end mb-3 rounded-3 shadow-sm">
                        <input type="text" name="tYear" className="form-text" ref={tYear_ref}/>
                        <input type="text" name="tQuarter" className="form-text" ref={tQuarter_ref}/>
                        <button
                            className="btn btn-light form-control-sm  rounded-3 ms-2 text-secondary px-4" onClick={get_report_year_quarter}> Ma'lumot olish
                        </button>
                    </div>
                    {dispReportData()}
                    {/*<table className="table table-hover table-bordered">*/}
                    {/*    <thead>*/}
                    {/*    <tr>*/}
                    {/*        <th colSpan="12" className="text-center bg-light">Davlat ishtirokidagi korxonalarning*/}
                    {/*            xatarlari*/}
                    {/*            bo'yicha umumlashtiruvchi jadval*/}
                    {/*        </th>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <th rowSpan="3" className="w-25 text-center align-middle">Tashkilotlar</th>*/}
                    {/*        <th colSpan="6" className="text-center">Xatarlar darajasi</th>*/}
                    {/*        <th rowSpan="3" colSpan="3" className=" text-center align-middle"> TOTAL</th>*/}

                    {/*    </tr>*/}
                    {/*    <tr className="text-center">*/}

                    {/*        <th colSpan="2">Joriy likvidlik</th>*/}

                    {/*        <th colSpan="2">Kunlik kreditor qarzlar aylanmasi</th>*/}
                    {/*        <th colSpan="2">Xarajatlarni qoplash</th>*/}
                    {/*    </tr>*/}
                    {/*    <tr className="text-center">*/}

                    {/*        <td>Ko'rsatgich</td>*/}
                    {/*        <td>Xatar darajasi</td>*/}
                    {/*        <td>Ko'rsatgich</td>*/}
                    {/*        <td>Xatar darajasi</td>*/}
                    {/*        <td>Ko'rsatgich</td>*/}
                    {/*        <td>Xatar darajasi</td>*/}

                    {/*    </tr>*/}
                    {/*    </thead>*/}

                    {/*    <tbody>*/}
                    {/*    /!*{reports.map(p => ({p}))}*!/*/}

                    {/*    <tr>*/}
                    {/*        <td>"O`ZTRANSGAZ" AJ</td>*/}
                    {/*        <td>1</td>*/}
                    {/*        <td>2</td>*/}
                    {/*        <td>3</td>*/}
                    {/*        <td>4</td>*/}
                    {/*        <td>5</td>*/}
                    {/*        <td>6</td>*/}
                    {/*        <td>6</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>"NAVOIY KON-METALLURGIYA KOMBINATI" AJ</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>"OLMALIQ KON-METALLURGIYA KOMBINATI" AJ</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>"O`ZBEKISTON METALLURGIYA KOMBINATI" AJ</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>"FARG`ONAAZOT " AJ</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>"ISSIQLIK ELEKTR STANSIYALARI" AJ</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>"O'ZBEKKO'MIR" AJ</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>"O'ZBEKISTON TEMIR YO'LLARI" AJ</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>"UZBEKISTAN AIRWAYS" AJ</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>"O`ZBEKISTON POCHTASI" AJ</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>"UZBEKGIDROENERGO" AJ</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>"O'ZBEKNEFTGAZ"AJ</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>"ANGREN ISSIQLIK ELEKTR STANSIYASI" AJ</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>"O`ZBEKTELEKOM " AJ</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>"O'ZSUVTA'MINOT" AJ</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>"UZBEKISTAN AIRPORTS" AJ</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>"O'ZKIMYOSANOAT" AJ</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>"HUDUDGAZTA`MINOT" AJ</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>"TOSHSHAHARTRANSXIZMAT" AJ</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>"O'ZAVTOSANOATI" AJ</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>"HUDUDIY ELEKTR TARMOQLARI" AJ</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>"O'ZDONMAHSULOT" AJ</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>"O`ZBEKISTON MILLIY ELEKTR TARMOQLARI" AJ</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>"YANGI ANGREN ISSIQLIK ELEKTR STANSIYASI" AJ</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>"MAXSUSTRANS ISHLAB CHIQARISH BOSHQARMASI" DUK</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>"O`ZAERONAVIGATSIYA MARKAZI" DUK</td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td>TOSHKENT METROPOLITENI" УК</td>*/}
                    {/*    </tr>*/}
                    {/*    </tbody>*/}

                    {/*</table>*/}
                </div>

            </Tab>
        </Tabs>


    </>);
};


export default PersonalC;