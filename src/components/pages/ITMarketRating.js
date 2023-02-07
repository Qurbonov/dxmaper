import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import {FcEmptyFilter} from "react-icons/fc";
import DataTable from "react-data-table-component";

const ITMarketRating = () => {
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
                process.env.REACT_APP_LOCAL_URL_GET_IT_RESULTATS_RATING,
                {
                    params: {
                        // limit: 100,
                        // offset: 1,
                        // tradeId: 6,
                        year: 2022,
                        size: 10
                    },
                }
            )
            .then((response) => {
                // console.log(response);
                setRbtData(response.data);
                // console.log(response.data)
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
            id: 'tName',
            name: "Tashkilot nomi",
            selector: (row) => row.name,
            width: "50%",
        },
        {
            // id: 'tName',
            name: "Tashkilot STIR raqami",
            selector: (row) => row.inn,
            width: "25%",
        },
        {
            id: "sum",
            name: "Summasi",
            selector: (row) => row.summa.toLocaleString('en-US') + " " + "so'm",
            sortable: true,
            width: "25%",
        },

        // {
        //     name: "Holati",
        //     style: {
        //         color: 'green'
        //     },
        //     selector: (row) => {
        //         switch (row.state) {
        //             case 2:
        //                 return "Muvaffaqiyatli";
        //         }
        //     },
        //     sortable: true,
        //     reorder: true,
        //     width: "12%",
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

    return (
        <>

            <div className='mx-5 my-3'>
                <div className=''>
                    <div
                        className='px-3 pt-2 rounded-top'
                        style={{
                            borderBottom: "1px solid #9FCAE5",
                            backgroundColor: "#fff",
                        }}
                    >
                        <h5> Axborot texnologiyalari sohasidagi savdo ishtirokchilari bo'yicha tashkilotlar reytingi</h5>
                    </div>
                    <DataTable
                        columns={columns}
                        data={rabbitData}
                        // pagination
                        defaultSortFieldId="sum"
                        // paginationComponentOptions={paginationOptions}
                        // paginationServer
                        // paginationTotalRows={rabbitTotal}
                        // paginationTotalRows={150}
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

export default ITMarketRating;
