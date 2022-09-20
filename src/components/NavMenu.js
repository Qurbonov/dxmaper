import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import logo from "./img/logo1.png";
function NavMenu() {
  return (
    <>
      <Navbar
        className='navbar py-4 shadow'
        style={{ borderBottom: "8px outset #C3E3FF" }}
      >
        <Container>
          <Navbar.Brand href='/'>
            <img src={logo} width='200' height='50' />
          </Navbar.Brand>
          <Nav className='mr-auto'>
            <LinkContainer to='/home'>
              <Nav.Link href='#home'>Bosh sahifa</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/contracts'>
              <Nav.Link href='#features'>Byudjet Shartnoma ma'lumotlari</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/contractsCoorp'>
              <Nav.Link href='#features'>Korporativ Shartnoma ma'lumotlari</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/trades'>
              <Nav.Link href='#features'>Amaldagi e'lonlar</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/about'>
              <Nav.Link href='#features'>Portal haqida</Nav.Link>
            </LinkContainer>
            {/* <LinkContainer to='/service'>
              <Nav.Link href='#pricing'>Boshqalar</Nav.Link>
            </LinkContainer> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavMenu;
