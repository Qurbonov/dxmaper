import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {LinkContainer} from "react-router-bootstrap";
import logo from "./img/logo1.png";
import {Route, useNavigate} from "react-router-dom";
import React from "react";
import AdminPage from "./cabinet/AdminPage";
import Ministry from "./cabinet/Ministry";
import TaxReport from "./cabinet/TaxReport";

function NavMenu() {
    let user_role = localStorage.getItem("role");

    function hasJWT() {
        let flag = false;
        localStorage.getItem("token") ? flag = true : flag = false
        return flag
    }

    const navigate = useNavigate();
    const userLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('role')
        navigate("/")
    }
    return (<>
        <Navbar className='shadow p-4 border-bottom border-info' expand="lg">
            <Container>
                <Navbar.Brand href='/'>
                    <img src={logo} width='200' height='50'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto text-center">
                        <LinkContainer to='/contractsSuccess'>
                            <Nav.Link href='#features'> Amalga
                                oshgan <br/> shartnoma ma'lumotlari</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/trades'>
                            <Nav.Link href='#features' className='mt-2'>Amaldagi
                                e'lonlar</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/contractsFailed'>
                            <Nav.Link href='#features'> Amalga
                                oshmagan <br/> shartnoma
                                ma'lumotlari</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/contractsCoorp'>
                            <Nav.Link href='#features'
                                      className='text-center'>Korporativ <br/> shartnoma
                                ma'lumotlari</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/about'>
                            <Nav.Link href='#features' className='mt-2'>Portal
                                haqida</Nav.Link>
                        </LinkContainer>
                        {hasJWT() ?
                            (
                                <>
                                    {
                                        user_role === "ROLE_SUPERADMIN" ? (<>
                                                <LinkContainer to='/personalCabinet'>
                                                    <Nav.Link href='#features' className='mt-2 text-primary'> Umumiy ma'lumotlar </Nav.Link>
                                                </LinkContainer>
                                                <LinkContainer to='/adminPage'>
                                                    <Nav.Link href='#features' className='mt-2 text-primary'> Administrator </Nav.Link>
                                                </LinkContainer>
                                                <LinkContainer to='/taxreport'>
                                                    <Nav.Link href='#features' className='mt-2 text-primary'> Hisobot topshirish</Nav.Link>
                                                </LinkContainer>
                                                <LinkContainer to="/" className='mt-2'>
                                                    <Nav.Link onClick={userLogout} className='text-danger'>Tizimdan chiqish</Nav.Link>
                                                </LinkContainer>

                                            </>) :
                                            user_role === "ROLE_ADMIN" ? (<>
                                                    <LinkContainer to='/personalCabinet'>
                                                        <Nav.Link href='#features' className='mt-2 text-primary'> Umumiy ma'lumotlar </Nav.Link>
                                                    </LinkContainer>
                                                    <LinkContainer to='/adminPage'>
                                                        <Nav.Link href='#features' className='mt-2 text-primary'> Administrator </Nav.Link>
                                                    </LinkContainer>
                                                    <LinkContainer to="/" className='mt-2'>
                                                        <Nav.Link onClick={userLogout} className='text-danger'>Tizimdan chiqish</Nav.Link>
                                                    </LinkContainer>
                                                </>) :
                                                user_role === "ROLE_MANAGER" ? (<>
                                                    <LinkContainer to='/taxreport'>
                                                        <Nav.Link href='#features' className='mt-2 text-primary'> Hisobot topshirish </Nav.Link>
                                                    </LinkContainer>
                                                    <LinkContainer to="/" className='mt-2'>
                                                        <Nav.Link onClick={userLogout} className='text-danger'>Tizimdan chiqish</Nav.Link>
                                                    </LinkContainer>
                                                </>) : console.log("")}


                                </>) :
                            <LinkContainer to="/cabinet" className='mt-2'>
                                <Nav.Link href='#cabinet' className='text-info'>Tizimga kirish</Nav.Link>
                            </LinkContainer>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>)

}

export default NavMenu;
