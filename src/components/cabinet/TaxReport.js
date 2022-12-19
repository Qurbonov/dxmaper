import React, {useState, useRef, useEffect} from 'react';
import axios from "axios";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import {FcSearch} from "react-icons/fc";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {useForm} from "react-hook-form";
import {createRoot} from "react-dom/client";
import {Outlet, createBrowserRouter, RouterProvider} from "react-router-dom";
import {StateMachineProvider, createStore} from "little-state-machine";
import FirstTaxForm from "./taxreport/FirstTaxForm";
import SecondTaxForm from "./taxreport/SecondTaxForm";


const AdminPage = () => {

    const headers = {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
    };

    // const [dataIn, setData] = useState();
    // const inputYtt = useRef(null);
    // const {firstForm, firstFormSubmit} = useForm();
    // const {secondForm, secondFormSubmit} = useForm();
    //
    // const onFirstSubmit = (frst) => {
    //     console.log(frst);
    //     // axios.post(process.env.REACT_APP_LOCAL_URL_POST_CREATE_USER, frst);
    // }
    // const onSecondSubmit = (scnd) => {
    //     // axios.post(process.env.REACT_APP_LOCAL_URL_POST_CREATE_USER, scnd);
    // }
    return (
        <>
            <div className=''>
                <Tabs
                    defaultActiveKey="first"
                    id="fill-tab-example"
                    className="mb-3 mt-4"
                    fill
                >
                    <Tab eventKey="first" title="1-sonli shakl">
                        <div className="container mt-3 shadow-sm p-4 rounded">
                            <h5 className='mb-4'>
                                Buxgalteriya balansi
                            </h5>
                            <FirstTaxForm/>
                        </div>
                    </Tab>
                    <Tab eventKey="second" title="2-sonli shakl">
                        <div className="container mt-3 shadow-sm p-4 rounded">
                            <h5 className='mb-4'>
                                Moliyaviy natijalar to‘g‘risida hisobot
                            </h5>
                            <SecondTaxForm/>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </>
    );
};
export default AdminPage;
