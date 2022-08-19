import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import Moment from "moment";
const Trades = () => {
  const [rabbitData, setRbtData] = useState([]);
  const [rabbitDataAE, setRbtDataAE] = useState([]);
  const [rabbitTotal, setRbtTotal] = useState();
  const [rabbitTotalAE, setRbtTotalAE] = useState();
  const countPerPage = 10;
  const countPerPageAE = 10;
  const [page, setPage] = useState(1);
  const [pageAE, setPageAE] = useState(1);
  const [loading, setLoading] = useState(false);
  const [procedureName, setprocedureName] = useState("Tender");
  const [isActive, setActive] = useState("true");
  const [isActive2, setActive2] = useState("false");

  const getAllTenders = async () => {
    // setActive(isActive);
    if (!isActive) {
      setActive("true");
      setActive2("false");
    }
    // setActive2(isActive);
    setprocedureName("Tender");
    try {
      const response = await axios.get(
        process.env.REACT_APP_LOCAL_URL_GET_TENDERS +
          `?offset=${page}&limit=${countPerPage}`
      );
      setRbtData(response.data.body);
      setRbtTotal(response.data.total);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllKonkurs = async () => {
    if (!isActive) {
      setActive("true");
      setActive2("false");
    }
    setprocedureName("Konkurs");
    try {
      const response = await axios.get(
        process.env.REACT_APP_LOCAL_URL_GET_KONKURS +
          `?offset=${page}&limit=${countPerPage}`
      );
      setRbtData(response.data.body);
      setRbtTotal(response.data.total);
    } catch (error) {
      console.log(error);
    }
  };
  const getAuctions = async () => {
    if (isActive) {
      setActive(!isActive);
      setActive2(!isActive);
    }

    setprocedureName("Auksion");
    try {
      const response = await axios.get(
        process.env.REACT_APP_LOCAL_URL_GET_AUCTIONS +
          `?offset=${page}&limit=${countPerPage}`
      );
      setRbtDataAE(response.data.body);
      setRbtTotalAE(response.data.total);
    } catch (error) {
      console.log(error);
    }
  };

  const getEMagazins = async () => {
    if (isActive) {
      setActive(!isActive);
      setActive2(!isActive);
    }
    setprocedureName("Elektron do`kon");
    setLoading(true);
    try {
      const response = await axios.get(
        process.env.REACT_APP_LOCAL_URL_GET_EMAGAZINE +
          `?offset=${page}&limit=${countPerPage}`
      );
      setRbtDataAE(response.data.body);
      setRbtTotalAE(response.data.total);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
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
      width: "9%",
    },
    {
      name: "Lot raqami",
      selector: (row) => <Link to={`/details_tk/${row.id}`}>{row.lot_id}</Link>,
      sortable: true,
      reorder: true,
      width: "10%",
    },
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
      name: "Tashkilot STIR",
      selector: (row) => row.inn,
      sortable: true,
      reorder: true,
      width: "9%",
      headerStyle: (selector, id) => {
        return { textAlign: "left" };
      },
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
      width: "12%",
    },

    {
      name: "Boshlanish sanasi",
      selector: (row) => Moment(row.date1).format("DD. MM. YYYY") + " y.",
      sortable: true,
      reorder: true,
      width: "10%",
    },
    {
      name: "Tugash sanasi",
      selector: (row) => Moment(row.date2).format("DD. MM. YYYY") + " y.",
      sortable: true,
      reorder: true,
      width: "9%",
    },
  ];
  const columnsAE = [
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
      width: "10%",
    },
    {
      name: "Lot raqami",
      selector: (row) => (
        <Link to={`/details_trade/${row.id}`}>{row.lot_id}</Link>
      ),
      sortable: true,
      reorder: true,
      width: "10%",
    },
    {
      name: "Tashkilot nomi",
      selector: (row) => row.organ_name,
      sortable: true,
      reorder: true,
      width: "15%",
      headerStyle: (selector, id) => {
        return { textAlign: "left" };
      },
    },
    {
      name: "Tashkilot turi",
      selector: (row) => (row.maloy === "Y" ? "Kichik bizness" : "Tashkilot"),
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
      name: "Oy (blok muddati)",
      selector: (row) => row.month,
      sortable: true,
      reorder: true,
    },
    {
      name: "E'lon berilgan sana",
      selector: (row) => Moment(row.doc_date).format("DD. MM. YYYY") + " y.",
      sortable: true,
      reorder: true,
    },
  ];

  useEffect(() => {
    getAllTenders();
  }, [page, pageAE]);

  return (
    <div className='w-100 min-vh-100'>
      <div
        className='text-center rounded my-3 mx-5 py-2 '
        style={{ background: "#c3d3e0" }}
      >
        <div role='group'>
          <button type='button' className='btn px-3' onClick={getAllTenders}>
            Tender
          </button>{" "}
          |
          <button
            type='button'
            className='btn text-dark px-3'
            onClick={getAllKonkurs}
          >
            Konkurs
          </button>
          |
          <button
            type='button'
            className='btn text-dark px-3'
            onClick={getAuctions}
          >
            Auksion
          </button>{" "}
          |
          <button
            type='button'
            className='btn text-dark px-3'
            onClick={getEMagazins}
          >
            Elektron do'kon
          </button>
        </div>
      </div>

      <div className='mx-5'>
        <h5
          className='px-3 py-2 rounded bg-light text-primary'
          style={{
            borderBottom: "1px solid #9FCAE5",
          }}
        >
          {procedureName}
        </h5>
        {isActive && (
          <DataTable
            columns={columns}
            data={rabbitData}
            pagination
            paginationServer
            paginationTotalRows={rabbitTotal}
            paginationPerPage={countPerPage}
            paginationComponentOptions={{
              noRowsPerPage: true,
            }}
            onChangePage={(page) => setPage(page)}
            responsive
            highlightOnHover
            fixedHeader
            striped
            progressPending={loading}
          />
        )}

        {!isActive2 && (
          <DataTable
            columns={columnsAE}
            data={rabbitDataAE}
            pagination
            // paginationComponentOptions={paginationOptions}
            paginationServer
            paginationTotalRows={rabbitTotalAE}
            paginationPerPage={countPerPageAE}
            paginationComponentOptions={{
              noRowsPerPage: true,
            }}
            onChangePage={(pageAE) => setPageAE(pageAE)}
            highlightOnHover
            responsive
            fixedHeader
            striped
            progressPending={loading}
          />
        )}
      </div>
    </div>
  );
};

export default Trades;
