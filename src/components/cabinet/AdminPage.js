import React, {useEffect, useState} from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {useForm} from "react-hook-form";

const AdminPage = () => {

    const {register, handleSubmit} = useForm();
    const [organizations, setOrganization] = useState([]);

    useEffect(() => {
        try {
            const response = axios.get(
                process.env.REACT_APP_LOCAL_URL_GET_ORGANIZATIONS
            );
            setOrganization(response.data);
            console.log(response.data.body)
        } catch (error) {
            console.log(error);
        }
    }, []);


    const onSubmit = (d) => {
        axios.post(process.env.REACT_APP_LOCAL_URL_POST_CREATE_USER, d);
    }
    return (
        <>
            <div className='container'>
                <h2 className='my-4'>Foydalanuvchi qo'shish.</h2>
                <hr/>
                <Form onSubmit={handleSubmit(onSubmit)}>

                    <InputGroup size="default" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm" className='bg-secondary text-white' style={{width: 150}}>Ism: </InputGroup.Text>
                        <Form.Control
                            aria-label="default"
                            aria-describedby="inputGroup-sizing-default"
                            type="text"
                            {...register("firstName", {required: true, maxLength: 80})}
                        />
                    </InputGroup>
                    <InputGroup size="default" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm" className='bg-secondary text-white' style={{width: 150}}>Familiya: </InputGroup.Text>
                        <Form.Control
                            aria-label="default"
                            aria-describedby="inputGroup-sizing-default"
                            type="text"
                            {...register("lastName", {required: true, maxLength: 80})}
                        />
                    </InputGroup>
                    <InputGroup size="default" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm" className='bg-secondary text-white' style={{width: 150}}>Xodim: </InputGroup.Text>
                        <Form.Select aria-label="Default select example" {...register("role", {required: true})}>
                            <option value="ROLE_MANAGER">Tashkilot xodimi</option>
                            <option value="ROLE_ADMIN">Vazirlik xodimi</option>
                        </Form.Select>
                    </InputGroup>

                    <InputGroup size="default" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm" className=' bg-secondary text-white' style={{width: 150}}>Tashkilot nomi: </InputGroup.Text>
                        <Form.Select aria-label="Default select example" {...register("orgId", {required: true})}>
                            <option value="1">Test</option>
                        </Form.Select>
                    </InputGroup>
                    <InputGroup size="default" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm" className='bg-secondary text-white' style={{width: 150}}>Departament: </InputGroup.Text>
                        <Form.Control
                            aria-label="default"
                            aria-describedby="inputGroup-sizing-default"
                            type="text"
                            {...register("department", {required: true, maxLength: 80})}
                        />
                    </InputGroup>
                    <InputGroup size="default" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm" className='bg-secondary text-white' style={{width: 150}}>Lavozim: </InputGroup.Text>
                        <Form.Control
                            aria-label="default"
                            aria-describedby="inputGroup-sizing-default"
                            type="text"
                            {...register("position", {required: true, maxLength: 80})}
                        />
                    </InputGroup>
                    <hr/>
                    <InputGroup size="default" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm" className='bg-secondary text-white' style={{width: 150}}>Login: </InputGroup.Text>
                        <Form.Control
                            aria-label="default"
                            aria-describedby="inputGroup-sizing-default"
                            type="text"
                            {...register("username", {required: true, maxLength: 80})}
                        />
                    </InputGroup>
                    <InputGroup size="default" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm" className='bg-secondary text-white' style={{width: 150}}>Parol: </InputGroup.Text>
                        <Form.Control
                            aria-label="default"
                            aria-describedby="inputGroup-sizing-default"
                            type="password"
                            {...register("password", {required: true, maxLength: 80})}
                        />
                    </InputGroup>
                    <Button variant="primary" type="submit" className="ml-auto">
                        Saqlash
                    </Button>
                    {/*</div>*/}
                </Form>
            </div>
        </>
    );
};
export default AdminPage;
