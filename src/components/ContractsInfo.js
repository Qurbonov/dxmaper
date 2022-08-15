import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import Accordion from "react-bootstrap/Accordion";
import { FcTodoList } from "react-icons/fc";
import { FcEmptyFilter } from "react-icons/fc";
const ContractsInfo = () => {
  const [rabbitData, setRbtData] = useState([]);
  const [rabbitTotal, setRbtTotal] = useState();
  const [loading, setLoading] = useState(false);
  const dLen = rabbitData.length;
  // console.log(dLen);
  const [query, setQuery] = useState({});
  const [etp, setEtp] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));
  const [page, setPage] = useState(1);
  const countPerPage = 10;
  const getResultsData = () => {
    setLoading(true);
    // console.log(process.env.REACT_APP_LOCAL_URL_GET_RESULTATS);
    axios
      .get(
        process.env.REACT_APP_LOCAL_URL_GET_RESULTATS +
          `?offset=${page}&limit=${countPerPage}`,
        {
          params: {
            // page: page,
            // per_page: countPerPage,
            // delay: 1,
            // limit: 10,
            // offset: 1,
            ...query,
          },
        }
      )
      .then((response) => {
        setRbtData(response.data.body);
        setRbtTotal(response.data.total);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getResultsData();
  }, [query, page]);

  const columns = React.useMemo(() => [
    {
      name: "ETP",
      selector: (row) => {
        // eslint-disable-next-line default-case
        switch (row.etp_id) {
          case 1:
            return <div className='rounded px-3 py-1 bg-light'>UZEX</div>;
          case 2:
            return <div className='rounded px-3 py-1 bg-light'>XT-Xarid</div>;
          case 3:
            return (
              <div className='rounded px-3 py-1 bg-light'>Coopiration</div>
            );
          case 4:
            return (
              <div className='rounded px-3 py-1 bg-light'>Shaffof qurilish</div>
            );
        }
      },
      sortable: true,
      reorder: true,
      width: "12%",
    },
    {
      name: "Savdo turi",
      selector: (row) => {
        // eslint-disable-next-line default-case
        // 22.04.2021 йилдаги ЎРҚ-684-сон
        // 30-модда. Харид қилиш тартиб-таомилларини амалга ошириш турлари
        // Харид қилиш тартиб-таомилларини амалга ошириш турлари қуйидагилардан иборат:

        // 1.электрон дўкон;
        // 2.бошланғич нархни пасайтириш учун ўтказиладиган аукцион;
        // 3.энг яхши таклифларни танлаш;
        // 4.тендер;
        // 5.тўғридан-тўғри шартномалар бўйича амалга ошириладиган давлат харидлари;
        // eslint-disable-next-line default-case
        switch (row.proc_id) {
          case 6:
            return "Elektron katalog";
          case 3:
            return "Auksion (Amalga oshirilgan savdo)";
          case 17:
            return "Tender";
          case 18:
            return "Konkurs";
          case 19:
            return "To'g'ridan to'g'ri shartnoma";
        }
      },
      sortable: true,
      width: "18%",
    },
    {
      name: "Lot raqami",
      selector: (row) => <Link to={`/details/${row.id}`}>{row.lot_id}</Link>,
      sortable: true,
      reorder: true,
      width: "10%",
    },
    {
      name: "Hudud (etkazib beruvchi)",
      selector: (row) => (row.v_terr == null ? "-" : row.v_terr),
      sortable: true,
      reorder: true,
      width: "10%",
    },
    // {
    //   name: 'Tashkilot nomi (xaridor)',

    //   selector: (row) => row.organ_name,
    //   sortable: true,
    //   reorder: true,
    //   wrap: true,
    //   width: '8%',
    // },
    // {
    //   name: 'Tashkilot STIRi (xaridor)',
    //   selector: (row) => row.inn,
    //   sortable: true,
    //   reorder: true,
    // },

    // {
    //   name: 'Etkazib beruvchi tashkilot',
    //   selector: (row) => row.vendor_name,
    //   sortable: true,
    //   reorder: true,
    //   wrap: true,
    //   width: '8%',
    // },
    // {
    //   name: 'Etkazib beruvchi STIR raqami',
    //   selector: (row) => row.vendor_inn,
    //   sortable: true,
    //   reorder: true,
    // },
    {
      name: "Ma`lumot",
      selector: (row) => row.purpose,
      sortable: true,
      reorder: true,
      wrap: true,
      width: "30%",
    },
    // {
    //   name: 'Beneficiar',
    //   selector: (row) => row.beneficiar,
    //   sortable: true,
    //   reorder: true,
    // },

    {
      name: "Shartnoma raqami",
      selector: (row) => row.contract_num,
      sortable: true,
      reorder: true,
      width: "12%",
    },
    // {
    //   name: 'Shartnoma sanasi',
    //   selector: (row) => row.contract_dat,
    //   sortable: true,
    //   reorder: true,
    // },
    // {
    //   name: 'Shartnoma boshlanish sanasi',
    //   selector: (row) => row.contract_beg,
    //   sortable: true,
    //   reorder: true,
    // },
    // {
    //   name: 'Shartnoma tugatish sanasi',
    //   selector: (row) => row.contract_end,
    //   sortable: true,
    //   reorder: true,
    // },
    {
      name: "Umumiy summa",
      selector: (row) => row.summa,
      sortable: true,
      reorder: true,
      width: "10%",
    },
    {
      name: "Holati",
      selector: (row) => row.state,
      sortable: true,
      reorder: true,
      width: "10%",
    },
    // {
    //   name: 'Avans',
    //   selector: (row) => row.p_avans,
    //   sortable: true,
    //   reorder: true,
    // },
    // {
    //   name: 'Avans kuni',
    //   selector: (row) => row.avans_day,
    //   sortable: true,
    //   reorder: true,
    // },
    // {
    //   name: 'Tashkilot turi',
    //   selector: (row) => (row.maloy === 'Y' ? 'Kichik bizness' : 'Tashkilot'),
    //   sortable: true,
    //   reorder: true,
    // },
  ]);

  const onChange = (e, type) => {
    const mQuery = {};
    mQuery[type] = e.target.value;
    setQuery({
      ...query,
      ...mQuery,
    });
    // setEtp(e.target.value);
    // getResultats(e.target.value);
  };
  const paginationOptions = {
    rowsPerPageText: "Sahifada:",
    rangeSeparatorText: "->",
    selectAllRowsItem: false,
    // selectAllRowsItemText: "Barchasi",
  };
  return (
    <>
      <div className=' mt-3 rounded rounded-top'>
        <Accordion className=' rounded'>
          <Accordion.Item eventKey='0' className='bg-light'>
            <Accordion.Header>
              <FcEmptyFilter />
              <span
                className='ms-2 text-secondary'
                style={{ fontSize: "1.1em" }}
              >
                Filter
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <div className='border px-3 py-3'>
                <div className='row'>
                  <div className='col-sm'>
                    ETP:
                    <select
                      className='form-control form-control-sm'
                      value={etp}
                      onChange={(e) => onChange(e, "etpId")}
                    >
                      <option value=''>Barchasi</option>
                      <option value='1'>UZEX</option>
                      <option value='2'>XT-Xarid</option>
                      <option value='3'>Coopiration</option>
                      <option value='4'>Shaffof qurilish</option>
                    </select>
                  </div>
                  <div className='col-sm'>
                    Savro turi
                    {/* <input
                      type='text'
                      onChange={(e) => onChange(e, 'procId')}
                      className='form-control  form-control-sm'
                    /> */}
                    <select
                      className='form-control form-control-sm'
                      value={etp}
                      onChange={(e) => onChange(e, "procId")}
                    >
                      <option value=''>Barchasi</option>
                      <option value='6'>Elektron katalog</option>
                      <option value='3'>
                        Auksion (Amalga oshirilgan savdo)
                      </option>
                      <option value='17'>Tender</option>
                      <option value='18'>Konkurs</option>
                      <option value='19'>To'g'ridan to'g'ri shartnoma</option>
                    </select>
                  </div>{" "}
                  <div className='col-sm'>
                    Lot raqami
                    <input
                      type='text'
                      onChange={(e) => onChange(e, "lotId")}
                      className='form-control  form-control-sm'
                    />
                  </div>{" "}
                  <div className='col-sm'>
                    Shartnoma raqami
                    <input
                      type='text'
                      onChange={(e) => onChange(e, "contractNum")}
                      className='form-control  form-control-sm'
                    />
                  </div>
                  {/* <div className='col-sm'>
                    Shartnoma sanasi
                    <DatePicker
                      dateFormat='dd.MM.yyyy'
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className='red-border'
                    />
                  </div>
                  <div className='col-sm'>
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      selectsEnd
                      startDate={startDate}
                      endDate={endDate}
                      minDate={startDate}
                    />
                  </div> */}
                </div>
                <div className='row mt-3'>
                  <div className='col-sm'>
                    Xaridor STIR raqami:
                    <input
                      type='text'
                      onChange={(e) => onChange(e, "organInn")}
                      className='form-control  form-control-sm'
                    />
                  </div>{" "}
                  <div className='col-sm'>
                    Xaridor tashkilot:
                    <input
                      type='text'
                      onChange={(e) => onChange(e, "organName")}
                      className='form-control  form-control-sm'
                    />
                  </div>
                  <div className='col-sm'>
                    Etkazib beruvchi STIR raqami:
                    <input
                      type='text'
                      onChange={(e) => onChange(e, "vendorInn")}
                      className='form-control  form-control-sm'
                    />
                  </div>{" "}
                  <div className='col-sm'>
                    Etkazib beruvchi tashkilot nomi:
                    <input
                      type='text'
                      onChange={(e) => onChange(e, "vendorName")}
                      className='form-control  form-control-sm'
                    />
                  </div>
                </div>
                {/* <div className='row mt-3'>
                  <div className='col-sm'>
                    <input type='submit' value='yubor' />
                  </div>
                </div> */}
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className='m-4'>
        <div className=''>
          {/* <div
            className='p-2  rounded-top text-center'
            style={{ backgroundColor: '#9FCAE5' }}
          >
            <h6 className='pt-2'> Shartnoma ma`lumotlari</h6>
          </div> */}
          <div
            className='px-3 pt-2 rounded-top'
            style={{
              borderBottom: "1px solid #9FCAE5",
              backgroundColor: "#fff",
            }}
          >
            <h5> Shartnoma ma`lumotlari</h5>
          </div>
          <DataTable
            columns={columns}
            data={rabbitData}
            pagination
            // paginationComponentOptions={paginationOptions}
            paginationServer
            paginationTotalRows={rabbitTotal}
            paginationPerPage={countPerPage}
            paginationComponentOptions={{
              noRowsPerPage: true,
            }}
            onChangePage={(page) => setPage(page)}
            // dense
            responsive
            // paginationIconFirstPage={false}
            // paginationIconLastPage={false}
            highlightOnHover
            striped
            progressPending={loading}
          />
        </div>
      </div>
    </>
  );
};

export default ContractsInfo;
