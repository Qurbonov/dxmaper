import React, {useState, useRef, useEffect} from 'react';
import axios from "axios";

import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {useForm} from "react-hook-form";

const SecondTaxForm = () => {

    const headers = {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
    };

    const {register, formState: {errors}, handleSubmit} = useForm();
    const onSecondSubmit = (scnd) => {
        console.log(scnd);
        // axios.post(process.env.REACT_APP_LOCAL_URL_POST_CREATE_USER, scnd);
    }
    return (
        <>

            <div className="container rounded-3 border  shadow-sm border-1 p-4 ">
                <Form onSubmit={handleSubmit(onSecondSubmit)}>
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
                                {...register("ptype", {required: true, maxLength: 2})}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>4. STIR: </Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
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
                                {...register("ns10_Code", {required: true, maxLength: 2})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>6. Tuman kodi: </Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("ns11_Code", {required: true, maxLength: 2})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>7. Ma'lumot yuborilgan sana: </Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="date"
                                {...register("datesent", {required: true})}
                            />
                        </Form.Group>
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
                            <Form.Label className='text-secondary'>9. Mahsulot (ish, xizmat) sotishdan tushgan tushum: </Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s010", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>10. Sotilgan mahsulot, ish va xizmatlarning ishlab chiqarish tannarxi: </Form.Label>
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
                            <Form.Label className='text-secondary'>11. Mahsulot (tovar, ish va xizmat) larni sotishning yalpi foydasi (zarari) (satr: 010-020)*: </Form.Label>
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
                            <Form.Label className='text-secondary'>12. Davr xarajatlari, jami (satr. 050+060+070+080), shu jumladan: </Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s040", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>13. Sotish xarajatlari:</Form.Label>
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
                            <Form.Label className='text-secondary'>14. Ma’muriy xarajatlar: </Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s060", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>15. Boshqa operatsion xarajatlar:</Form.Label>
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
                            <Form.Label className='text-secondary'>16. Hisobot davrining soliq solinadigan foydadan kelgusida chegiriladigan xarjatlari: </Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s080", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>17. Asosiy faoliyatning boshqa daromadlari:</Form.Label>
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
                            <Form.Label className='text-secondary'>18. Asosiy faoliyatning foydasi (zarari) (satr. 030-040+090:</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s100", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>19. Moliyaviy faoliyatning daromadlari, jami (saatr. 120+130+140+150+160), shu jumladan:</Form.Label>
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
                            <Form.Label className='text-secondary'>20. Dividendlar shaklidagi daromadlar:</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s120", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>21. Foizlar shaklidagi daromadlar:</Form.Label>
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
                            <Form.Label className='text-secondary'>22. Moliyaviy ijaradan daromadlar:</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s140", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>23. Valyuta kursi farqidan daromadlar:</Form.Label>
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
                            <Form.Label className='text-secondary'>24. Moliyaviy faoliyatning boshqa daromadlari:</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s160", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>25. Moliyaviy faoliyat bo'yicha xarajatlar (satr. 180+190+200+210), shu jumladan:</Form.Label>
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
                            <Form.Label className='text-secondary'>26. Foizlar shaklidagi xarajatlar:</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s180", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>27. Moliyaviy ijara bo'yicha foizlar shaklidagi xarajatlar:</Form.Label>
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
                            <Form.Label className='text-secondary'>28. Valyuta kursidan farqidan zararlar:</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s200", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>29. Moliyaviy faoliyat bo'yicha boshqa xarajatlar:</Form.Label>
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
                            <Form.Label className='text-secondary'>30. Umumxo'jalik faoliyatining foydasi (zarari) (satr. 100+110-170)*:</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s220", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>31. Favqulotta foyda va zararlar *:</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s230", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>


                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>32. Foyda solig'i to'lagunga qadar foyda (zarar) (satr. 220+/-230)*:</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s240", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>33. Foyda solig'i:</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s250", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>

                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>34. Foydadan boshqa soliqlar va boshqa majburiy to'lovlar:</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s260", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTin">
                            <Form.Label className='text-secondary'>35. Hisobot davrining sof foydasi (zarari) (satr. 240-250-260)*:</Form.Label>
                            <Form.Control
                                aria-label="default"
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                {...register("s270", {required: true, maxLength: 30})}
                            />
                        </Form.Group>
                    </Row>
                    <input type="submit" value="Saqlash" className='btn btn-primary text-light rounded-3'/>
                </Form>
            </div>
        </>
    );
};
export default SecondTaxForm;
