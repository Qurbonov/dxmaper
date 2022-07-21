import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { useEffect } from 'react';

const DetailsPage = () => {
  const param = useParams();
  const [data, setLotInfo] = useState({});

  useEffect(() => {
    console.log('params', param);
    fetch(`http://192.168.7.54:8585/v1/atm/getResultatById/${param.lot_id}`)
      .then((res) => res.json())
      .then((data) => {
        setLotInfo(data);
        console.log(data);
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
        return 'Akuksion (Amalga oshirilgan savdo)';
      case 6:
        return ' Elektron do`kon (Elektron katalog)';
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
        <div className='row '>
          <div className='col-10'>
            {' '}
            <h5>
              LOT raqami:{' '}
              <span className='text-info'>
                {data?.resultat?.PAYLOAD.LOTID}{' '}
              </span>{' '}
            </h5>
          </div>
          <div className='col-2 text-right'>
            {' '}
            <a href='http://localhost:3085/contracts'>Ro`yhat</a>
          </div>
        </div>

        <ul className='list-group mb-5'>
          <li className='list-group-item'>
            <b>ETP:</b> {EtpName(data?.resultat?.ETP_ID)}
          </li>
          <li className='list-group-item'>
            <b className='me-2'>Savdo turi:</b>
            {TypeOfProcedure(data?.resultat?.PAYLOAD.PROC_ID)}
          </li>
          <li className='list-group-item'>
            <b>Shartnoma raqami:</b> # {data?.resultat?.PAYLOAD.CONTRACTNUM}
          </li>
          <li className='list-group-item'>
            <b>Sharnoma imzolagan sanasi:</b>{' '}
            {data?.resultat?.PAYLOAD.CONTRACTDAT}
          </li>{' '}
          <li className='list-group-item'>
            <b>Shartnoma boshlanish vaqti:</b>{' '}
            {data?.resultat?.PAYLOAD.CONTRACTBEG}
          </li>
          <li className='list-group-item'>
            <b>Shartnoma tugash vaqti:</b> {data?.resultat?.PAYLOAD.CONTRACTEND}
          </li>
          <li className='list-group-item'>
            <b>Xaridor STIR raqami:</b> {data?.resultat?.PAYLOAD.INN}
          </li>{' '}
          <li className='list-group-item'>
            <b>Xaridor g'azna hisob raqami:</b> {data?.resultat?.PAYLOAD.LS}
          </li>
          <li className='list-group-item'>
            <b>Etkazib beruvchi:</b> {data?.resultat?.PAYLOAD.VENDORNAME}
          </li>
          <li className='list-group-item'>
            <b>Etkazib beruvchi STIR raqami:</b>{' '}
            {data?.resultat?.PAYLOAD.VENDORINN}
          </li>
          <li className='list-group-item'>
            <b>Beneficiar:</b> {data?.resultat?.PAYLOAD.BENEFICIAR}
          </li>
          <li className='list-group-item'>
            <b>Resstr ID:</b> {data?.resultat?.PAYLOAD.REESTR_ID}
          </li>
          <li className='list-group-item'>
            <b>Xizmat (mahsulot) nomi: </b>{' '}
            {data?.resultat?.PAYLOAD.SPECIFICATIONS[0].TOVARNAME}
          </li>
          <li className='list-group-item'>
            <b>Xizmat (mahsulot) qo`shimcha ma`lumot:</b>{' '}
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
            <b>Xizmat (mahsulot) soni:</b>{' '}
            {data?.resultat?.PAYLOAD.SPECIFICATIONS[0].SPLIT[0].TOVARAMOUNT}
          </li>{' '}
          <li className='list-group-item'>
            <b>O`lchov birligi:</b>{' '}
            {data?.resultat?.PAYLOAD.SPECIFICATIONS[0].PROPERTIES[0].VAL_NAME}
          </li>
          {/* <li className='list-group-item'>
            <b>Tashkiot:</b> {data?.resultat?.PAYLOAD.organ_name}
          </li>{' '} */}
        </ul>
      </div>
    </>
  );
};
export default DetailsPage;
