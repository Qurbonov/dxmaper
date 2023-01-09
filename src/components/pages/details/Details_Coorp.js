import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {IoReturnUpBackOutline} from "react-icons/io5";
import Moment from "moment/moment";

const Details_Coorp = () => {
    const param = useParams();
    const [data, setLotInfo] = useState({});

    useEffect(() => {
        fetch(
            process.env.REACT_APP_LOCAL_URL_GET_COORP_BY_ID + `${param.id}`
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                console.log(data.PAYLOAD.SPECIFICATIONS);
                setLotInfo(data);
            })
            .finally(() => {
                // setLoading(false);
            });
    }, [param]);

    const etp = (etpid) => {
        switch (etpid) {
            case 1:
                return " UZEX";
            case 2:
                return " XT - Xarid";
            case 3:
                return (
                    " COOPERATION.UZ"
                );
            case 4:
                return (
                    " Shaffof qurilish"
                );
        }
    };

    return (
        <>
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-10 mb-2'>
                        <h5>
                            LOT raqami :
                            <span
                                className='px-2 ms-1'
                                style={{
                                    borderBottom: "1px solid #DCE3E7",
                                    letterSpacing: "0.1em",
                                }}
                            >
                 {data.PAYLOAD?.LOTID}
              </span>
                        </h5>
                    </div>
                    <div className='col-2 text-right'>
                        <a
                            href='/contractsCoorp'
                            className='link-secondary px-3 py-1 rounded float-md-end text-decoration-none'
                        >
                            <IoReturnUpBackOutline
                                size={30}
                                style={{
                                    color: "#4E78A9",
                                    marginLeft: "12",
                                    borderBottom: "1px solid #4E78A9",
                                }}
                            />
                        </a>
                    </div>
                </div>

                <ul className='list-group mb-5'>
                    <li
                        className='list-group-item bg-light'
                        style={{color: "#8198B2", letterSpacing: 1}}
                    >
                        <h6 className='mt-1'>Umumiy ma'lumot</h6>
                    </li>
                    <li className='list-group-item'>
                        <b>Elektron savdo maydoni :</b>
                        {etp(data.ETP_ID)}

                    </li>

                    <li
                        className='list-group-item bg-light'
                        style={{color: "#8198B2", letterSpacing: 1}}
                    >
                        <h6 className='mt-1'>Shartnoma</h6>
                    </li>
                    <li className='list-group-item '>
                        <b>Shartnoma raqami :</b> # {data.PAYLOAD?.CONTRACTNUM}
                    </li>
                    <li className='list-group-item '>
                        <b>Shartnoma imzolangan sana :</b>{data.PAYLOAD?.CONTRACTENDS} y.
                    </li>
                    <li className='list-group-item'>
                        <b className='me-2'>Maxsulot (xizmat):</b>
                        {data.PAYLOAD?.SPECIFICATIONS[0]?.TOVARNAME}
                    </li>
                    <li className='list-group-item '>
                        <b>Mahsulot (xizmat) narxi :</b>{" "}
                        <span style={{letterSpacing: 1}}>
                           test {data.PAYLOAD?.SPECIFICATIONS[0]?.TOVARPRICE}
                        </span>
                    </li>
                    {" "}
                    <li className='list-group-item '>
                        <b>Jami mahsulot (xizmat) soni :</b>{" "}
                        <span style={{letterSpacing: 1}}>
                        {data.PAYLOAD?.SPECIFICATIONS[0]?.TOVARAMOUNT}
                        </span>
                    </li>
                    {" "}
                    <li className='list-group-item '>
                        <b>Umumiy summa :</b>{" "}
                        {data.PAYLOAD?.SPECIFICATIONS[0]?.TOVARSUMMA}
                    </li>
                    {" "}

                    {" "}
                    <li
                        className='list-group-item bg-light'
                        style={{color: "#8198B2", letterSpacing: 1}}
                    >
                        <h6 className='mt-1'>Xaridor</h6>
                    </li>
                    {" "}
                    <li className='list-group-item '>
                        <b>Xaridor : </b> {data.customer}
                    </li>
                    {" "}
                    <li className='list-group-item '>
                        <b>Xaridor STIR raqami :</b> {data.innCustomer}
                    </li>
                    {" "}
                    <li className='list-group-item '>
                        <b>Xaridor manzili :</b> {data.areaCustomer}
                    </li>
                    {" "}
                    <li className='list-group-item '>
                        <b>Xaridor Hududi :</b> {data.regionCustomer}
                    </li>
                    <li
                        className='list-group-item bg-light'
                        style={{color: "#8198B2", letterSpacing: 1}}
                    >
                        <h6 className='mt-1'>Etkazib beruvchi tashkilot</h6>
                    </li>
                    <li className='list-group-item '>
                        <b>Etkazib beruvchi :</b> {data.provider}
                    </li>
                    <li className='list-group-item '>
                        <b>Etkazib beruvchi manzili :</b>{" "}
                        {data.areaProvider}
                    </li>
                    <li className='list-group-item '>
                        <b>Etkazib beruvchi hududi :</b>{" "}
                        {data.regionProvider}
                    </li>
                    <li className='list-group-item '>
                        <b>Etkazib beruvchi STIR raqami:</b>{" "}
                        {data.innProvider}
                    </li>
                </ul>
            </div>
        </>
    );
};
export default Details_Coorp;
