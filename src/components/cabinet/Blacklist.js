import React from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";


function Blacklist() {
    const {register, handleSubmit} = useForm();

    const onSubmit = (d) => {
        // axios.post(process.env.REACT_APP_LOCAL_URL_POST_CREATE_USER, d);
        alert("read");
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

                <h3>Black List</h3>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputGroup size="default" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm" className='bg-secondary text-white' style={{width: 150}}>STIR: </InputGroup.Text>
                        <Form.Control
                            aria-label="default"
                            aria-describedby="inputGroup-sizing-default"
                            type="text"
                            {...register("inn", {required: true, minLength: 9})}
                        />
                    </InputGroup>
                    <InputGroup size="default" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm" className='bg-secondary text-white' style={{width: 150}}>Nomi: </InputGroup.Text>
                        <Form.Control
                            aria-label="default"
                            aria-describedby="inputGroup-sizing-default"
                            type="text"
                            {...register("name", {required: true, minLength: 9})}
                        />
                    </InputGroup>
                    <InputGroup size="default" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm" className='bg-secondary text-white' style={{width: 150}}>Kiritilgan sana: </InputGroup.Text>
                        <Form.Control
                            aria-label="default"
                            aria-describedby="inputGroup-sizing-default"
                            type="text"
                            {...register("DATE_BEGIN", {required: true, minLength: 9})}
                        />
                    </InputGroup>
                    <InputGroup size="default" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm" className='bg-secondary text-white' style={{width: 150}}>Chiqarilgan sana: </InputGroup.Text>
                        <Form.Control
                            aria-label="default"
                            aria-describedby="inputGroup-sizing-default"
                            type="text"
                            {...register("DATE_END", {required: true, minLength: 9})}
                        />
                    </InputGroup>
                    <InputGroup size="default" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm" className='bg-secondary text-white' style={{width: 150}}>Holati: </InputGroup.Text>
                        <Form.Control
                            aria-label="default"
                            aria-describedby="inputGroup-sizing-default"
                            type="text"
                            {...register("STATUS", {required: true, minLength: 9})}
                        />
                    </InputGroup>
                    <InputGroup size="default" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm" className='bg-secondary text-white' style={{width: 150}}>Izoh: </InputGroup.Text>
                        <Form.Control
                            aria-label="default"
                            aria-describedby="inputGroup-sizing-default"
                            type="text"
                            {...register("NOTE", {required: true, minLength: 9})}
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