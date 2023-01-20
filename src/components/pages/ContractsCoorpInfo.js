import axios from "axios";
import {Link} from "react-router-dom";
import {FcEmptyFilter} from "react-icons/fc";
import Accordion from "react-bootstrap/Accordion";
import React, {useEffect, useState} from "react";
import DataTable from "react-data-table-component";

const ContractsCoorpInfo = () => {
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
                process.env.REACT_APP_LOCAL_URL_GET_COORP +
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
            name: <div className='ms-2'>"Elektron savdo maydoni"</div>,
            selector: (row) => {
                switch (row.etp_id) {
                    case 1:
                        return <div className='rounded mx-3 px-3 py-1 bg-light'>UZEX</div>;
                    case 2:
                        return <div className='rounded mx-3 px-3 py-1 bg-light'>XT-Xarid</div>;
                    case 3:
                        return <div className='rounded mx-3 px-3 py-1 bg-light'>COOPERATION.UZ</div>;
                    case 4:
                        return <div className='rounded mx-3 px-3 py-1 bg-light'>Shaffof qurilish</div>;
                }
            },
            style: {
                paddingLeft: -10
            },
            sortable: true,
            reorder: true,
            width: "13%",
        },
        {
            name: "LOT raqami",
            selector: (row) => <Link to={`/details/coorp/${row.id}`}>{row.lot_id}</Link>,
            sortable: true,
            reorder: true,
            width: "20%",

        },
        // {
        //     name: "Tovar Kodi",
        //     selector: (row) => (row.state),
        //     sortable: true,
        //     reorder: true,
        //     width: "12%",
        // },
        {
            name: "Shartnoma raqami",
            selector: (row) => (row.contract_num),
            sortable: true,
            reorder: true,
            width: "10%",
        },
        {
            name: "Shartnoma summasi",
            selector: (row) => (row.summa).toLocaleString('en-US') + " " + "so'm",
            sortable: true,
            reorder: true,
            width: "12%",
        },
        // {
        //     name: "Xaridor ",
        //     selector: (row) => (row.customer),
        //     sortable: true,
        //     reorder: true,
        //     width: "18%",
        // },
        // {
        //     name: "Hudud (Xaridor)",
        //     selector: (row) => (row.areaCustomer),
        //     sortable: true,
        //     reorder: true,
        //     width: "10%",
        // },
        // {
        //     name: "Yetkazib beruvchi ",
        //     selector: (row) => (row.v_terr),
        //     sortable: true,
        //     reorder: true,
        //     width: "18%",
        // },
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

    columns.map((col) => {
        col.compact = true;
        // col.center = true;
        col.wrap = true;
        return col;
    });

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
                            <span className='ms-2 text-secondary' style={{fontSize: "1.1em"}}>
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
                                            <option value='3'>COOPERATION.UZ</option>
                                            <option value='4'>Shaffof qurilish</option>
                                        </select>
                                    </div>
                                    <div className='col-sm'>
                                        Lot raqami
                                        <input
                                            type='text'
                                            onChange={(e) => onChange(e, "lotId")}
                                            className='form-control  form-control-sm'
                                        />
                                    </div>
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
                        <h5> Koorporativ savdo ma`lumotlari</h5>
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
                        responsive
                        highlightOnHover
                        striped
                        progressPending={loading}
                    />
                </div>
            </div>
        </>
    );
};

export default ContractsCoorpInfo;
