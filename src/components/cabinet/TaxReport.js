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

const AdminPage = () => {

    const headers = {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
    };

    const [dataIn, setData] = useState();
    const inputYtt = useRef(null);

    const getIndividualInfo = () => {
        const pinfl = inputYtt.current.value;
        axios.get(process.env.REACT_APP_LOCAL_URL_GET_INDIVIDUAL_BY_PINFL + `?pinfl=${pinfl}`, {headers})
            .then((response) => {
                setData(response.data);
            }).catch((error) => {
            console.log(error);
        });
    }
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
                            <Form>

                                <Row>
                                    <Col>
                                        <InputGroup size="default" className="mb-3">
                                            <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>1. Yil: </InputGroup.Text>
                                            <Form.Control
                                                aria-label="default"
                                                aria-describedby="inputGroup-sizing-default"
                                                type="text"
                                                className='w-25'
                                                style={{width: '25%'}}
                                            />
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        <InputGroup size="default" className="mb-3">
                                            <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>2. Choraklik: </InputGroup.Text>
                                            <Form.Control
                                                aria-label="default"
                                                aria-describedby="inputGroup-sizing-default"
                                                type="text"
                                            />
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        <InputGroup size="default" className="mb-3">
                                            <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>3. Hisobot turi: </InputGroup.Text>
                                            <Form.Control
                                                aria-label="default"
                                                aria-describedby="inputGroup-sizing-default"
                                                type="text"
                                            />
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        <InputGroup size="default" className="mb-3">
                                            <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>4. STIR: </InputGroup.Text>
                                            <Form.Control
                                                aria-label="default"
                                                aria-describedby="inputGroup-sizing-default"
                                                type="text"
                                            />
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <Row className='mb-3 border-bottom border-info'>
                                    <Col>
                                        <InputGroup size="default" className="mb-3">
                                            <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>5. Hudud kodi: </InputGroup.Text>
                                            <Form.Control
                                                aria-label="default"
                                                aria-describedby="inputGroup-sizing-default"
                                                type="text"
                                            />
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        <InputGroup size="default" className="mb-3">
                                            <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>6. Tuman kodi: </InputGroup.Text>
                                            <Form.Control
                                                aria-label="default"
                                                aria-describedby="inputGroup-sizing-default"
                                                type="text"
                                            />
                                        </InputGroup>
                                    </Col>
                                    <Col xs={4}>
                                        <InputGroup size="default" className="mb-3">
                                            <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>7. Ma'lumot yuborilgan sana: </InputGroup.Text>
                                            <Form.Control
                                                aria-label="default"
                                                aria-describedby="inputGroup-sizing-default"
                                                type="date"
                                            />
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        <InputGroup size="default" className="mb-3">
                                            <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>8. Hisobot ID raqami: </InputGroup.Text>
                                            <Form.Control
                                                aria-label="default"
                                                aria-describedby="inputGroup-sizing-default"
                                                type="text"
                                            />
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>9. Boshlang'ich (qayta tiklash qiymati (100, 0300): </InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>10. Eskirish summasi (0200):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>11. Qoldiq (balans) qiymati (satr. 010-011):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>12. Boshlang'ich qiymati (0400):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>13. Amortizatsiya summasi (0500):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>14. Qoldiq (balans) qiymati (satr.020-021):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>15. Uzoq muddatli investitsiyalar, jami (satr.
                                        040+050+060+070+080):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>16. Qimmatli qog'ozlar (0610):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>17. Sho'ba xo'jalik jamiyatlariga investitsiyalar
                                        (0620):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>18. Qaram xo'jalik jamiyatlariga investitsiyalar
                                        (0630):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>19. Chet el kapitali mavjud bo'lgan korxonalarga investitsiyalar
                                        (0640):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>20. Boshqa uzoq muddatli investitsiyalar (0690):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>21. O'rnatilgan asbob-uskunalar (0700):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>22. Kapital qo'yilmalar (0800):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>23. Uzoq muddatli debitorlik qarzlari (0910, 0920, 0930,
                                        0940):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>24. Uzoq muddatli kechiktirilgan xarajatlar (0950, 0960,
                                        0990):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>25. I-bo‘lim bo‘yicha jami (satr. 012 + 022 + 030 + 090 + 100 + 110 +
                                        120):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>26. Tovar-moddiy zaxiralari, jami (satr.150 + 160 + 170 +
                                        180):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>27. Ishlab chiqarish zahiralari (1000, 1100, 1500,
                                        1600):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>28. Tugallanmagan ishlab chiqarish (2000, 2100, 2300,
                                        2700):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>29. Tayyor mahsulot (2800) :</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>30. Tovarlar (2900 dan 2980 ning ayirmasi):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>31. Kelgusi davr xarajatlari (3100):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>32. Kechiktirilgan xarajatlar (3200):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>33.Debitorlar, jami (satr. 220 + 240 + 250 + 260 + 270 + 280 + 290 +
                                        300 +
                                        310):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>34. shundan: muddati o'tgan *:</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>35. Xaridor va buyurtmachilarning qarzi (4000 dan 4900 ning ayrimasi)
                                        :</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>36. Ajratilgan bo'linmalar qarzi (4110):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>37. Sho'ba va qaram xo'jalik jamiyatlarning qarzi:</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>38. Xodimlarga berilgan bo'naklar (4200):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>39. Mol yetkazib beruvchilar va pudratchilarga berilgan bo‘naklar
                                        (4300):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>40. Byudjet soliqlar va boshqa majburiy to'lovlar bo'yicha bo'nak
                                        to'lovlari
                                        (4400):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>41. Maqsadli davlat jamg‘armalari va sug‘urtalar bo‘yicha bo‘nak
                                        to‘lovlari
                                        (4500):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>42. Ta’sischilarning ustav kapitaliga ulushlar bo‘yicha qarzi
                                        (4600):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>43. Xodimlarning boshqa operatsiyalar bo‘yicha qarzi
                                        (4700):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>44. Boshqa debitorlik qarzlari (4800):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>45. Pul mablag‘lari, jami (satr.330 + 340 + 350 + 360), shu
                                        jumladan:</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>46.Kassadagi pul mablag‘lari (5000):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>47. Hisob-kitob schyotidagi pul mablag‘lari (5100):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>48. Chet el valyutasidagi pul mablag‘lari (5200):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>49. Boshqa pul mablag‘lari va ekvivalentlari (5500, 5600,
                                        5700):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>50. Qisqa muddatli investitsiyalar (5800):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>51. Boshqa joriy aktivlar (5900):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>52. II bo‘lim bo‘yicha jami (satr. 140 + 190 + 200 + 210 + 320 + 370 +
                                        380):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>53. Balans aktivi bo‘yicha jami (satr.130 + 390):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>54. Ustav kapitali (8300):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>55. Qo‘shilgan kapital (8400):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>56. Zaxira kapitali (8500):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>57. Sotib olingan xususiy aksiyalar (8600):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>58. Taqsimlanmagan foyda (qoplanmagan zarar) (8700):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>59. Maqsadli tushumlar (8800):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>60. Kelgusi davr xarajatlari va to‘lovlari uchun zaxiralar
                                        (8900):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>61. I bo‘lim bo‘yicha jami (satr. 410 + 420 + 430 + 440 + 450 + 460 +
                                        470):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>62. Uzoq muddatli majburiyatlar, jami (satr. 500 + 520 + 530 + 540 +
                                        550 + 560 + 570
                                        + 580 + 590):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>63. shu jumladan: uzoq muddatli kreditorlik qarzlari (satr. 500 + 520 +
                                        540 + 560 +
                                        590):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>64. Mol yetkazib beruvchilar va pudratchilarga uzoq muddatli qarz
                                        (7000):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>65. Ajratilgan bo'linmalarga uzoq muddatli qarz
                                        (7110):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>66. Sho‘ba va qaram xo‘jalik jamiyatlariga uzoq muddatli qarzi
                                        (7120):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>67. Uzoq muddatli kechiktirilgan daromadlar (7210, 7220,
                                        7230):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>68. Soliq va boshqa majburiy to‘lovlar bo‘yicha uzoq muddatli
                                        kechiktirilgan
                                        majburiyatlar (7240):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>69. Boshqa uzoq muddatli kechiktirilgan majburiyatlar (7250,
                                        7290):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>70. Xaridorlar va buyurtmachilardan olingan bo‘naklar
                                        (7300):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>71. Uzoq muddatli bank kreditlari (7810):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>72. Uzoq muddatli qarzlar (7820, 7830, 7840):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>73. Boshqa uzoq muddatli kreditorlik qarzlar (7900):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>74. Joriy majburiyatlar, jami (satr.
                                        610+630+640+650+660+670+680+690+700+710+720+730+740+750+760):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>75. shu jumladan: joriy kreditorlik qarzlari
                                        (satr.610+630+650+670+680+690+700+710+720+760) :</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>76. shundan: muddati o‘tgan joriy kreditorlik qarzlari
                                        *:</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>77. Mol yetkazib beruvchilar va pudratchilarga qarz
                                        (6000):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>78. Ajratilgan bo'linmalarga qarz (6110):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>79. Sho‘ba va qaram xo‘jalik jamiyatlariga qarz
                                        (6120):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>80. Kechiktirilgan daromadlar (6210, 6220, 6230):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>81. Soliqlar va boshqa majburiy to‘lovlar bo‘yicha kechiktirilgan
                                        majburiyatlar
                                        (6240):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>82. Boshqa kechiktirilgan majburiyatlar (6250, 6290):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>83. Olingan bo‘naklar (6300):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>84. Budjetga to‘lovlar bo‘yicha qarz (6400) :</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>85. Sug‘urta bo‘yicha qarz (6510):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>86. Maqsadli davlat jamg‘armalariga to‘lovlar bo‘yicha qarz
                                        (6520):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>87. Ta’sischilarga bo‘lgan qarzlar (6600):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>88. Mehnatga haq to‘lash bo‘yicha qarz (6700):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>89. Qisqa muddatli bank kreditlari (6810):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>90. Qisqa muddatli qarzlar (6820, 6830, 6840) :</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>91. Uzoq muddatli majburiyatlarning joriy qismi
                                        (6950):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>92. Boshqa kreditorlik qarzlar (6950 dan tashqari
                                        6900):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>93. II bo‘lim bo‘yicha jami (satr.490 + 600):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>94. Balans passivi bo‘yicha jami (satr. 480+770):</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>

                            </Form>
                        </div>
                        <div className="container mt-3">
                            {}
                        </div>
                    </Tab>
                    <Tab eventKey="second" title="2-sonli shakl">
                        <div className="container mt-3 shadow-sm p-4 rounded">
                            <h5 className='mb-4'>
                                Moliyaviy natijalar to‘g‘risida hisobot
                            </h5>
                            <Form>
                                <Row>
                                    <Col>
                                        <InputGroup size="default" className="mb-3">
                                            <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>1. Yil: </InputGroup.Text>
                                            <Form.Control
                                                aria-label="default"
                                                aria-describedby="inputGroup-sizing-default"
                                                type="text"
                                            />
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        <InputGroup size="default" className="mb-3">
                                            <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>2. Choraklik: </InputGroup.Text>
                                            <Form.Control
                                                aria-label="default"
                                                aria-describedby="inputGroup-sizing-default"
                                                type="text"
                                            />
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        <InputGroup size="default" className="mb-3">
                                            <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>3. Hisobot turi: </InputGroup.Text>
                                            <Form.Control
                                                aria-label="default"
                                                aria-describedby="inputGroup-sizing-default"
                                                type="text"
                                            />
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        <InputGroup size="default" className="mb-3">
                                            <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>4. STIR: </InputGroup.Text>
                                            <Form.Control
                                                aria-label="default"
                                                aria-describedby="inputGroup-sizing-default"
                                                type="text"
                                            />
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <Row className='mb-3 border-bottom border-info'>
                                    <Col>
                                        <InputGroup size="default" className="mb-3">
                                            <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>5. Hudud kodi: </InputGroup.Text>
                                            <Form.Control
                                                aria-label="default"
                                                aria-describedby="inputGroup-sizing-default"
                                                type="text"
                                            />
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        <InputGroup size="default" className="mb-3">
                                            <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>6. Tuman kodi: </InputGroup.Text>
                                            <Form.Control
                                                aria-label="default"
                                                aria-describedby="inputGroup-sizing-default"
                                                type="text"
                                            />
                                        </InputGroup>
                                    </Col>
                                    <Col xs={4}>
                                        <InputGroup size="default" className="mb-3">
                                            <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>7. Ma'lumot yuborilgan sana: </InputGroup.Text>
                                            <Form.Control
                                                aria-label="default"
                                                aria-describedby="inputGroup-sizing-default"
                                                type="date"
                                            />
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        <InputGroup size="default" className="mb-3">
                                            <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>8. Hisobot ID raqami: </InputGroup.Text>
                                            <Form.Control
                                                aria-label="default"
                                                aria-describedby="inputGroup-sizing-default"
                                                type="text"
                                            />
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>9. Mahsulot (ish, xizmat) sotishdan tushgan tushum: </InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>10. Sotilgan mahsulot, ish va xizmatlarning ishlab
                                        chiqarish tannarxi: </InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>11. Mahsulot (tovar, ish va xizmat) larni sotishning yalpi foydasi
                                        (zarari) (satr: 010-020)* :</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>12. Davr xarajatlari, jami (satr. 050+060+070+080), shu
                                        jumladan: </InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>13. Sotish xarajatlari:</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>14. Ma’muriy xarajatlar:</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>15. Boshqa operatsion xarajatlar:</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>16. Hisobot davrining soliq solinadigan foydadan kelgusida
                                        chegiriladigan xarjatlari:</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>17. Asosiy faoliyatning boshqa daromadlari:</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>18. Asosiy faoliyatning foydasi (zarari) (satr.
                                        030-040+090:</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>19. Moliyaviy faoliyatning daromadlari, jami (saatr.
                                        120+130+140+150+160), shu jumladan:</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>20. Dividendlar shaklidagi daromadlar:</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>21. Foizlar shaklidagi daromadlar:</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>22. Moliyaviy ijaradan daromadlar:</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>23. Valyuta kursi farqidan daromadlar:</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>24. Moliyaviy faoliyatning boshqa daromadlari:</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>25. Moliyaviy faoliyat bo'yicha xarajatlar (satr. 180+190+200+210), shu
                                        jumladan:</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>26. Foizlar shaklidagi xarajatlar:</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>27. Moliyaviy ijara bo'yicha foizlar shaklidagi
                                        xarajatlar:</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>28. Valyuta kursidan farqidan zararlar:</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>29. Moliyaviy faoliyat bo'yicha boshqa xarajatlar:</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>30. Umumxo'jalik faoliyatining foydasi (zarari) (satr.
                                        100+110+170)*:</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>31. Favqulotta foyda va zararlar *:</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>32. Foyda solig'i to'lagunga qadar foyda (zarar) (satr.
                                        220+/-230)*:</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>33. Foyda solig'i :</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>34. Foydadan boshqa soliqlar va boshqa majburiy
                                        to'lovlar:</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup size="default" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-light text-secondary' style={{display: 'inline-block'}}>35. Hisobot davrining sof foydasi (zarari) (satr.
                                        240-250-260)*:</InputGroup.Text>
                                    <Form.Control
                                        aria-label="default"
                                        aria-describedby="inputGroup-sizing-default"
                                        type="text"
                                    />
                                </InputGroup>
                            </Form>
                        </div>
                        <div className="container mt-3">
                            {}
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </>
    );
};
export default AdminPage;
