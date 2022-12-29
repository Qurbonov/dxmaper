import About from "./About";

import React from "react";
import Map from "../map/Map";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Stat from "../charts/Stat";
import Area from "../charts/AreaEK";
import AreaTT from "../charts/AreaTT";
import TreeMap from "../charts/TreeMap";
import AreaAuc from "../charts/AreaAuc";
import AreaComp from "../charts/AreaComp";
import AreaEShop from "../charts/AreaEShop";
import StackedBars from "../charts/StackedBars";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";

function Home() {

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <About/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Stat/>
                    </Col>
                </Row>
                <Row className='my-5'>
                    <Col>
                        <Accordion className='shadow rounded'>
                            <Accordion.Item eventKey='0'>
                                <Accordion.Header>
                  <span
                      className='ms-2 text-secondary'
                      style={{fontSize: "1.1em"}}
                  >
                    Savdo turlari bo'yicha hisobot (2022 yil)
                  </span>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Area/>
                                    <AreaEShop/>
                                    <AreaAuc/>

                                    <AreaTT/>
                                    <AreaComp/>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <StackedBars/>
                        <Map/>
                    </Col>
                </Row>
                <Row className='my-5' style={{margin: "0px"}}>
                    <Col>
                        <TreeMap/>
                        <hr/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;
