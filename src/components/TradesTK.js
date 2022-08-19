import React from "react";
import { Link, Outlet } from "react-router-dom";

const Trades = () => {
  return (
    <div className='w-100 min-vh-100'>
      <div
        className='text-center rounded my-3 mx-5 py-2 '
        style={{ background: "#c3d3e0" }}
      >
        <div role='group'>
          <Link to='tender' className='btn px-3' style={{ color: "#264A68" }}>
            Tender
          </Link>{" "}
          <Link to='ed' className='btn px-3' style={{ color: "#264A68" }}>
            Elektron do'kon
          </Link>{" "}
          <Link to='auction' className='btn px-3' style={{ color: "#264A68" }}>
            Auction
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
