import axios from "axios";
import {Link} from "react-router-dom";
import {FcEmptyFilter} from "react-icons/fc";
import Accordion from "react-bootstrap/Accordion";
import React, {useEffect, useState} from "react";
import DataTable from "react-data-table-component";

const FailedContractsInfo = () => {
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
                process.env.REACT_APP_LOCAL_URL_GET_RESULTATS_FAILED +
                `?offset=${page}&limit=${countPerPage}`,
                {
                    params: {
                        ...query,
                    },
                }
            )
            .then((response) => {
                setRbtData(response.data.body);
                setRbtTotal(response.data.total);
                // console.log(response.data.total);
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
            width: "10%",
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
        },
        {
            name: "Lot raqami",
            selector: (row) => <Link to={`/details/${row.id}`}>{row.lot_id}</Link>,
            width: "12%",
        },
        {
            name: "Hudud (etkazib beruvchi)",
            selector: (row) => (row.v_terr == null ? "-" : row.v_terr),
            sortable: true,
            reorder: true,
            width: "12%",
        },
        {
            name: "Shartnoma raqami",
            selector: (row) => row.contract_num,
            width: "13%",
        },
        {
            name: "Umumiy summa",
            selector: (row) => row.summa,
            sortable: true,
            reorder: true,
            width: "12%",
        },
        // {
        //
        //     name: "Rad etilganlik haqida",
        //     selector: (row) => row.errmsg,
        //     width: "14%",
        // },
        {
            name: "Holati",
            style: {
                color: 'red'
            },
            selector: (row) => {
                switch (row.state) {
                    case 3:
                        return "Rad etilgan";
                    case 5:
                        return "G'aznachilik tomonidan rad etilgan";
                    case 40:
                        return "G'aznachilik tomonidan rad etilgan";
                    case 44:
                        return "Rad etilgan va Arxivdan tiklanadi";
                }
            },
            width: "14%",
        }
    ]);
    columns.map((col) => {
        col.compact = true;
        col.wrap = true;
        col.sortable = true;
        col.reorder = true;
        return col;
    });
    const onChange = (e, type) => {
        const mQuery = {};
        mQuery[type] = e.target.value;
        setQuery({
            ...query,
            ...mQuery,
        });
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
                                </div>

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
                        paginationServer
                        paginationTotalRows={rabbitTotal}
                        paginationPerPage={countPerPage}
                        paginationComponentOptions={{
                            noRowsPerPage: true,
                        }}

                        onChangePage={(page) => setPage(page)}
                        highlightOnHover
                        striped
                        progressPending={loading}
                    />
                </div>
            </div>
        </>
    );
};

export default FailedContractsInfo;
