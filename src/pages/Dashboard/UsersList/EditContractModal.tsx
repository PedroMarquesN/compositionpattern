import React from "react";
import { Modal, Table, TableHead, TableRow, TableCell, TableBody, IconButton, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import {  UserContract } from "../../../@types/Contract"; 
import { IoCloseCircleOutline } from "react-icons/io5";
import { ModalContainer } from "./Styles";

interface EditContractModalProps {
  open: boolean;
  onClose: () => void;
  contracts: UserContract[];
}

const truncateId = (id: string, length: number = 5) => {
  return id.length > length ? `${id.substring(0, length)}...` : id;
};


const EditContractModal: React.FC<EditContractModalProps> = ({ open, onClose, contracts }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <ModalContainer>
      <DialogTitle>
          Contratos do Cliente
          <IconButton aria-label="close" onClick={onClose} style={{ position: 'absolute', right: 8, top: 8 }}>
            <IoCloseCircleOutline />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Quantidade</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contracts.map((contract) => (
                <TableRow key={contract.id}>
                  <TableCell>{truncateId(contract.id.toString())}</TableCell>
                  <TableCell>{contract.quantity} Toneladas</TableCell>
                  <TableCell>{contract.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Fechar</Button>
        </DialogActions>
      </ModalContainer>

    </Modal>
  );
};

export default EditContractModal;
