import Moment from "moment";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { IoReturnUpBackOutline } from "react-icons/io5";

const DetailsPage = () => {
  var t = 0;
  const param = useParams();
  const [data, setLotInfo] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(process.env.REACT_APP_LOCAL_URL_GET_AE_BY_ID + `/${param.lot_id}`)
      .then((res) => res.json())
      .then((data) => {
        setLotInfo(data);
        // console.log(data);
        if (data.requestEtp.PAYLOAD.SPECIFICATIONS[0].NOTE[0] === undefined) {
          data.requestEtp.PAYLOAD.SPECIFICATIONS[0].NOTE[0] = "-";
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
        return "Auksion";
      case 2:
        return "Elektron do`kon (Elektron katalog)";
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

  const linkTo = () => {
    if (data?.requestEtp?.PAYLOAD.PLTF === 1) {
      return "auction";
    } else if (data?.requestEtp?.PAYLOAD.PLTF === 2) {
      return "ED";
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
                # {data?.requestEtp?.PAYLOAD?.LOTID}
              </span>
            </h5>
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
            style={{ color: "#8198B2", letterSpacing: 1 }}
          >
            <h6 className='mt-1'>Umumiy ma'lumot</h6>
          </li>
          <li className='list-group-item'>
            <b>ETP:</b> {EtpName(data?.requestEtp?.ETP_ID)}
          </li>
          <li className='list-group-item'>
            <b className='me-2'>Savdo turi:</b>
            {TypeOfProcedure(data?.requestEtp?.PAYLOAD.PLTF)}
          </li>
          <li
            className='list-group-item bg-light'
            style={{ color: "#8198B2", letterSpacing: 1 }}
          >
            <h6 className='mt-1'>Ariza</h6>
          </li>
          <li className='list-group-item '>
            <b>Topshirilgan sana: </b>
            {Moment(data?.requestEtp?.PAYLOAD.DOCDATEPATTERNED).format(
              "DD.MM.YYYY"
            ) + " y."}
          </li>
          <li className='list-group-item '>
            <b>Summasi:</b>{" "}
            <span style={{ letterSpacing: 1 }}>
              {data?.requestEtp?.PAYLOAD.SUMLOT}
            </span>
          </li>
          <li className='list-group-item '>
            <b> Band qilingan muddat: </b>
            {data?.requestEtp?.PAYLOAD.MONTH} oy.
          </li>
          <li
            className='list-group-item bg-light'
            style={{ color: "#8198B2", letterSpacing: 1 }}
          >
            <h6 className='mt-1'>Xaridor</h6>
          </li>
          <li className='list-group-item '>
            <b>Tashkilot:</b> {data?.requestEtp?.PAYLOAD.ORGANNAME}
          </li>

          <li
            className='list-group-item bg-light'
            style={{ color: "#8198B2", letterSpacing: 1 }}
          >
            <h6 className='mt-1'>Xizmat (mahsulot) ma'lumotlari</h6>
          </li>

          <li className='list-group-item'>
            <table className='table table-hover'>
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
              {data?.requestEtp?.PAYLOAD.SPECIFICATIONS.map(function (n) {
                return (
                  <>
                    <tbody>
                      <tr key={n.id}>
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
          <li
            className='list-group-item bg-light text-end pe-5 text-monospace'
            style={{ color: "#8198B2", letterSpacing: 1, fontSize: 12 }}
          >
            * -{" "}
            <a
              href='http://tasniflagich.mf.uz/'
              className='text-decoration-none'
            >
              Tovarlarning yagona milliy klassifikatori
            </a>{" "}
            raqami
          </li>
          {/* <li className='list-group-item '>
            <b>Xizmat (mahsulot) nomi: </b>{" "}
            {data?.requestEtp?.PAYLOAD.SPECIFICATIONS[0].TOVARNAME}
          </li>
          <li className='list-group-item '>
            <b>Xizmat (mahsulot) qo`shimcha ma`lumot:</b>{" "}
            {data?.requestEtp?.PAYLOAD.SPECIFICATIONS[0].NOTE[0]?.TECHSPEC}
          </li>
          <li className='list-group-item '>
            <b>Izoh:</b> {data?.requestEtp?.PAYLOAD.PURPOSE}
          </li> */}
        </ul>
      </div>
    </>
  );
};
export default DetailsPage;
