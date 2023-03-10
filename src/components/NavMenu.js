import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {LinkContainer} from "react-router-bootstrap";
import logo from "./img/logo1.png";
import logoMiv from "./img/miv.png";
import {useNavigate} from "react-router-dom";
import React from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';

import {AiOutlineLogin, AiOutlineLogout} from "react-icons/ai"

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
    return (
        <>
            <div className='container my-3 position-relative'>
                <a href="/">
                    <img src={logo} width='230' height='50' className='mt-3' alt="logo"/>
                </a>

                <a href="http://www.mf.uz" className='float-end'>
                    <img src={logoMiv} width='250' height='65' className='mt-3' alt="logo"/>
                </a>

            </div>
            <div className='my-5'>
                <Navbar collapseOnSelect expand="lg" bg="success" className='shadow'>
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <LinkContainer to='/'>
                                    <Nav.Link href='#features' className='text-light'> Bosh sahifa </Nav.Link>
                                </LinkContainer>
                                <NavDropdown title={<span className="text-light my-auto">Byudjet savdolari</span>} id="basic-nav-dropdown" className='text-light'>
                                    <NavDropdown.Item href="/trades">Amaldagi e'lonlar</NavDropdown.Item>
                                    <NavDropdown.Item href="/contractsSuccess">Amalga oshgan savdolar</NavDropdown.Item>
                                    <NavDropdown.Item href="/contractsFailed">Amalga oshmagan savdolar</NavDropdown.Item>
                                    {/*<NavDropdown.Divider/>*/}
                                    {/*<NavDropdown.Item href="/contractsCoorp">Koorporativ savdolar</NavDropdown.Item>*/}
                                </NavDropdown>
                                <LinkContainer to='/contractsCoorp'>
                                    <Nav.Link href='#features' className='text-light'>Koorporativ savdolar</Nav.Link>
                                </LinkContainer>
                                <NavDropdown title={<span className="text-light my-auto">AT savdolari</span>} id="basic-nav-dropdown" className='text-light'>
                                    {/*<NavDropdown.Item href="/trades">Amaldagi e'lonlar</NavDropdown.Item>*/}
                                    <NavDropdown.Item href="/contractsItSuccess">Amalga oshgan savdolar</NavDropdown.Item>
                                    <NavDropdown.Item href="/contractsItRating">Tashkilotlar reytingi</NavDropdown.Item>
                                    {/*<NavDropdown.Item href="/contractsFailed">Amalga oshmagan savdolar</NavDropdown.Item>*/}
                                    {/*<NavDropdown.Divider/>*/}
                                    {/*<NavDropdown.Item href="/contractsCoorp">Koorporativ savdolar</NavDropdown.Item>*/}
                                </NavDropdown>
                                <NavDropdown title={<span className="text-light my-auto">Xujjatlar</span>} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/mxh">Me'yoriy-huquqiy aktlar</NavDropdown.Item>
                                    <NavDropdown.Item href="/qullanma">Qo'llanmalar</NavDropdown.Item>
                                    <NavDropdown.Item href="/faq">Eng ko'p beriladigan savollar</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title={<span className="text-light my-auto">Reestr</span>} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/gs">_Davlat ishtirokidagi korxonalar reestri</NavDropdown.Item>

                                </NavDropdown>
                                <LinkContainer to='/about'>
                                    <Nav.Link href='#features' className='text-light'>Portal haqida</Nav.Link>
                                </LinkContainer>
                            </Nav>
                            <Nav>
                                {hasJWT() ?
                                    (
                                        <>
                                            {
                                                user_role === "ROLE_SUPERADMIN" ? (<>
                                                        <LinkContainer to='/personalCabinet'>
                                                            <Nav.Link href='#features' className='mt-2 text-light'> Umumiy ma'lumotlar </Nav.Link>
                                                        </LinkContainer>
                                                        <LinkContainer to='/adminPage'>
                                                            <Nav.Link href='#features' className='mt-2 text-light'> Administrator </Nav.Link>
                                                        </LinkContainer>
                                                        <LinkContainer to='/taxreport'>
                                                            <Nav.Link href='#features' className='mt-2 text-light'> Hisobot topshirish</Nav.Link>
                                                        </LinkContainer>
                                                        <LinkContainer to="/" className='mt-2'>
                                                            <Nav.Link onClick={userLogout} className='text-warning'>
                                                                <AiOutlineLogout className='mb-1' style={{fontSize: 24}}/>
                                                                Tizimdan chiqish
                                                            </Nav.Link>
                                                        </LinkContainer>

                                                    </>) :
                                                    user_role === "ROLE_ADMIN" ? (<>
                                                            <LinkContainer to='/personalCabinet'>
                                                                <Nav.Link href='#features' className='mt-2 text-light'> Umumiy ma'lumotlar </Nav.Link>
                                                            </LinkContainer>
                                                            <LinkContainer to='/adminPage'>
                                                                <Nav.Link href='#features' className='mt-2 text-light'> Administrator </Nav.Link>
                                                            </LinkContainer>
                                                            <LinkContainer to="/" className='mt-2'>
                                                                <Nav.Link onClick={userLogout} className='text-warning'><AiOutlineLogout className='mb-1' style={{fontSize: 24}}/> Tizimdan chiqish</Nav.Link>
                                                            </LinkContainer>
                                                        </>) :
                                                        user_role === "ROLE_MANAGER" ? (<>
                                                            <LinkContainer to='/taxreport'>
                                                                <Nav.Link href='#features' className='mt-2 text-light'> Hisobot formasi </Nav.Link>
                                                            </LinkContainer>

                                                            <LinkContainer to="/" className='mt-2'>
                                                                <Nav.Link onClick={userLogout} className='text-warning'><AiOutlineLogout className='mb-1' style={{fontSize: 24}}/> Tizimdan chiqish</Nav.Link>
                                                            </LinkContainer>
                                                        </>) : console.log("")}


                                        </>) : (<>

                                        {/*<LinkContainer to="/cabinet">*/}
                                        {/*    <Nav.Link href='#cabinet' className='text-light'>*/}
                                        {/*        <AiOutlineLogin className='mb-1' style={{fontSize: 24}}/> Tizimga kirish*/}
                                        {/*    </Nav.Link>*/}
                                        {/*</LinkContainer>*/}

                                    </>)
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>)

}

export default NavMenu;
