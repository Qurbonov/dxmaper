import axios from 'axios';
import { useState, useEffect } from 'react';
import Navbar from '/components/navbar/navbar';

export default function complateData() {
  let { id } = useParams<"id">();
  if (isLoading) return <p>Loading...</p>;
  // if (!data) return <p>No profile data</p>;
  return (
    <>
      <Navbar />
  
      <div className='mt-4'>
        <div className='row '>
          <div className='col-10'>
            {' '}
            <h5>LOT ID: {data?.resultat?.PAYLOAD.LOTID} ma'lumotlari. </h5>{' '}
          </div>
          <div className='col-2 text-right'>
            {' '}
            <a href='/contrats'>Ro`yhat</a>
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
}
