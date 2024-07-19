import Button from "../../../components/Button/Button";
import { ModalContent } from "./Styles";
import Modal from '@mui/material/Modal';

interface EditUserModalProps {
    open: boolean;
    onClose: () => void;
  }
  
  const EditUserModal: React.FC<EditUserModalProps> = ({ open, onClose }) => (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <ModalContent>
        <h2 id="modal-title">Editar Usuário</h2>
        <p id="modal-description">Aqui você pode editar os detalhes do usuário.</p>
        <Button onClick={onClose}>Fechar</Button>
      </ModalContent>
    </Modal>
  );
  
  export default EditUserModal;