import About from "./About";

import Area from "./charts/AreaEK";
import AreaTT from "./charts/AreaTT";
import AreaAuc from "./charts/AreaAuc";
import AreaEShop from "./charts/AreaEShop";
import AreaComp from "./charts/AreaComp";
import Donut from "./charts/Donut";
import LineWithData from "./charts/LineWithData";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Line from "./charts/Line";
import Stat from "./charts/Stat";
import StackedBars from "./charts/StackedBars";
import TreeMap from "./charts/TreeMap";

function Home() {
  return (
    <div className=' pt-3'>
      <Container>
        <Row>
          <Col>
            <About />
          </Col>
        </Row>
        <Row>
          <Col>
            <Stat />
          </Col>
        </Row>
        <Row>
          <Col>
            <StackedBars />
          </Col>
        </Row>
        <Row>
          <Col>
            <TreeMap />
          </Col>
        </Row>
        <Row>
          <Col>
            <Accordion className=' rounded'>
              <Accordion.Item eventKey='0' className='bg-light'>
                <Accordion.Header>
                  <span
                    className='ms-2 text-secondary'
                    style={{ fontSize: "1.1em" }}
                  >
                    Savdo turlari bo'yicha hisobot (2022 yil)
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  <Area />
                  <AreaEShop />
                  <AreaAuc />
                  <AreaTT />
                  <AreaComp />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
        <Row className='pt-5'>
          <Col>
            <Donut />
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
