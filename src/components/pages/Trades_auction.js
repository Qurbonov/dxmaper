import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import Moment from "moment";
const Trades = () => {
  const [rabbitData, setRbtData] = useState([]);
  const [rabbitTotal, setRbtTotal] = useState();
  const countPerPage = 10;
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [procedureName, setprocedureName] = useState("Tender");

  const getAuctions = async () => {
    setprocedureName("Auksion");
    try {
      const response = await axios.get(
        process.env.REACT_APP_LOCAL_URL_GET_AUCTIONS +
          `?offset=${page}&limit=${countPerPage}`
      );
      setRbtData(response.data.body);
      setRbtTotal(response.data.total);
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
    getAuctions();
  }, [page]);

  return (
    <div className='w-100 min-vh-100'>
      <div className='mx-5'>
        <h5
          className='px-3 py-2 rounded bg-light text-primary'
          style={{
            borderBottom: "1px solid #9FCAE5",
          }}
        >
          {procedureName}
        </h5>
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
