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
  return (
    <>
      <div className='container mt-4'>
        <div className='row '>
          <div className='col-10'>
            {' '}
            <h5>LOT ID: {data?.resultat?.PAYLOAD.LOTID} ma'lumotlari. </h5>{' '}
          </div>
          <div className='col-2 text-right'>
            {' '}
            <a href='http://localhost:3085/contracts'>Ro`yhat</a>
          </div>
        </div>

        <ul className='list-group'>
          <li className='list-group-item'>
            <b>lot raqami:</b> {data?.resultat?.PAYLOAD.LOTID}
          </li>
          <li className='list-group-item'>
            <b>shartnoma raqami:</b> {data?.resultat?.PAYLOAD.CONTRACTNUM}
          </li>
          <li className='list-group-item'>
            <b>sharnoma imzolagan sanasi:</b>{' '}
            {data?.resultat?.PAYLOAD.CONTRACTDAT}
          </li>
          <li className='list-group-item'>
            <b>etkazib beruvchi:</b> {data?.resultat?.PAYLOAD.VENDORNAME}
          </li>
          <li className='list-group-item'>
            <b>summasi:</b> {data?.resultat?.PAYLOAD.SUMMA}
          </li>
          <li className='list-group-item'>
            <b>xizmat (tovar) nomi: </b>{' '}
            {data?.resultat?.PAYLOAD.SPECIFICATIONS[0].TOVARNAME}
          </li>{' '}
          <li className='list-group-item'>
            <b>izoh:</b> {data?.resultat?.PAYLOAD.PURPOSE}
          </li>
          <li className='list-group-item'>
            <b>Tashkiot:</b> {data?.resultat?.PAYLOAD.organ_name}
          </li>
        </ul>
      </div>
    </>
  );
};
export default DetailsPage;
