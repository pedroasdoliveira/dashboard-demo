import React from "react";
import Title from "./Title";
import Chart from "./Chart";
import Table from "./Table";

const Wrapper = () => {
  return (
    <>
      <div>
        <div>
          <Title>{"PAINEL AM TECH"}</Title>
        </div>

        <div className="row-cards">
          <div className="box-card"></div>

          <div className="box-card"></div>

          <div className="box-card"></div>

          <div className="box-card"></div>
        </div>

        <div className="charts">
          <Chart />
        </div>

        <div className="table">
          <Table />
        </div>
      </div>
    </>
  );
};

export default Wrapper;
