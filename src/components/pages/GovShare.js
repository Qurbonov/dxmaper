import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import DataTable from "react-data-table-component";

const GovShare = () => {
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
            .get(process.env.REACT_APP_LOCAL_GOV_SHARE)
            .then((response) => {
                console.log(response);
                setRbtData(response.data.body);
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
    }, []);


    const columns = React.useMemo(() => [
        {
            name: "Tashkilot nomi",
            selector: (row) => row.nameUz,
            sortable: true,
            reorder: true,
            width: "34%",
        },
        {
            name: "Tashkilot STIR raqami",
            selector: (row) => row.inn,
            sortable: true,
            reorder: true,
            width: "10%",
        },
        {
            name: "Davlat ulushi",
            selector: (row) => row.share1 + " %",
            sortable: true,
            reorder: true,
            width: "5%",
        },

        {
            name: "Tashkilot holati",
            selector: (row) => {
                switch (row.astate) {
                    // case ((row.astate >= 1) && (row.astate <= 10)):
                    //     return "Faoliyat ko'rsatayotgan";
                    // case ((row.astate >= 20) && (row.astate <= 22)):
                    //     return "Faoliyat ko'rsatmayotgan";

                    case 1:
                        return "Faoliyat ko'rsatayotgan";
                    case 23:
                        return "Tugatish jarayonida";
                    case 24:
                        return "Faoliyat ko'rsatmayotgan";
                    case ((row.astate >= 30) && (row.astate <= 34)):
                        return "Faoliyat ko'rsatmayotgan";
                    case 96:
                        return "Bo'lib to'lash shari bilan";
                    case 97:
                        return "Tasarruf etish huquqisiz";
                    case 98:
                        return "Sotildi";
                    case 99:
                        return "Reestrdan chiqarilgan";
                }
            },
            sortable: true,
            reorder: true,
            width: "12%",
        },
        {
            name: "Manzil",
            selector: (row) => row.address,
            sortable: true,
            reorder: true,
            width: "11%",
        },
        {
            name: "Yuqori turivchi tashkilot",
            selector: (row) => row.founderName,
            sortable: true,
            reorder: true,
            width: "11%",
        },
        {
            name: "Yuqori turivchi tashkilot",
            selector: (row) => row.founderInn,
            sortable: true,
            reorder: true,
            width: "11%",
        },
    ]);

    return (
        <>
            <div className='mx-5 my-3'>
                <div className=''>
                    <div className='px-3 pt-2 rounded-top border-bottom border-info'>
                        <h5> Ustav kapitalida davlat ulushi 50 foizdan yuqori bo‘lgan xo‘jalik jamiyatlari ro‘yxatiShartnoma ma`lumotlari</h5>
                    </div>
                    <p></p>
                    <DataTable
                        columns={columns}
                        data={rabbitData}
                        pagination
                        // paginationComponentOptions={paginationOptions}
                        paginationServer
                        paginationTotalRows={250}
                        paginationPerPage={countPerPage}
                        paginationComponentOptions={{
                            noRowsPerPage: true,
                        }}
                        // onChangePage={(page) => setPage(page)}
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