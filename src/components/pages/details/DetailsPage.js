import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {IoReturnUpBackOutline} from "react-icons/io5";

const DetailsPage = () => {
    const param = useParams();
    const [data, setLotInfo] = useState({});

    useEffect(() => {
        fetch(
            process.env.REACT_APP_LOCAL_URL_GET_RESULTAT_BY_ID + `/${param.lot_id}`
        )
            .then((res) => res.json())
            .then((data) => {
                setLotInfo(data);
                console.log(data);
                if (data.resultat.PAYLOAD.SPECIFICATIONS[0].NOTE[0] === undefined) {
                    data.resultat.PAYLOAD.SPECIFICATIONS[0].NOTE[0] = "-";
                } else {
                }
            })
            .finally(() => {
                // setLoading(false);
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
            case 3:
                return "";
            case 6:
                return "Elektron do`kon (Elektron katalog)";
            case 17:
                return "Tender";
            case 18:
                return "Eng yahshi takliflarni tanlash (konkurs)";
            case 19:
                return "To`g`ridan-to`g`ri shartnoma";
            default:
                return "neutral";
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
                return "neutral";
        }
    };

    const docs = (l) => {
        for (let index = 0; index < 4; index++) {
            console.log(index);
        }
    };

    return (
        <>
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-10 mb-2'>
                        <h5>
                            LOT raqami:
                            <span
                                className='px-2 ms-1'
                                style={{
                                    borderBottom: "1px solid #DCE3E7",
                                    letterSpacing: "0.1em",
                                }}
                            >
                # {data?.resultat?.PAYLOAD.LOTID}
              </span>
                        </h5>
                    </div>
                    <div className='col-2 text-right'>
                        <a
                            href='/contracts'
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
                        <b>ETP:</b> {EtpName(data?.resultat?.ETP_ID)}
                    </li>
                    <li className='list-group-item'>
                        <b className='me-2'>Savdo turi:</b>
                        {TypeOfProcedure(data?.resultat?.PAYLOAD.PROC_ID)}
                    </li>
                    <li className='list-group-item'>
                        <b>Beneficiar:</b> {data?.resultat?.PAYLOAD.BENEFICIAR}
                    </li>
                    <li className='list-group-item'>
                        <b>Reestr ID:</b> {data?.resultat?.PAYLOAD.REESTR_ID}
                    </li>
                    <li
                        className='list-group-item bg-light'
                        style={{color: "#8198B2", letterSpacing: 1}}
                    >
                        <h6 className='mt-1'>Shartnoma</h6>
                    </li>
                    <li className='list-group-item '>
                        <b>Shartnoma raqami:</b> # {data?.resultat?.PAYLOAD.CONTRACTNUM}
                    </li>
                    <li className='list-group-item '>
                        <b>Summasi:</b>{" "}
                        <span style={{letterSpacing: 1}}>
              {data?.resultat?.PAYLOAD.SUMMA}
            </span>
                    </li>
                    <li className='list-group-item '>
                        <b>Sharnoma imzolagan sanasi:</b>{" "}
                        {data?.resultat?.PAYLOAD.CONTRACTDATS}
                    </li>
                    {" "}
                    <li className='list-group-item '>
                        <b>Shartnoma boshlanish vaqti:</b>{" "}
                        {data?.resultat?.PAYLOAD.CONTRACTBEGS}
                    </li>
                    <li className='list-group-item '>
                        <b>Shartnoma tugash vaqti:</b>{" "}
                        {data?.resultat?.PAYLOAD.CONTRACTENDS}
                    </li>
                    <li
                        className='list-group-item bg-light'
                        style={{color: "#8198B2", letterSpacing: 1}}
                    >
                        <h6 className='mt-1'>Xaridor</h6>
                    </li>
                    <li className='list-group-item '>
                        <b>Xaridor:</b> {data?.resultat?.PAYLOAD.ORGAN_NAME}
                    </li>
                    {" "}
                    <li className='list-group-item '>
                        <b>Xaridor STIR raqami:</b> {data?.resultat?.PAYLOAD.INN}
                    </li>
                    {" "}
                    <li className='list-group-item '>
                        <b>Xaridor g'azna hisob raqami:</b> {data?.resultat?.PAYLOAD.LS}
                    </li>
                    <li
                        className='list-group-item bg-light'
                        style={{color: "#8198B2", letterSpacing: 1}}
                    >
                        <h6 className='mt-1'>Etkazib beruvchi tashkilot</h6>
                    </li>
                    <li className='list-group-item '>
                        <b>Etkazib beruvchi:</b> {data?.resultat?.PAYLOAD.VENDORNAME}
                    </li>
                    <li className='list-group-item '>
                        <b>Etkazib beruvchi hududi:</b>{" "}
                        {data?.resultat?.PAYLOAD.vendor_terr_name}
                    </li>
                    <li className='list-group-item '>
                        <b>Etkazib beruvchi STIR raqami:</b>{" "}
                        {data?.resultat?.PAYLOAD.VENDORINN}
                    </li>
                    <li
                        className='list-group-item bg-light'
                        style={{color: "#8198B2", letterSpacing: 1}}
                    >
                        <h6 className='mt-1'>Xizmat (mahsulot) ma'lumotlari</h6>
                    </li>
                    <li className='list-group-item '>
                        <b>Xizmat (mahsulot) nomi: </b>{" "}
                        {data?.resultat?.PAYLOAD.SPECIFICATIONS[0].TOVARNAME}
                    </li>
                    <li className='list-group-item '>
                        <b>Xizmat (mahsulot) qo`shimcha ma`lumot:</b>{" "}
                        {data?.resultat?.PAYLOAD.SPECIFICATIONS[0].NOTE[0]?.TECHSPEC}
                    </li>
                    <li className='list-group-item '>
                        <b>Izoh:</b> {data?.resultat?.PAYLOAD.PURPOSE}
                    </li>
                    <li className='list-group-item '>
                        <b>Oylar soni:</b>{" "}
                        {data?.resultat?.PAYLOAD?.SPECIFICATIONS[0]?.SPLIT[0]?.MONTH}
                    </li>
                    <li className='list-group-item '>
                        <b>O`lchov birligi:</b>{" "}
                        {data?.resultat?.PAYLOAD?.SPECIFICATIONS[0]?.PROPERTIES[0]?.VAL_NAME}
                    </li>
                    <li className='list-group-item '>
                        <b>Xizmat (mahsulot) soni:</b>{" "}
                        {data?.resultat?.PAYLOAD.SPECIFICATIONS[0]?.SPLIT[0]?.TOVARAMOUNT}
                    </li>
                    <li className='list-group-item '>
                        <b>
                            {data?.resultat?.PAYLOAD.LINKS.length > 0 ? (
                                <b className='text-dark'>Lot xujjatlari:</b>
                            ) : (
                                <b className='text-danger'>Lot xujjatlari mavjud emas</b>
                            )}
                        </b>
                    </li>
                    <li className='list-group-item'>
                        {data?.resultat?.PAYLOAD.LINKS.map(function (n) {
                            return (
                                <>
                                    <ul className='list-group'>
                                        <li className='list-group-item'>
                                            {n.id}. &nbsp;
                                            <a
                                                className='link-primary text-decoration-none'
                                                key={n.id}
                                                href={n.LINK}
                                            >
                                                {n.FILENAME}
                                            </a>
                                        </li>
                                    </ul>
                                </>
                            );
                        })}
                    </li>
                </ul>
            </div>
        </>
    );
};
export default DetailsPage;
