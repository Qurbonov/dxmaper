import React from "react";
import { Link, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Trades = () => {
  return (
    <div className='w-100 min-vh-100'>
      <Container>
        <Row className="justify-content-md-center mt-1">
          <Col xs lg="2" className='text-center'
            aria-controls="example-collapse-text"
          >
            <img src="/coop_logo.jpg" width="30" height="30" alt="" />
            <p className='pt-2 text-secondary' style={{ fontSize: 12 }}> Elektron kooperatsiya portali</p>
          </Col>
          <Col xs lg="2" className='text-center' >
            <img src="/uzex_logo.png" width="25" height="30" alt="" />
            <p className='pt-2 text-secondary' style={{ fontSize: 12 }}> Tovar-xom ashyo birjasi</p>
          </Col>
          <Col xs lg="2" className='text-center'>
            <img src="/xtxarid_logo.png" width="25" height="30" alt="" />
            <p className='pt-2 text-secondary' style={{ fontSize: 12 }}>XT-Xarid texnologiyalari</p>
          </Col>
          <Col xs lg="2" className='text-center' >
            <img src="/qurilish_logo.png" width="30" height="30" alt="" />
            <p className='pt-2 text-secondary' style={{ fontSize: 12 }}> Shaffof qurilish platformasi</p>
          </Col>
        </Row>
      </Container>

      <div
        className='text-center rounded my-3 mx-5 py-2 '
        style={{ background: "#c3d3e0" }}
      >
        <div role='group'>
          <Link to='tender' className='btn px-3' style={{ color: "#264A68" }}>
            Elektron tender
          </Link>{" "}
          <Link to='ed' className='btn px-3' style={{ color: "#264A68" }}>
            Elektron do'kon
          </Link>{" "}
          <Link to='auction' className='btn px-3' style={{ color: "#264A68" }}>
            Auksion
          </Link>{" "}
          <Link to='konkurs' className='btn px-3' style={{ color: "#264A68" }}>
            Konkurs
          </Link>

        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Trades;
