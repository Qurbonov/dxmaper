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
    // const [res, setRes] = useState(0);

    const getResultsData = () => {
        setLoading(true);
        axios
            .get(process.env.REACT_APP_LOCAL_GOV_SHARE + `?page=${page}&size=${countPerPage}`)
            .then((response) => {
                console.log(response);
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
    }, [page]);


    const columns = React.useMemo(() => [
        {
            name: "Tashkilot nomi",
            selector: (row) => row.nameUz,
            width: "35%",
        },
        {
            name: "Tashkilot STIR raqami",
            selector: (row) => row.inn,
            width: "10%",
        },
        {
            name: "Davlat ulushi",
            selector: (row) => row.share1 + " %",
            width: "5%",
        },

        {
            name: "Tashkilot holati",
            selector: (row) => {
                switch (row.astate) {
                    case "1":
                        return <span className='text-success'>Faoliyat ko'rsatayotgan</span>;
                    case "10":
                        return <span className='text-success'>Faoliyat ko'rsatayotgan</span>;
                    case "11":
                        return <span className='text-success'>Faoliyat ko'rsatayotgan</span>;
                    case "20":
                        return <span className='text-danger'>Faoliyat ko'rsatmayotgan</span>;
                    case "21":
                        return <span className='text-danger'>Faoliyat ko'rsatmayotgan</span>;
                    case "22":
                        return <span className='text-danger'>Faoliyat ko'rsatmayotgan</span>;
                    case "23":
                        return <span className='text-warning'>Tugatish jarayonida</span>;
                    case "24":
                        return <span className='text-danger'>Faoliyat ko'rsatmayotgan</span>;
                    case "30":
                        return <span className='text-danger'>Tugatilgan</span>;
                    case "31":
                        return <span className='text-danger'>Tugatilgan</span>;
                    case "32":
                        return <span className='text-danger'>Tugatilgan</span>;
                    case "33":
                        return <span className='text-danger'>Tugatilgan</span>;
                    case "34":
                        return <span className='text-danger'>Tugatilgan</span>;
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
            selector: (row) => row.address,
            width: "15%",
        },
        {
            name: "Yuqori turivchi tashkilot",
            selector: (row) => row.founderName,
            width: "25%",
        },
        {
            name: "Yuqori turivchi tashkilot STIR raqami",
            selector: (row) => row.founderInn,
            width: "5%",
        },
    ]);

    return (
        <>
            <div className='mx-5 my-3'>
                <div className=''>
                    <div className='px-3 pt-2 rounded-top border-bottom border-info'>
                        <h5> Ustav kapitalida davlat ulushi 50 foizdan yuqori bo‘lgan xo‘jalik jamiyatlari ro‘yxatiShartnoma ma`lumotlari</h5>
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