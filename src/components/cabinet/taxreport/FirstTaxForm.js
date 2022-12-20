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


const FirstTaxForm = () => {
    const {register, formState: {errors}, handleSubmit} = useForm();
    const onFirstSubmit = (frst) => {
        // console.log(frst);
        axios.post(process.env.REACT_APP_LOCAL_URL_POST_FIRST_REPORT, frst);
    }
    return (
        <>
            <div className="container rounded-3 border  shadow-sm border-1 p-4 ">
                <Form onSubmit={handleSubmit(onFirstSubmit)}>
                    <Row className='mb-3 '>
                        <Form.Group as={Col} controlId="formGridState" className=' text-secondary'>
                            <Form.Label className='text-secondary'>1. Yil</Form.Label>
                            {errors.year?.type === 'required' && <span role="alert" className='text-danger ms-2'>Yil to'liq ko'rinishda.</span>}
                            <Form.Select defaultValue="2022" {...register("year")}>
                                <option value={2021}>2021</option>
                                <option value={2022}>2022</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridQuarter">
                            <Form.Label className='text-secondary'>2. Choraklik:</Form.Label>
                            <Form.Select defaultValue="2022" {...register("quarter")}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </Form.Select>

                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridQuarter">
                            <Form.Label className='text-secondary'>3. Hisobot turi: </Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("reportType", {required: true, maxLength: 2})}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>4. STIR: </Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="number"
                                {...register("tin", {required: true, maxLength: 9})}
                            />
                        </Form.Group>
                    </Row>

                    <Row className='mb-3 pb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>5. Hudud kodi: </Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("ns10Code", {required: true, maxLength: 2})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>6. Tuman kodi: </Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("ns11Code", {required: true, maxLength: 2})}
                            />
                        </Form.Group>
                        {/*<Form.Group as={Col} controlId="formGridTin">*/}
                        {/*    <Form.Label className='text-secondary'>7. Ma'lumot yuborilgan sana: </Form.Label>*/}
                        {/*    <Form.Control*/}
                        {/*        aria-label="default"*/}
                        {/*        aria-describedby="inputGroup-sizing-default"*/}
                        {/*        type="date"*/}
                        {/*        {...register("datesent", {required: true})}*/}
                        {/*    />*/}
                        {/*</Form.Group>*/}
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>8. Hisobot ID raqami: </Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("titul", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <hr/>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>9. Boshlang'ich (qayta tiklash qiymati (0100, 0300):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s010", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>10. Eskirish summasi (0200):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s011", {required: true, maxLength: 30})}
                            />
                        </Form.Group>

                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>11. Qoldiq (balans) qiymati (satr. 010-011):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s012", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>12. Boshlang'ich qiymati (0400):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s020", {required: true, maxLength: 30})}
                            />
                        </Form.Group>


                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>13. Amortizatsiya summasi (0500):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s021", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>14. Qoldiq (balans) qiymati (satr.020-021):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s022", {required: true, maxLength: 30})}
                            />
                        </Form.Group>

                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>15. Uzoq muddatli investitsiyalar, jami (satr. 040+050+060+070+080):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s030", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>16. Qimmatli qog'ozlar (0610):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s040", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>17. Sho'ba xo'jalik jamiyatlariga investitsiyalar (0620):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s050", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>18. Qaram xo'jalik jamiyatlariga investitsiyalar (0630):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s060", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>19. Chet el kapitali mavjud bo'lgan korxonalarga investitsiyalar (0640):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s070", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>20. Boshqa uzoq muddatli investitsiyalar (0690):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s080", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>21. O'rnatilgan asbob-uskunalar (0700):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s090", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>22. Kapital qo'yilmalar (0800):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s100", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>23. Uzoq muddatli debitorlik qarzlari (0910, 0920, 0930,
                                0940):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s110", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>24. Uzoq muddatli kechiktirilgan xarajatlar (0950, 0960, 0990):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s120", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-info'>25. I-bo‘lim bo‘yicha jami (satr. 012+022+030+090+100+110+120):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s130", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>26. Tovar-moddiy zaxiralari, jami (satr. 150+160+170+180):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s140", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>27. Ishlab chiqarish zahiralari (1000, 1100, 1500, 1600):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s150", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>28. Tugallanmagan ishlab chiqarish (2000, 2100, 2300, 2700):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s160", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>29. Tayyor mahsulot (2800):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s170", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>30. Tovarlar (2900 dan 2980 ning ayirmasi):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s180", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>31. Kelgusi davr xarajatlari (3100):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s190", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>32. Kechiktirilgan xarajatlar (3200):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s200", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>33.Debitorlar, jami (satr. 220+240+250+260+270+280 +290+300+310):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s210", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>34. shundan: muddati o'tgan *:</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s211", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>35. Xaridor va buyurtmachilarning qarzi (4000 dan 4900 ning ayrimasi):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s220", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>

                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>36. Ajratilgan bo'linmalar qarzi (4110):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s230", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>37. Sho'ba va qaram xo'jalik jamiyatlarning qarzi:</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s240", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>38. Xodimlarga berilgan bo'naklar (4200):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s250", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>39. Mol yetkazib beruvchilar va pudratchilarga berilgan bo‘naklar (4300):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s260", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>40. Byudjet soliqlar va boshqa majburiy to'lovlar bo'yicha bo'nak to'lovlari (4400):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s270", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>41. Maqsadli davlat jamg‘armalari va sug‘urtalar bo‘yicha bo‘nak to‘lovlari (4500):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s280", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>42. Ta’sischilarning ustav kapitaliga ulushlar bo‘yicha qarzi (4600):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s290", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>43. Xodimlarning boshqa operatsiyalar bo‘yicha qarzi (4700):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s300", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>44. Boshqa debitorlik qarzlari (4800):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s310", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>45. Pul mablag‘lari, jami (satr. 330+340+350+360), shu jumladan:</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s320", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>46.Kassadagi pul mablag‘lari (5000):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s330", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>47. Hisob-kitob schyotidagi pul mablag‘lari (5100):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s340", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>48. Chet el valyutasidagi pul mablag‘lari (5200):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s350", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>49. Boshqa pul mablag‘lari va ekvivalentlari (5500, 5600, 5700):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s360", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>50. Qisqa muddatli investitsiyalar (5800):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s370", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>51. Boshqa joriy aktivlar (5900):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s380", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-info'>52. II bo‘lim bo‘yicha jami (satr. 140+190+200+210+320+370+380):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s390", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>53. Balans aktivi bo‘yicha jami (satr.130 + 390):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s400", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>54. Ustav kapitali (8300):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s410", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>55. Qo‘shilgan kapital (8400):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s420", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>56. Zaxira kapitali (8500):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s430", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>57. Sotib olingan xususiy aksiyalar (8600):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s440", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>58. Taqsimlanmagan foyda (qoplanmagan zarar) (8700):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s450", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>59. Maqsadli tushumlar (8800):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s460", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>60. Kelgusi davr xarajatlari va to‘lovlari uchun zaxiralar (8900):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s470", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-info'>61. I bo‘lim bo‘yicha jami (satr. 410+420+430+440+450+460+470):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s480", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>62. Uzoq muddatli majburiyatlar, jami (satr. 500+520+530+540+550+560+ 570+580+590):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s490", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>63. shu jumladan: uzoq muddatli kreditorlik qarzlari (satr. 500+520+540+560+590):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s491", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>64. Mol yetkazib beruvchilar va pudratchilarga uzoq muddatli qarz (7000):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s500", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>65. Ajratilgan bo'linmalarga uzoq muddatli qarz (7110):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s510", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>66. Sho‘ba va qaram xo‘jalik jamiyatlariga uzoq muddatli qarzi (7120):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s520", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>

                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>67. Uzoq muddatli kechiktirilgan daromadlar (7210, 7220, 7230):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s530", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>68. Soliq va boshqa majburiy to‘lovlar bo‘yicha uzoq muddatli kechiktirilgan majburiyatlar (7240):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s540", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>69. Boshqa uzoq muddatli kechiktirilgan majburiyatlar (7250, 7290):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s550", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>70. Xaridorlar va buyurtmachilardan olingan bo‘naklar (7300):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s560", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>71. Uzoq muddatli bank kreditlari (7810):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s570", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>72. Uzoq muddatli qarzlar (7820, 7830, 7840):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s580", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>73. Boshqa uzoq muddatli kreditorlik qarzlar (7900):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s590", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>74. Joriy majburiyatlar, jami (satr. 610+630+640+650+660+ 670+680+690+700+710+ 720+730+740+750+760):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s600", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>75. shu jumladan: joriy kreditorlik qarzlari (satr.610+630+ 650+670+680+ 690+700+710+720+760):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s601", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>76. shundan: muddati o‘tgan joriy kreditorlik qarzlari *:</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s602", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>77. Mol yetkazib beruvchilar va pudratchilarga qarz (6000):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s610", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>

                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>78. Ajratilgan bo'linmalarga qarz (6110):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s620", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>79. Sho‘ba va qaram xo‘jalik jamiyatlariga qarz (6120):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s630", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>80. Kechiktirilgan daromadlar (6210, 6220, 6230):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s640", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>81. Soliqlar va boshqa majburiy to‘lovlar bo‘yicha kechiktirilgan majburiyatlar (6240):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s650", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>

                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>82. Boshqa kechiktirilgan majburiyatlar (6250, 6290):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s660", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>83. Olingan bo‘naklar (6300):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s670", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>84. Budjetga to‘lovlar bo‘yicha qarz (6400):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s680", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>

                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>85. Sug‘urta bo‘yicha qarz (6510):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s690", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>86. Maqsadli davlat jamg‘armalariga to‘lovlar bo‘yicha qarz (6520):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s700", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>87. Ta’sischilarga bo‘lgan qarzlar (6600):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s710", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>88. Mehnatga haq to‘lash bo‘yicha qarz (6700):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s720", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>89. Qisqa muddatli bank kreditlari (6810):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s730", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>90. Qisqa muddatli qarzlar (6820, 6830, 6840):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s740", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>91. Uzoq muddatli majburiyatlarning joriy qismi (6950):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s750", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>92. Boshqa kreditorlik qarzlar (6950 dan tashqari 6900):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s760", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-info'>93. II bo‘lim bo‘yicha jami (satr. 490+600):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s770", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>94. Balans passivi bo‘yicha jami (satr. 480+770):</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s780", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <input type="submit" value="Saqlash" className='btn btn-primary text-light rounded-3'/>
                </Form>
            </div>

        </>
    );
};
export default FirstTaxForm;
