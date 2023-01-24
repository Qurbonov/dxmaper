import React, {useEffect, useState} from 'react';
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import DataTable from "react-data-table-component";
import {FcEmptyFilter} from "react-icons/fc";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const GovShare = () => {
    const [rabbitData, setRbtData] = useState([]);
    const [rabbitTotal, setRbtTotal] = useState();
    const countPerPage = 10;
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState({});

    const [page, setPage] = useState(0);

    const getResultsData = () => {
        setLoading(true);
        axios
            .get(process.env.REACT_APP_LOCAL_GOV_SHARE + `?page=${page}&size=${countPerPage}`, {
                params:
                    {
                        ...query,
                    }
            })
            .then((response) => {
                // console.log(response);
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
            name: "Tashkilot nomi",
            selector: (row) => <div className='text-wrap'>{row.nameUz}</div>,
            width: "30%",
        },
        {
            name: "Tashkilot STIR raqami",
            selector: (row) => row.inn,
            width: "10%",
        },

        {
            name: "Davlat ulushi",
            selector: (row) => row.share1 + " %",
            width: "8%",
        },

        {
            name: "Tashkilot holati",
            selector: (row) => {
                switch (row.astate) {
                    case "1":
                        return <span className='text-success text-wrap'>Faoliyat ko'rsatayotgan</span>;
                    case "10":
                        return <span className='text-success text-wrap'>Faoliyat ko'rsatayotgan</span>;
                    case "11":
                        return <span className='text-success text-wrap'>Faoliyat ko'rsatayotgan</span>;
                    case "20":
                        return <span className='text-danger text-wrap'>Faoliyat ko'rsatmayotgan</span>;
                    case "21":
                        return <span className='text-danger text-wrap'>Faoliyat ko'rsatmayotgan</span>;
                    case "22":
                        return <span className='text-danger text-wrap'>Faoliyat ko'rsatmayotgan</span>;
                    case "23":
                        return <span className='text-warning text-wrap'>Tugatish jarayonida</span>;
                    case "24":
                        return <span className='text-danger text-wrap'>Faoliyat ko'rsatmayotgan</span>;
                    case "30":
                        return <span className='text-danger text-wrap'>Tugatilgan</span>;
                    case "31":
                        return <span className='text-danger text-wrap'>Tugatilgan</span>;
                    case "32":
                        return <span className='text-danger text-wrap'>Tugatilgan</span>;
                    case "33":
                        return <span className='text-danger text-wrap'>Tugatilgan</span>;
                    case "34":
                        return <span className='text-danger text-wrap'>Tugatilgan</span>;
                    case "96":
                        return "Bo'lib to'lash shari bilan";
                    case "97":
                        return "Tasarruf etish huquqisiz";
                    case "98":
                        return <span className='text-info'>Sotildi</span>;
                    case "99":
                        return "Reestrdan chiqarilgan";
                }
            },
            width: "10%",
        },
        {
            name: "Manzil",
            selector: (row) => <div className='text-wrap'>{row.address}</div>,
            width: "15%",
        },
        {
            name: "Yuqori turivchi tashkilot",
            selector: (row) => <div className='text-wrap'>{row.founderName}</div>,
            width: "25%",
        },

    ]);

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
                            <span className='ms-2 text-secondary' style={{fontSize: "1.1em"}}>
                                Filter
                            </span>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className='border px-3 py-3'>
                                <div className='row'>
                                    <div className='col-sm'>
                                        Tashkilto STIR raqami
                                        <input
                                            type='text'
                                            onChange={(e) => onChange(e, "tin")}
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
                    <div className='px-3 pt-2 rounded-top border-bottom border-info'>
                        <Row>
                            <Col xs={6}>
                                <h5>
                                    Ustav kapitalida davlat ulushi 50 foizdan yuqori bo‘lgan xo‘jalik jamiyatlari ro‘yxati.
                                </h5>
                            </Col>
                            <Col xs={6}>
                                <h5 className='text-end'>
                                    Umumiy soni
                                    <span className='text-info mx-2'>
                                        {rabbitTotal}
                                    </span>
                                    ta
                                </h5>
                            </Col>
                        </Row>


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

export default GovShare;