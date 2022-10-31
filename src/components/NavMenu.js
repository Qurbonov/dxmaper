import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {LinkContainer} from "react-router-bootstrap";
import logo from "./img/logo1.png";
import {useNavigate} from "react-router-dom";
import React from "react";

function NavMenu() {
    function hasJWT() {

        let flag = false;
        localStorage.getItem("token") ? flag = true : flag = false
        return flag
    }

    const history = useNavigate();
    const userLogout = () => {
        localStorage.removeItem('token')
        history("/")
        history(0)
    }
    if (hasJWT()) {
        return (<>
            <Navbar
                className='navbar py-4 shadow px-0'
                style={{borderBottom: "8px outset #C3E3FF"}}
            >
                <Container>
                    <Navbar.Brand href='/'>
                        <img src={logo} width='200' height='50'/>
                    </Navbar.Brand>
                    <Nav className='mr-auto'>
                        <LinkContainer to='/contractsSuccess'>
                            <Nav.Link href='#features' className='text-center align-middle'> Amalga
                                oshgan <br/> shartnoma ma'lumotlari</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/trades'>
                            <Nav.Link href='#features' className='text-center align-middle'>Amaldagi
                                e'lonlar</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/contractsFailed'>
                            <Nav.Link href='#features' className='text-center align-middle'> Amalga
                                oshmagan <br/> shartnoma
                                ma'lumotlari</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/contractsCoorp'>
                            <Nav.Link href='#features'
                                      className='text-center align-middle '>Korporativ <br/> shartnoma
                                ma'lumotlari</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/about'>
                            <Nav.Link href='#features' className='text-center align-middle '>Portal
                                haqida</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/personalCabinet'>
                            <Nav.Link href='#features' className='text-center align-middle '> Cabinet</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/" className="m-1">
                            <Nav.Link className="btn btn- p-3" onClick={userLogout}>LogOut</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>

        </>)
    } else {
    }

    return (
        <>
            <Navbar
                className='navbar py-4 shadow px-0'
                style={{borderBottom: "8px outset #C3E3FF"}}
            >
                <Container>
                    <Navbar.Brand href='/'>
                        <img src={logo} width='200' height='50'/>
                    </Navbar.Brand>
                    <Nav className='mr-auto'>
                        <LinkContainer to='/contractsSuccess'>
                            <Nav.Link href='#features' className='text-center align-middle'> Amalga
                                oshgan <br/> shartnoma ma'lumotlari</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/trades'>
                            <Nav.Link href='#features' className='text-center align-middle'>Amaldagi
                                e'lonlar</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/contractsFailed'>
                            <Nav.Link href='#features' className='text-center align-middle'> Amalga
                                oshmagan <br/> shartnoma
                                ma'lumotlari</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/contractsCoorp'>
                            <Nav.Link href='#features'
                                      className='text-center align-middle '>Korporativ <br/> shartnoma
                                ma'lumotlari</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/about'>
                            <Nav.Link href='#features' className='text-center align-middle '>Portal
                                haqida</Nav.Link>
                        </LinkContainer>

                        {/*<LinkContainer to="/cabinet" className="m-1">*/}
                        {/*    <Nav.Link href='#cabinet' className="btn btn- p-3">Login</Nav.Link>*/}
                        {/*</LinkContainer>*/}
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavMenu;
