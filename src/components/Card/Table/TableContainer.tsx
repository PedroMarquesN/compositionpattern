import React from "react";
import CardContainer from "../CardContainer/CardContainer";
import { DataTable, DataTableProps } from "./Data";
import { StyledTable } from "./styles";
import ButtonWrapper from "./ButtonTable";


export const TableContainer = () => {
  return (
    <CardContainer>
      <StyledTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>Centro</th>
            <th>Transportadora</th>
            <th>Volume</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {DataTable.map((data: DataTableProps) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.center}</td>
              <td>{data.transportadora}</td>
              <td>{data.volume}</td>
              <td>{data.status}</td>
              <td><ButtonWrapper/></td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </CardContainer>
  );
};