import React from "react";
import { SiMicrosoftexcel } from "react-icons/si";

function Med() {
  return (
    <>
      <div className="container shadow-sm px-5 py-4 rounded-5">
        <h2 className="m-5 border-bottom text-center">
          Yangilash uchun Davlat zaxirasidan chiqarilgan dori vositalari
        </h2>
        <ul className="list-group  list-group-flush">
          <li className="list-group-item">
            <SiMicrosoftexcel
              className="mb-1"
              style={{ fontSize: 24, color: "#1D6F42" }}
            />{" "}
            <a
              href="/docs/medicine/Dori_vositalari.xlsx"
              className="text-decoration-none"
            >
              Davlat zaxirasidan chiqarilgan dori vositalari (26.07.2023 yil)
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Med;
