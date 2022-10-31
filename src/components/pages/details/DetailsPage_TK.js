import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {IoReturnUpBackOutline} from "react-icons/io5";
import ClipLoader from "react-spinners/BeatLoader";
import Moment from "moment";

const DetailsPage = () => {
    const param = useParams();
    const [data, setLotInfo] = useState({});
    const [loading, setLoading] = useState(false);
    var t = 0;

    useEffect(() => {
        setLoading(true);
        fetch(process.env.REACT_APP_LOCAL_URL_GET_TK_BY_ID + `/${param.lot_id}`)
            .then((res) => res.json())
            .then((data) => {
                setLotInfo(data);

                if (data.claimInfoEtp.PAYLOAD.SPECIFICATIONS[0].NOTE[0] === undefined) {
                    data.claimInfoEtp.PAYLOAD.SPECIFICATIONS[0].NOTE[0] = "-";
                } else {
                }
            })
            .finally(() => {
                setLoading(false);
            });
    }, [param]);

    // 22.04.2021 йилдаги ЎРҚ-684-сон
    // 30-модда. Харид қилиш тартиб-таомилларини амалга ошириш турлари
    // Харид қилиш тартиб-таомилларини амалга ошириш турлари қуйидагилардан иборат:

    // 1.электрон дўкон;
    // 2.бошланғич нархни пасайтириш учун ўтказиладиган аукцион;
    // 3.энг яхши таклифларни танлаш;
    // 4.тендер;
    // 5.тўғридан-тўғри шартномалар бўйича амалга ошириладиган давлат харидлари;

    const TypeOfProcedure = (parameter) => {
        switch (parameter) {
            case 1:
                return "Tender";
            case 2:
                return "Konkurs";
            default:
                return "";
        }
    };

    const EtpName = (p) => {
        switch (p) {
            case 1:
                return "UZEX";
            case 2:
                return "XT-Xarid";
            case 3:
                return "Coopiration";
            case 4:
                return "Shaffof qurilish";
            default:
                return "";
        }
    };

    const linkTo = () => {
        console.log(data?.claimInfoEtp?.PAYLOAD.PROC_ID);
        if (data?.claimInfoEtp?.PAYLOAD.PROC_ID === 1) {
            return "tender";
        } else if (data?.claimInfoEtp?.PAYLOAD.PROC_ID === 2) {
            return "konkurs";
        }
    };

    return (
        <>
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-10 mb-2'>
                        {loading ? (
                            <ClipLoader color={"#0a99e0"} loading={loading} size={20}/>
                        ) : (
                            <h5>
                                LOT raqami:
                                <span
                                    className='px-2 ms-1'
                                    style={{
                                        borderBottom: "1px solid #DCE3E7",
                                        letterSpacing: "0.1em",
                                    }}
                                >
                  # {data?.claimInfoEtp?.PAYLOAD?.LOTID}
                </span>
                            </h5>
                        )}
                    </div>
                    <div className='col-2 text-right'>
                        <a
                            href={`/trades/${linkTo()}`}
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
                        <b>ETP:</b> {EtpName(data?.claimInfoEtp?.ETP_ID)}
                    </li>
                    <li className='list-group-item'>
                        <b className='me-2'>Savdo turi:</b>
                        {TypeOfProcedure(data?.claimInfoEtp?.PAYLOAD.PROC_ID)}
                    </li>
                    <li className='list-group-item'>
                        <b className='me-2'>G'aznachilik hisob raqami:</b>
                        {data?.claimInfoEtp?.PAYLOAD.KLS}
                    </li>
                    <li
                        className='list-group-item bg-light'
                        style={{color: "#8198B2", letterSpacing: 1}}
                    >
                        <h6 className='mt-1'>Ariza</h6>
                    </li>
                    <li className='list-group-item '>
                        <b>Boshlanish sanasi: </b>
                        {Moment(data?.claimInfoEtp?.PAYLOAD.DATE1PATTERNED).format(
                            "DD.MM.YYYY"
                        ) + " y."}
                    </li>
                    <li className='list-group-item '>
                        <b>Tugash sanasi: </b>
                        {Moment(data?.claimInfoEtp?.PAYLOAD.DATE2PATTERNED).format(
                            "DD.MM.YYYY"
                        ) + " y."}
                    </li>
                    <li className='list-group-item '>
                        <b>Summasi:</b>{" "}
                        <span style={{letterSpacing: 1}}>
              {data?.claimInfoEtp?.PAYLOAD.SUMMA}
            </span>
                    </li>
                    <li className='list-group-item '>
                        <b>Etkazib berish muddati:</b>{" "}
                        <span style={{letterSpacing: 1}}>
              {data?.claimInfoEtp?.PAYLOAD.SROK} oy.
            </span>
                    </li>
                    <li
                        className='list-group-item bg-light'
                        style={{color: "#8198B2", letterSpacing: 1}}
                    >
                        <h6 className='mt-1'>Xaridor</h6>
                    </li>
                    <li className='list-group-item '>
                        <b>Tashkilot:</b> {data?.claimInfoEtp?.PAYLOAD.ORGANNAME}
                    </li>
                    <li className='list-group-item '>
                        <b>Xizmat (mahsulot) qo`shimcha ma`lumot: </b>
                        {data?.claimInfoEtp?.PAYLOAD.PURPOSE}
                        {/* {data?.claimInfoEtp?.PAYLOAD.SPECIFICATIONS[0].NOTE[0]?.TECHSPEC} */}
                    </li>

                    <li
                        className='list-group-item bg-light'
                        style={{color: "#8198B2", letterSpacing: 1}}
                    >
                        <h6 className='mt-1'>Xizmat (mahsulot) ma'lumotlari</h6>
                    </li>

                    <li className='list-group-item'>
                        <table className='table table-hovered'>
                            <thead>
                            <tr>
                                <th className='text-center'>№</th>
                                <th>Nomi</th>
                                <th className='text-center'>TYMK *</th>
                                <th className='text-center'>Soni</th>
                                <th className='text-center'>Narxi</th>
                                <th className='text-center'>Umumniy narxi</th>
                            </tr>
                            </thead>
                            {data?.claimInfoEtp?.PAYLOAD.SPECIFICATIONS.map(function (n) {
                                return (
                                    <>
                                        <tbody>
                                        <tr>
                                            <td className='text-center'>{++t}.</td>
                                            <td>{n.TOVARNAME}</td>
                                            <td className='text-center text-info'>{n.TOVAR}</td>
                                            <td className='text-center'>{n.TOVARAMOUNT}</td>
                                            <td className='text-center'>{n.TOVARPRICE}</td>
                                            <td className='text-center'>{n.TOVARSUMMA}</td>
                                        </tr>
                                        </tbody>
                                    </>
                                );
                            })}
                        </table>
                    </li>

                    {/* <li
            className='list-group-item bg-light'
            style={{ color: "#8198B2", letterSpacing: 1 }}
          >
            <h6 className='mt-1'>Oylar bo'yicha</h6>
          </li>
          <li className='list-group-item'>
            <ul>
              {data?.claimInfoEtp?.PAYLOAD.SPECIFICATIONS[0].SPLIT.map(
                function (n) {
                  return (
                    <>
                      <li>Oy: {n.MONTH}</li>
                      <li>Soni: {n.TOVARAMOUNT}</li>
                      <table className='table table-hovered'>
                        <tr className='text-center'>
                          <th>Oy</th>
                          <th>Soni</th>
                        </tr>
                        <tr className='text-center'>
                          <td>{n.MONTH}</td>
                          <td>{n.TOVARAMOUNT}</td>
                        </tr>
                      </table>
                    </>
                  );
                }
              )}
            </ul>
          </li> */}
                    <li
                        className='list-group-item bg-light text-end pe-5 text-monospace'
                        style={{color: "#8198B2", letterSpacing: 1, fontSize: 12}}
                    >
                        * -{" "}
                        <a
                            href='src/components/pages/details/DetailsPage_TK'
                            className='text-decoration-none'
                        >
                            Tovarlarning yagona milliy klassifikatori
                        </a>{" "}
                        raqami
                    </li>
                </ul>
            </div>
        </>
    );
};
export default DetailsPage;
