import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {LinkContainer} from "react-router-bootstrap";
import logo from "./img/logo1.png";

function NavMenu() {
    return (
        <>
            <Navbar
                className='navbar py-4 shadow px-0 mx-1'
                style={{borderBottom: "8px outset #C3E3FF"}}
            >
                <Container>
                    <Navbar.Brand href='/'>
                        <img src={logo} width='200' height='50'/>
                    </Navbar.Brand>
                    <Nav className='mr-auto'>
                        <LinkContainer to='/contractsSuccess'>
                            <Nav.Link href='#features'> Amalga oshgan
                                Shartnoma ma'lumotlari</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/trades'>
                            <Nav.Link href='#features'>Amaldagi e'lonlar</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/contractsFailed'>
                            <Nav.Link href='#features'> Amalga oshmagan
                                Shartnoma ma'lumotlari</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/contractsCoorp'>
                            <Nav.Link href='#features'>Korporativ Shartnoma ma'lumotlari</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/about'>
                            <Nav.Link href='#features'>Portal haqida</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavMenu;
