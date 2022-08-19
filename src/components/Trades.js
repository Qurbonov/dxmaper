import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
const Trades = () => {
  const [rabbitData, setRbtData] = useState([]);
  const [rabbitDataAE, setRbtDataAE] = useState([]);
  const [loading, setLoading] = useState(false);
  const [procedureName, setprocedureName] = useState("Tender");
  const getAllTenders = async () => {
    setprocedureName("Tender");
    try {
      const response = await axios.get(
        process.env.REACT_APP_LOCAL_URL_GET_TENDERS
      );
      setRbtData(response.data.body);
    } catch (error) {
      console.log(error);
    }
  };
  const getAuctions = async () => {
    setprocedureName("Auksion");
    try {
      const response = await axios.get(
        process.env.REACT_APP_LOCAL_URL_GET_AUCTIONS
      );
      setRbtDataAE(response.data.body);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllKonkurs = async () => {
    setprocedureName("Konkurs");
    try {
      const response = await axios.get(
        process.env.REACT_APP_LOCAL_URL_GET_KONKURS
      );
      setRbtData(response.data.body);
    } catch (error) {
      console.log(error);
    }
  };
  const getEMagazins = async () => {
    setprocedureName("Elektron do`kon");
    setLoading(true);
    try {
      const response = await axios.get(
        process.env.REACT_APP_LOCAL_URL_GET_EMAGAZINE
      );
      setRbtDataAE(response.data.body);
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
  const columnsAE = [
    {
      name: "Savdo maydoni",
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
      width: "10%",
    },
    {
      name: "Lot raqami",
      selector: (row) => (
        <div>
          <Link to={`/details_trade/${row.id}`}>{row.lot_id}</Link>
          {/* <a>{row.lot_id}</a> */}
          {/* <Link href='/components/DataTable/[id]' as='/components/DataTable/id'>
            <a>{row.lot_id}</a>
          </Link> */}
        </div>
      ),
      sortable: true,
      reorder: true,
      width: "25%",
    },
    {
      name: "Tashkilot nomi",
      selector: (row) => row.organ_name,
      sortable: true,
      reorder: true,
      width: "25%",
    },
    {
      name: "Mahsulot, xizmat",
      selector: (row) => row.tovar_name,
      sortable: true,
      reorder: true,
      width: "25%",
    },
    {
      name: "Kod",
      selector: (row) => row.tovar,
      sortable: true,
      reorder: true,
      width: "25%",
    },
    {
      name: "O`lchoiv birlik",
      selector: (row) => row.tovar_edizm,
      sortable: true,
      reorder: true,
      width: "25%",
    },
    {
      name: "Narx",
      selector: (row) => row.tovar_price,
      sortable: true,
      reorder: true,
      width: "25%",
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
      name: "Savdo turi",
      selector: (row) => {
        // eslint-disable-next-line default-case
        switch (row.pltf) {
          case 1:
            return "Auksion";
          case 2:
            return "Elektron do`kon";
        }
      },
      sortable: true,
      headerStyle: (selector, id) => {
        return { textAlign: "center" };
      },
    },
  ];

  useEffect(() => {
    getAllTenders();
  }, []);

  return (
    <>
      <Accordion className='rounded'>
        <Accordion.Item eventKey='0' className='bg-light'>
          <Accordion.Header>
            <span className='ms-2 text-secondary' style={{ fontSize: "1.1em" }}>
              Savdo turlari bo'yicha (Tender, Konkurs)
            </span>
          </Accordion.Header>
          <Accordion.Body>
            <div className='text-start ps-5 mt-3 pb-2 pe-5 border-bottom'>
              <div role='group'>
                <button
                  type='button'
                  className='btn px-3'
                  onClick={getAllTenders}
                >
                  Tender
                </button>

                <button
                  type='button'
                  className='btn px-3'
                  onClick={getAllKonkurs}
                >
                  Konkurs
                </button>
              </div>
            </div>
            <div className='w-100 min-vh-100'>
              <div className=' rounded-0 m-2'>
                <div
                  className='px-3 pt-2 rounded-top'
                  style={{
                    borderBottom: "1px solid #9FCAE5",
                  }}
                >
                  <h5>{procedureName}</h5>
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
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1' className='bg-light'>
          <Accordion.Header>
            <span className='ms-2 text-secondary' style={{ fontSize: "1.1em" }}>
              Savdo turlari bo'yicha (Auksion, Elektron do'kon)
            </span>
          </Accordion.Header>
          <Accordion.Body>
            <div className='text-start ps-5 mt-3 pb-2 pe-5 border-bottom'>
              <div role='group'>
                <button
                  type='button'
                  className='btn px-3'
                  onClick={getAuctions}
                >
                  Auksion
                </button>
                <button
                  type='button'
                  className='btn px-3'
                  onClick={getEMagazins}
                >
                  Elektron do'kon
                </button>
              </div>
            </div>
            <div className='w-100 min-vh-100'>
              <div className=' rounded-0 m-2'>
                <div
                  className='px-3 pt-2 rounded-top'
                  style={{
                    borderBottom: "1px solid #9FCAE5",
                  }}
                >
                  <h5>{procedureName}</h5>
                </div>

                <DataTable
                  columns={columnsAE}
                  data={rabbitDataAE}
                  pagination
                  highlightOnHover
                  responsive
                  fixedHeader
                  striped
                  progressPending={loading}
                  
                />
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Trades;
