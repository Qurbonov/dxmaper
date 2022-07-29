import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

const Trades = () => {
  const [rabbitData, setRbtData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [btnName, setBtnName] = useState("Tender");
  const getAllTenders = async () => {
    setBtnName("Tender");
    try {
      const response = await axios.get(
        process.env.REACT_APP_LOCAL_URL_GET_TENDERS
      );
      setRbtData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getAuctions = async () => {
    setBtnName("Auksion");
    try {
      const response = await axios.get(
        process.env.REACT_APP_LOCAL_URL_GET_AUCTIONS
      );
      setRbtData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllKonkurs = async () => {
    setBtnName("Konkurs");
    try {
      const response = await axios.get(
        process.env.REACT_APP_LOCAL_URL_GET_KONKURS
      );
      setRbtData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getEMagazins = async () => {
    setBtnName("Elektron do`kon");
    setLoading(true);
    try {
      const response = await axios.get(
        process.env.REACT_APP_LOCAL_URL_GET_EMAGAZINE
      );
      setRbtData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const columns = [
    {
      name: "Tashkilot nomi",
      selector: (row) => row.organ_name,
      sortable: true,
      reorder: true,
      width: "25%",
      headerStyle: (selector, id) => {
        return { textAlign: "left" };
      },
    },
    {
      name: "Etkazib beruvchi STIR raqami",
      selector: (row) => row.vendor_inn,
      sortable: true,
      reorder: true,
    },

    {
      name: "Lot raqami",
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
      name: "Tashkilot turi",
      selector: (row) => (row.maloy == "Y" ? "Kichik bizness" : "Tashkilot"),
      sortable: true,
      reorder: true,
    },
    {
      name: "Summasi",
      selector: (row) => row.summa,
      sortable: true,
      reorder: true,
    },
    {
      name: "Lot summasi",
      selector: (row) => row.sum_lot,
      sortable: true,
      reorder: true,
    },
    {
      name: "Oy (blok summa)",
      selector: (row) => row.month,
      sortable: true,
      reorder: true,
    },
    {
      name: "Sana",
      selector: (row) => row.doc_date,
      sortable: true,
      reorder: true,
    },
    {
      name: "Shartnoma sanasi",
      selector: (row) => row.contract_date,
      sortable: true,
      reorder: true,
    },
    {
      name: "Savdo turi",
      selector: (row) => {
        // eslint-disable-next-line default-case
        switch (row.proc_id) {
          case 6:
            return "Elektron katalog";
          case 3:
            return "kelishuv amalga oshdi";
          case 17:
            return "Tender";
          case 18:
            return "Konkurs";
          case 19:
            return "To'g'ridan to'g'ri shartnomalar";
        }
      },
      sortable: true,
      headerStyle: (selector, id) => {
        return { textAlign: "center" };
      },
    },
    {
      name: "ETP",
      selector: (row) => {
        // eslint-disable-next-line default-case
        switch (row.etp_id) {
          case 1:
            return "UZEX";
          case 2:
            return "XT-Xarid";
          case 3:
            return "Coopiration";
          case 4:
            return "Shaffof qurilish";
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
      <div className='text-start ps-5 mt-3 pb-2 pe-5 border-bottom'>
        <div role='group'>
          <button type='button' className='btn px-3' onClick={getAllTenders}>
            Tender
          </button>
          <button type='button' className='btn px-3' onClick={getAuctions}>
            Auksion
          </button>
          <button type='button' className='btn px-3' onClick={getEMagazins}>
            Elektron do'kon
          </button>
          <button type='button' className='btn px-3' onClick={getAllKonkurs}>
            Konkurs
          </button>
        </div>
      </div>
      {/* <div className='pb-4 border-bottom  border-light'>
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
      </div> */}
      <div className=' rounded-0 m-2'>
        <div
          className='px-3 pt-2 rounded-top'
          style={{
            borderBottom: "1px solid #9FCAE5",
          }}
        >
          <h5> {btnName}</h5>
        </div>
        <DataTable
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
