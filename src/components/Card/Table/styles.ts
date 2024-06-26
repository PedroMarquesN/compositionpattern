import styled from "styled-components";

export const Container = styled.div``;


export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  
  th, td {
    padding: 8px 12px;
    text-align: left;
    border: 1px solid #ddd;
  }
  
  th {
    background-color: #f4f4f4;
  }
  
  tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }
`;