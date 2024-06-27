import React, { FC } from "react";
import CardContainer from "../CardContainer/CardContainer";
import { DataTable, DataTableProps } from "./Data";
import { StyledTable } from "./styles";
import ButtonWrapper from "./ButtonTable";
import { StyledH1 } from "../styles";
import { FaRegTrashAlt } from "react-icons/fa";


export const TableContainer: FC = () => {
  return (
    <CardContainer>
      <StyledH1>Grade de agendamento</StyledH1>
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
              <td><ButtonWrapper icon={<FaRegTrashAlt />}>Eliminar Agendamento</ButtonWrapper></td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </CardContainer>
  );
};