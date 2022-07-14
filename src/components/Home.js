import About from './About';

import Area from './charts/Area';
import Donut from './charts/Donut';
import LineWithData from './charts/LineWithData';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Line from './charts/Line';

function Home() {
  return (
    <div className='container pt-3'>
      <Container>
        <Row>
          <Col>
            <About />
          </Col>
        </Row>
        <Row className='pt-5'>
          <Col>
            <Donut />
          </Col>
          <Col>
            <Area />
          </Col>
        </Row>
        <Row className='pt-5'>
          <Col>
            <Line />
          </Col>
          <Col>
            <LineWithData />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
