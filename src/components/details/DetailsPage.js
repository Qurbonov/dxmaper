import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { useEffect } from 'react';

import { IoReturnUpBackOutline } from 'react-icons/io5';
import { FaFileContract } from 'react-icons/fa';
import { FcManager } from 'react-icons/fc';
import { FcBusinessman } from 'react-icons/fc';
import { FcMultipleInputs } from 'react-icons/fc';
import { FcDiploma1 } from 'react-icons/fc';
import { FcDisplay } from 'react-icons/fc';
const DetailsPage = () => {
  const param = useParams();
  const [data, setLotInfo] = useState({});

  useEffect(() => {
    fetch(`http://192.168.7.54:8585/v1/atm/getResultatById/${param.lot_id}`)
      .then((res) => res.json())
      .then((data) => {
        setLotInfo(data);
        if (data.resultat.PAYLOAD.SPECIFICATIONS[0].NOTE[0] == undefined) {
          data.resultat.PAYLOAD.SPECIFICATIONS[0].NOTE[0] = '-';
        } else {
          // console.log(
          //   'in fetch',
          //   data.resultat.PAYLOAD.SPECIFICATIONS[0].NOTE[0]
          // );
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
        return '';
      case 6:
        return 'Elektron do`kon (Elektron katalog)';
      case 17:
        return 'Tender';
      case 18:
        return 'Eng yahshi takliflarni tanlash (konkurs)';
      case 19:
        return 'To`g`ridan-to`g`ri shartnoma';
      default:
        return 'neutral';
    }
  };

  const EtpName = (p) => {
    switch (p) {
      case 1:
        return 'UZEX';
      case 2:
        return 'XT-Xarid';
      case 3:
        return 'Coopiration';
      case 4:
        return 'Shaffof qurilish';
      default:
        return 'neutral';
    }
  };

  return (
    <>
      <div className='container mt-4'>
        {/* {data.contractInfo[0].PAYLOAD.ID} */}
        <div className='row'>
          <div className='col-10 mb-2'>
            <h5 style={{}}>
              LOT raqami:{' '}
              <span
                className='px-2 ms-1'
                style={{
                  borderBottom: '1px solid #DCE3E7',
                  // backgroundColor: '#4E78A9',
                  letterSpacing: '0.1em',
                }}
              >
                # {data?.resultat?.PAYLOAD.LOTID}{' '}
              </span>{' '}
            </h5>
          </div>
          <div className='col-2 text-right  '>
            <a
              href='http://localhost:3085/contracts'
              className='link-secondary px-3 py-1 rounded float-md-end text-decoration-none'
            >
              <IoReturnUpBackOutline
                size={30}
                style={{
                  color: '#4E78A9',
                  marginLeft: '12',
                  borderBottom: '1px solid #4E78A9',
                }}
              />
            </a>
          </div>
        </div>

        <ul className='list-group mb-5 shadow'>
          <li
            className='list-group-item'
            style={{ backgroundColor: '#8198B2' }}
          >
            <h6 className='mt-1'>
              <FcDiploma1
                size={35}
                style={{ color: '#FFF', marginRight: '12' }}
              />
            </h6>
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
            className='list-group-item text-light'
            style={{
              backgroundColor: '#8198B2 ',
              borderTop: '1px solid #7195A6',
              borderBottom: '1px solid #7195A6',
              letterSpacing: '0.1em',
              paddingTop: '12px',
            }}
          >
            <h6 className='mt-1'>
              <FaFileContract
                size={35}
                style={{ color: '#FFF', marginRight: '12' }}
              />{' '}
              Shartnoma
            </h6>
          </li>
          <li className='list-group-item'>
            <b>Shartnoma raqami:</b> # {data?.resultat?.PAYLOAD.CONTRACTNUM}
          </li>
          {/* <li className='list-group-item'>
            <b>Sharnoma imzolagan sanasi:</b>{' '}
            {data?.resultat?.PAYLOAD.LOTDATES1}
          </li>{' '}
          <li className='list-group-item'>
            <b>Sharnoma imzolagan sanasi:</b>{' '}
            {data?.resultat?.PAYLOAD.LOTDATES2}
          </li>{' '} */}
          <li className='list-group-item'>
            <b>Sharnoma imzolagan sanasi:</b>{' '}
            {data?.resultat?.PAYLOAD.CONTRACTDATS}
          </li>{' '}
          <li className='list-group-item'>
            <b>Shartnoma boshlanish vaqti:</b>{' '}
            {data?.resultat?.PAYLOAD.CONTRACTBEGS}
          </li>
          <li className='list-group-item'>
            <b>Shartnoma tugash vaqti:</b>{' '}
            {data?.resultat?.PAYLOAD.CONTRACTENDS}
          </li>
          <li
            className='list-group-item'
            style={{ backgroundColor: '#8198B2' }}
          >
            <h6 className='mt-1'>
              <FcManager
                size={35}
                style={{ color: '#FFF', marginRight: '12' }}
              />{' '}
              Xaridor
            </h6>
          </li>
          <li className='list-group-item'>
            <b>Xaridor:</b> {data?.resultat?.PAYLOAD.ORGAN_NAME}
          </li>{' '}
          <li className='list-group-item'>
            <b>Xaridor STIR raqami:</b> {data?.resultat?.PAYLOAD.INN}
          </li>{' '}
          <li className='list-group-item'>
            <b>Xaridor g'azna hisob raqami:</b> {data?.resultat?.PAYLOAD.LS}
          </li>
          <li
            className='list-group-item'
            style={{ backgroundColor: '#8198B2' }}
          >
            <h6 className='mt-1'>
              <FcBusinessman
                size={35}
                style={{ color: '#FFF', marginRight: '12' }}
              />
              Etkazib beruvchi tashkilot
            </h6>
          </li>
          <li className='list-group-item'>
            <b>Etkazib beruvchi:</b> {data?.resultat?.PAYLOAD.VENDORNAME}
          </li>
          <li className='list-group-item'>
            <b>Etkazib beruvchi STIR raqami:</b>{' '}
            {data?.resultat?.PAYLOAD.VENDORINN}
          </li>
          <li
            className='list-group-item'
            style={{ backgroundColor: '#8198B2' }}
          >
            <h6 className='mt-1'>
              <FcMultipleInputs
                size={35}
                style={{ color: '#FFF', marginRight: '12' }}
              />
              Xizmat (mahsulot) ma'lumotlari
            </h6>
          </li>
          <li className='list-group-item'>
            <b>Xizmat (mahsulot) nomi: </b>{' '}
            {data?.resultat?.PAYLOAD.SPECIFICATIONS[0].TOVARNAME}
          </li>
          <li className='list-group-item'>
            <b>Xizmat (mahsulot) qo`shimcha ma`lumot:</b>{' '}
            {/*  note tekshirish ---------------------------------------------------------------------------------------------------------------------------*/}
            {data?.resultat?.PAYLOAD.SPECIFICATIONS[0].NOTE[0].TECHSPEC}
          </li>
          <li className='list-group-item'>
            <b>Izoh:</b> {data?.resultat?.PAYLOAD.PURPOSE}
          </li>
          <li className='list-group-item'>
            <b>Summasi:</b> {data?.resultat?.PAYLOAD.SUMMA}
          </li>
          <li className='list-group-item'>
            <b>Oylar soni:</b>{' '}
            {data?.resultat?.PAYLOAD.SPECIFICATIONS[0].SPLIT[0].MONTH}
          </li>
          <li className='list-group-item'>
            <b>O`lchov birligi:</b>{' '}
            {data?.resultat?.PAYLOAD.SPECIFICATIONS[0].PROPERTIES[0].VAL_NAME}
          </li>
          <li className='list-group-item'>
            <b>Xizmat (mahsulot) soni:</b>{' '}
            {data?.resultat?.PAYLOAD.SPECIFICATIONS[0].SPLIT[0].TOVARAMOUNT}
          </li>{' '}
          {/* <li className='list-group-item'>
            <b>Tashkiot:</b> {data?.resultat?.PAYLOAD.organ_name}
          </li>{' '} */}
        </ul>
      </div>
    </>
  );
};
export default DetailsPage;
