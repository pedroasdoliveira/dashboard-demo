import React from "react";
import "./style.css";
import Email from "../../assets/i.ti-email.png";
import Bell from "../../assets/i.ti-bell.png";
import Avatar from "../../assets/avatar-1.jpg.png";
import Wrapper from "./Wrapper";

const MainPage = () => {
  return (
    <main>
      <div className="container">
        <div className="header">
          <div className="search">
            <input type="text" placeholder="Buscar..." />
          </div>

          <div className="btns">
            <span>
              <img src={Email} />
            </span>
            <span>
              <img src={Bell} />
            </span>
            <span>
              <img src={Avatar} />
            </span>
          </div>
        </div>

        <div style={{ margin: "1rem", width: "100%" }}>
          <div className="fixedHeightPaper">
            <Wrapper />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
