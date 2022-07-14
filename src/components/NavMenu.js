import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

function NavMenu() {
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='/'>DXMAP</Navbar.Brand>
          <Nav className='me-auto'>
            <LinkContainer to='/home'>
              <Nav.Link href='#home'>Bosh sahifa</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/contracts'>
              <Nav.Link href='#features'>Shartnoma ma'lumotlari</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/trades'>
              <Nav.Link href='#features'>Amaldagi e'lonlar</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/about'>
              <Nav.Link href='#features'>Portal haqida</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/service'>
              <Nav.Link href='#pricing'>Boshqalar</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavMenu;
