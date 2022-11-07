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
    const [pinfl, setPinfl] = useState();
    const [dataIn, setData] = useState();
    const inputYtt = useRef(null);

    const getIndividualInfo = () => {
        const pinfl = inputYtt.current.value;
        setPinfl(pinfl)
        axios.get(process.env.REACT_APP_LOCAL_URL_GET_INDIVIDUAL_BY_PINFL + `?pinfl=${pinfl}`, {headers})
            .then((response) => {
                setData(response.data);
            }).catch(
            (error) => {
                console.log(error);
            });
    }

    const dispData = () => {
        return dataIn && dataIn.success === true ? (
            <>
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
            </>
        ) : <div className="container alert alert-light"></div>
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
            }).catch(
            (error) => {
                console.log(error);
            });
    }

    const dispYuridikData = () => {
        return YuridikData && YuridikData.success === true ? (
            <>
                {YuridikData.success}
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
    const r_year = useRef("2021");
    const [year, setYear] = useState();
    const options = [
        {value: 2020, text: 2020},
        {value: 2021, text: 2021},
        {value: 2022, text: 2022}
    ]
    const handleChange = event => {
        console.log(event.target.value);
        setYear(event.target.value);
    };
    const get_report_year_quarter = event => {
        // console.log(event)
        // setYear(e.target.value)
        setYear(event.target.value);
        const rYear = year;
        console.log(rYear)
        console.log(r_year)
        // console.log(r_year_name)
        console.log(year)

        setPinfl(pinfl)
        axios.get(process.env.REACT_APP_LOCAL_URL_GET_REPORT_YEAR_QUARTER + `?year=${year}&quarter=1`, {headers})
            .then((response) => {
                setData(response.data);
            }).catch(
            (error) => {
                console.log(error);
            });
    }
    useEffect(() => {
        // get_report_year_quarter()
    })
    return (
        <>
            {/*<div className="bg-light rounded-3 shadow-sm p-3 mt-3 container ">*/}
            {/*    /!*Yuridik va yakka tartibdagi tadbirkor*!/*/}
            {/*    /!*bo'yicha ma'lumotlar !!!*!/*/}
            {/*</div>*/}
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
                        <div
                            className="container bg-light p-4 text-end mb-3 rounded-3 shadow-sm">
                            <span className="text-info me-2">Yil:</span>
                            <select value={year} onChange={get_report_year_quarter}>
                                {options.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.text}
                                    </option>
                                ))}
                            </select>
                            <span className="text-info me-2"> Chorak:</span>
                            <select name="r_quarter" id="" className="me-4 form-control-sm">
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                            </select>
                        </div>

                        <table className="table table-hover table-bordered">
                            <thead>
                            <tr>
                                <th colSpan="12" className="text-center bg-light">Davlat ishtirokidagi korxonalarning
                                    xatarlari
                                    bo'yicha umumlashtiruvchi jadval
                                </th>
                            </tr>
                            <tr>
                                <th rowSpan="3" className="w-25 text-center align-middle">Tashkilotlar</th>
                                <th colSpan="6" className="text-center">Xatarlar darajasi</th>
                                <th rowSpan="3" colSpan="3" className=" text-center align-middle"> TOTAL</th>

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


                            <tr>
                                <td>"O`ZTRANSGAZ" AJ</td>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                                <td>6</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td>"NAVOIY KON-METALLURGIYA KOMBINATI" AJ</td>
                            </tr>
                            <tr>
                                <td>"OLMALIQ KON-METALLURGIYA KOMBINATI" AJ</td>
                            </tr>
                            <tr>
                                <td>"O`ZBEKISTON METALLURGIYA KOMBINATI" AJ</td>
                            </tr>
                            <tr>
                                <td>"FARG`ONAAZOT " AJ</td>
                            </tr>
                            <tr>
                                <td>"ISSIQLIK ELEKTR STANSIYALARI" AJ</td>
                            </tr>
                            <tr>
                                <td>"O'ZBEKKO'MIR" AJ</td>
                            </tr>
                            <tr>
                                <td>"O'ZBEKISTON TEMIR YO'LLARI" AJ</td>
                            </tr>
                            <tr>
                                <td>"UZBEKISTAN AIRWAYS" AJ</td>
                            </tr>
                            <tr>
                                <td>"O`ZBEKISTON POCHTASI" AJ</td>
                            </tr>
                            <tr>
                                <td>"UZBEKGIDROENERGO" AJ</td>
                            </tr>
                            <tr>
                                <td>"O'ZBEKNEFTGAZ" AJ</td>
                            </tr>
                            <tr>
                                <td>"ANGREN ISSIQLIK ELEKTR STANSIYASI" AJ</td>
                            </tr>
                            <tr>
                                <td>"O`ZBEKTELEKOM " AJ</td>
                            </tr>
                            <tr>
                                <td>"O'ZSUVTA'MINOT" AJ</td>
                            </tr>
                            <tr>
                                <td>"UZBEKISTAN AIRPORTS" AJ</td>
                            </tr>
                            <tr>
                                <td>"O'ZKIMYOSANOAT" AJ</td>
                            </tr>
                            <tr>
                                <td>"HUDUDGAZTA`MINOT" AJ</td>
                            </tr>
                            <tr>
                                <td>"TOSHSHAHARTRANSXIZMAT" AJ</td>
                            </tr>
                            <tr>
                                <td>"O'ZAVTOSANOATI" AJ</td>
                            </tr>
                            <tr>
                                <td>"HUDUDIY ELEKTR TARMOQLARI" AJ</td>
                            </tr>
                            <tr>
                                <td>"O'ZDONMAHSULOT" AJ</td>
                            </tr>
                            <tr>
                                <td>"O`ZBEKISTON MILLIY ELEKTR TARMOQLARI" AJ</td>
                            </tr>
                            <tr>
                                <td>"YANGI ANGREN ISSIQLIK ELEKTR STANSIYASI" AJ</td>
                            </tr>
                            <tr>
                                <td>"MAXSUSTRANS ISHLAB CHIQARISH BOSHQARMASI" DUK</td>
                            </tr>
                            <tr>
                                <td>"O`ZAERONAVIGATSIYA MARKAZI" DUK</td>
                            </tr>
                            <tr>
                                <td>TOSHKENT METROPOLITENI" УК</td>
                            </tr>
                            </tbody>

                        </table>
                    </div>

                </Tab>
            </Tabs>


        </>
    );
};


export default PersonalC;