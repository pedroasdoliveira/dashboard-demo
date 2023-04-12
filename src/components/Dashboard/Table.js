import React from "react";
import Vector from "../../assets/Group.png";

const Table = () => {
  return (
    <>
      <div className="table-header">
        <h3>Procedimentos</h3>

        <img src={Vector} />
      </div>

      <div className="table-container">
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <td>Paciente</td>
              <td>Nome</td>
              <td>Data de Entrada</td>
              <td>Operadora</td>
              <td>Protocolo</td>
              <td>Status</td>
            </tr>
          </thead>

          <tbody></tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
