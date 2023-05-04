import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import Moment from "moment";

const Trades_tender = () => {
  const [rabbitData, setRbtData] = useState([]);
  const [rabbitTotal, setRbtTotal] = useState();
  const countPerPage = 10;
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [procedureName, setprocedureName] = useState("Elektron tender");

  const getAllTenders = async () => {
    setprocedureName("Elektron tender");
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

  useEffect(() => {
    getAllTenders();
  }, [page]);

  return (
    <div className='w-100 min-vh-100'>
      <div className='mx-5'>
        <h5
          className='px-3 py-2 rounded bg-light text-primary'
          style={{ borderBottom: "1px solid #9FCAE5" }}
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
          responsive
          highlightOnHover
          fixedHeader
          striped
          progressPending={loading}
        />
      </div>
    </div>
  );
};

export default Trades_tender;
