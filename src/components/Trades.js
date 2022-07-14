import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

const Trades = () => {
  const [rabbitData, setRbtData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getAllTenders = async () => {
    console.log('getAllTenders');
    try {
      const response = await axios.get(
        'http://192.168.7.54:8585/v1/atm/getAllTenders'
      );
      setRbtData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getAuctions = async () => {
    console.log('getAuctions');
    try {
      const response = await axios.get(
        'http://192.168.7.54:8585/v1/atm/getAuctions'
      );
      setRbtData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllKonkurs = async () => {
    console.log('getAllKonkurs');
    try {
      const response = await axios.get(
        'http://192.168.7.54:8585/v1/atm/getAllKonkurs'
      );
      setRbtData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getEMagazins = async () => {
    console.log('getEMagazins');
    setLoading(true);
    try {
      const response = await axios.get(
        'http://192.168.7.54:8585/v1/atm/getEMagazins'
      );
      setRbtData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const columns = [
    {
      name: 'Tashkilot nomi',
      selector: (row) => row.organ_name,
      sortable: true,
      reorder: true,
      width: '25%',
      headerStyle: (selector, id) => {
        return { textAlign: 'left' };
      },
    },
    {
      name: 'Etkazib beruvchi STIR raqami',
      selector: (row) => row.vendor_inn,
      sortable: true,
      reorder: true,
    },

    {
      name: 'Lot raqami',
      selector: (row) => (
        <div>
          <a>{row.lot_id}</a>
          {/* <Link href='/components/DataTable/[id]' as='/components/DataTable/id'>
            <a>{row.lot_id}</a>
          </Link> */}
        </div>
      ),
      sortable: true,
      reorder: true,
    },
    {
      name: 'Tashkilot turi',
      selector: (row) => (row.maloy == 'Y' ? 'Kichik bizness' : 'Tashkilot'),
      sortable: true,
      reorder: true,
    },
    {
      name: 'Summasi',
      selector: (row) => row.summa,
      sortable: true,
      reorder: true,
    },
    {
      name: 'Lot summasi',
      selector: (row) => row.sum_lot,
      sortable: true,
      reorder: true,
    },
    {
      name: 'Oy (blok summa)',
      selector: (row) => row.month,
      sortable: true,
      reorder: true,
    },
    {
      name: 'Sana',
      selector: (row) => row.doc_date,
      sortable: true,
      reorder: true,
    },
    {
      name: 'Shartnoma sanasi',
      selector: (row) => row.contract_dat,
      sortable: true,
      reorder: true,
    },
    {
      name: 'Savdo turi',
      selector: (row) => {
        // eslint-disable-next-line default-case
        switch (row.proc_id) {
          case 6:
            return 'Elektron katalog';
          case 3:
            return 'kelishuv amalga oshdi';
          case 17:
            return 'Tender';
          case 18:
            return 'Konkurs';
          case 19:
            return "To'g'ridan to'g'ri shartnomalar";
        }
      },
      sortable: true,
      headerStyle: (selector, id) => {
        return { textAlign: 'center' };
      },
    },
    {
      name: 'ETP',
      selector: (row) => {
        // eslint-disable-next-line default-case
        switch (row.etp_id) {
          case 1:
            return 'UZEX';
          case 2:
            return 'XT-Xarid';
          case 3:
            return 'Coopiration';
          case 4:
            return 'Shaffof qurilish';
        }
      },
      sortable: true,
      reorder: true,
    },
  ];

  useEffect(() => {
    getAllTenders();
  }, []);

  return (
    <div className='w-100 min-vh-100'>
      <div className='pb-4 border-bottom  border-light'>
        <button className='btn btn-link m-2' onClick={getAllTenders}>
          Tender
        </button>
        <button className='btn btn-link m-2' onClick={getAuctions}>
          Auksion
        </button>
        <button className='btn btn-link m-2' onClick={getEMagazins}>
          Elektron do'kon
        </button>
        <button className='btn btn-link m-2' onClick={getAllKonkurs}>
          Konkurs
        </button>
      </div>
      <div className='shadow rounded-0 m-2'>
        <DataTable
          title='Savdolar'
          columns={columns}
          data={rabbitData}
          pagination
          highlightOnHover
          responsive
          fixedHeader
          striped
          progressPending={loading}
        />
      </div>
    </div>
  );
};

export default Trades;
