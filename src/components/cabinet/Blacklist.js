import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";


function Blacklist() {
    const {register, handleSubmit} = useForm();
    const [resStatus, setResStatus] = useState("");

    const onSubmit = (datas) => {
        axios
            .post(process.env.REACT_APP_LOCAL_URL_POST_BLACK_LIST_ADD, datas)
            .then(function (response) {
                console.log("response.status");
                console.log(response.status);
                if (response.status === 200) {
                    setResStatus("Successful Registration!");
                } else {
                    setResStatus("error");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        console.log(datas);
        console.log(resStatus);
    }
    return (
        <>
            <div className='container'>
                <Nav
                    activeKey="/home"
                    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                    <Nav.Item>
                        <Nav.Link href="/home">Ro'yhat</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Qo'shish</Nav.Link>
                    </Nav.Item>
                </Nav>

                <h3 className='my-3'>Shubhali etkazib beruvchilar ro'yhatiga qo'shish</h3>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputGroup size="default" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm" className='bg-secondary text-white' style={{width: 260}}>Nomi: </InputGroup.Text>
                        <Form.Control
                            aria-label="default"
                            aria-describedby="inputGroup-sizing-default"
                            type="text"
                            {...register("NAME", {required: true})}
                        />
                    </InputGroup>
                    <InputGroup size="default" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm" className='bg-secondary text-white' style={{width: 260}}>STIR: </InputGroup.Text>
                        <Form.Control
                            aria-label="default"
                            aria-describedby="inputGroup-sizing-default"
                            type="text"
                            {...register("INN", {required: true, minLength: 9})}
                        />
                    </InputGroup>
                    <InputGroup size="default" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm" className='bg-secondary text-white' style={{width: 260}}>Hudud: </InputGroup.Text>
                        <Form.Control
                            aria-label="default"
                            aria-describedby="inputGroup-sizing-default"
                            type="text"
                            {...register("REGION", {required: true})}
                        />
                    </InputGroup>
                    <InputGroup size="default" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm" className='bg-secondary text-white' style={{width: 260}}>Tadbirkorlik sub'ektining F.I.SH.: </InputGroup.Text>
                        <Form.Control
                            aria-label="default"
                            aria-describedby="inputGroup-sizing-default"
                            type="text"
                            {...register("OWNER", {required: true})}
                        />
                    </InputGroup>

                    <InputGroup size="default" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm" className='bg-secondary text-white' style={{width: 260}}>Sud qarori sanasi: </InputGroup.Text>
                        <Form.Control
                            aria-label="default"
                            aria-describedby="inputGroup-sizing-default"
                            type="date"
                            {...register("JUDGEMENT_DATE", {required: true})}
                        />
                    </InputGroup> <InputGroup size="default" className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-secondary text-white' style={{width: 260}}>Sud qarori raqami: </InputGroup.Text>
                    <Form.Control
                        aria-label="default"
                        aria-describedby="inputGroup-sizing-default"
                        type="text"
                        {...register("JUDGEMENT_NUMBER", {required: true})}
                    />
                </InputGroup>
                    {/*<InputGroup size="default" className="mb-3">*/}
                    {/*    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-secondary text-white' style={{width: 260}}>Chiqarilgan sana: </InputGroup.Text>*/}
                    {/*    <Form.Control*/}
                    {/*        aria-label="default"*/}
                    {/*        aria-describedby="inputGroup-sizing-default"*/}
                    {/*        type="text"*/}
                    {/*        {...register("DATE_END", {required: true, minLength: 9})}*/}
                    {/*    />*/}
                    {/*</InputGroup>*/}
                    {/*<InputGroup size="default" className="mb-3">*/}
                    {/*    <InputGroup.Text id="inputGroup-sizing-sm" className='bg-secondary text-white' style={{width: 260}}>Holati: </InputGroup.Text>*/}
                    {/*    <Form.Control*/}
                    {/*        aria-label="default"*/}
                    {/*        aria-describedby="inputGroup-sizing-default"*/}
                    {/*        type="text"*/}
                    {/*        {...register("STATUS", {required: true, minLength: 9})}*/}
                    {/*    />*/}
                    {/*</InputGroup>*/}
                    <InputGroup size="default" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm" className='bg-secondary text-white' style={{width: 260}}>Izoh: </InputGroup.Text>
                        <Form.Control
                            aria-label="default"
                            aria-describedby="inputGroup-sizing-default"
                            type="text"
                            {...register("NOTE", {required: true})}
                        />
                    </InputGroup>
                    <Button variant="primary" type="submit" className="ml-auto">
                        Saqlash
                    </Button>
                </Form>
            </div>

        </>
    )
}

export default Blacklist;