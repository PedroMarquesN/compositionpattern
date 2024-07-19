import { useForm } from "react-hook-form";
import Button from "../../../components/Button/Button";
import ButtonForm from "../../../components/LoginForm/Button";
import Input from "../../../components/LoginForm/Input";
import { FormContainer, StyledSelect } from "../../../components/LoginForm/styles";
import { ModalContent } from "./Styles";
import Modal from '@mui/material/Modal';
import { User } from "../../../@types/Users";
import { roles } from "../../../components/LoginForm/LoginForm";

interface EditUserModalProps {
  open: boolean;
  onClose: () => void;
  user: User;
  onSubmit: (data: any) => void;
}

const EditUserModal: React.FC<EditUserModalProps> = ({ open, onClose, user, onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      username: user.username,
      email: user.email,
      phone: user.phone,
      role: user.role,
      cnpj: user.cnpj,
    }

  });
  return (
    <Modal
    open={open}
    onClose={onClose}
    aria-labelledby="modal-title"
    aria-describedby="modal-description"
  >
    <ModalContent>
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
    <Input
      label="Novo Usuário:"
      type="text"
      register={register}
      name="username"
      error={errors.username?.message}
      showIcon={false}
    />
    <Input
      label="Email:"
      type="email"
      register={register}
      name="email"
      showIcon={false}
    />
    <Input
      label="Telefone:"
      type="tel"
      register={register}
      name="phone"
      showIcon={false}
    />
    <StyledSelect
      {...register("role" as const, { required: "Selecione um papel" })}
      defaultValue=""
    >
      <option value="" disabled hidden>
        Selecione um Cargo
      </option>
      {roles.map((role) => (
        <option key={role.value} value={role.value}>
          {role.label}
        </option>
      ))}
    </StyledSelect>
    {errors.role && <span>{errors.role.message}</span>}

    <Input
      label="CNPJ:"
      type="text"
      register={register}
      name="cnpj"
      error={errors.cnpj?.message}
      showIcon={false}
    />

    <ButtonForm type="submit">Atualizar</ButtonForm>
  </FormContainer>
      <Button onClick={onClose}>Fechar</Button>
    </ModalContent>
  </Modal>
  )
   
}
  
  export default EditUserModal;