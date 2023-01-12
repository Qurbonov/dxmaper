import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import {FcEmptyFilter} from "react-icons/fc";
import DataTable from "react-data-table-component";

const ITMarketContractSuccess = () => {
    const [rabbitData, setRbtData] = useState([]);
    const [rabbitTotal, setRbtTotal] = useState();
    const countPerPage = 10;
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState({});
    const [etp, setEtp] = useState();

    const [page, setPage] = useState(1);

    const getResultsData = () => {
        setLoading(true);
        axios
            .get(
                process.env.REACT_APP_LOCAL_URL_GET_IT_RESULTATS_SUCCESS + `?offset=${page}&limit=${countPerPage}`,
                {
                    params: {
                        // limit: 100,
                        // offset: 1,
                        // tradeId: 6,
                        ...query,
                    },
                }
            )
            .then((response) => {
                // console.log(response);
                setRbtData(response.data.body);
                // console.log(response.data)
                setRbtTotal(response.data.total);
                console.log(response.data.total);
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
            name: "Elektron savdo maydoni",
            selector: (row) => {
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
            width: "13%",
        },
        {
            name: "Savdo turi",
            selector: (row) => {
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
            width: "19%",
        },
        {
            name: "Lot raqami",
            selector: (row) => <Link to={`/details/${row.id}`}>{row.lot_id}</Link>,
            sortable: true,
            reorder: true,
            width: "14%",
        },
        {
            name: "Hudud",
            selector: (row) => (row.v_terr == null ? "-" : row.v_terr),
            sortable: true,
            reorder: true,
            width: "15%",
        },

        {
            name: "Shartnoma raqami",
            selector: (row) => row.contract_num,
            sortable: true,
            reorder: true,
            width: "14%",
        },
        {
            name: "Summa",
            selector: (row) => row.summa,
            sortable: true,
            reorder: true,
            width: "11%",
        },

        {
            name: "Holati",
            style: {
                color: 'green'
            },
            selector: (row) => {
                switch (row.state) {
                    case 2:
                        return "Muvaffaqiyatli";
                }
            },
            sortable: true,
            reorder: true,
            width: "12%",
        },
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

    return (
        <>
            <div className=' mx-5 mt-3 rounded rounded-top'>
                <Accordion className=' rounded'>
                    <Accordion.Item eventKey='0' className='bg-light'>
                        <Accordion.Header>
                            <FcEmptyFilter/>
                            <span
                                className='ms-2 text-secondary'
                                style={{fontSize: "1.1em"}}
                            >
                Filter
              </span>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className='border px-3 py-3'>
                                <div className='row'>
                                    <div className='col-sm'>
                                        Elektron savdo maydoni:
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
                                            onChange={(e) => onChange(e, "tradeId")}
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
                                    </div>
                                    {" "}
                                    <div className='col-sm'>
                                        Lot raqami
                                        <input
                                            type='text'
                                            onChange={(e) => onChange(e, "lotId")}
                                            className='form-control  form-control-sm'
                                        />
                                    </div>
                                    {" "}
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
                                {/* <div className='row mt-3'>
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
                </div> */}
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
            <div className='mx-5 my-3'>
                <div className=''>
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
                        // paginationTotalRows={rabbitTotal}
                        paginationTotalRows={150}
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

export default ITMarketContractSuccess;
