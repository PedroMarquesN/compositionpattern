import { FC } from "react";
import { InputProps } from "../../../@types/Forms/LoginForm";
import { InputContainer } from "../styles";
import { FaEye, FaUser } from "react-icons/fa";

const Input: FC<InputProps> = ({ label, type, register, name, error, showIcon = true }) => {
    const shouldShowIcon = showIcon && (type === 'text' || type === 'password');
  
    return (
      <InputContainer>
        <label>{label}</label>
        <input
          {...register(name, { required: `${label} Campo Obrigatório!` })}
          type={type}
        />
        {error && <p>{error}</p>}
        {shouldShowIcon && type === 'text' && <FaUser />}
        {shouldShowIcon && type === 'password' && <FaEye />}
      </InputContainer>
    );
  };

export default Input;