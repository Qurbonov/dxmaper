import About from "./About";

import Line from "./charts/Line";
import Stat from "./charts/Stat";
import Area from "./charts/AreaEK";
import Donut from "./charts/Donut";
import AreaTT from "./charts/AreaTT";
import TreeMap from "./charts/TreeMap";
import AreaAuc from "./charts/AreaAuc";
import AreaComp from "./charts/AreaComp";
import AreaEShop from "./charts/AreaEShop";
import StackedBars from "./charts/StackedBars";
import LineWithData from "./charts/LineWithData";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";

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
        <Row className='my-5 '>
          <Col>
            <Accordion className='shadow rounded'>
              <Accordion.Item eventKey='0'>
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
        <Row>
          <Col>
            <StackedBars />
          </Col>
        </Row>
        <Row className="my-5">
          <Col>
            <TreeMap />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
