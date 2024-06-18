import { FC } from "react";
import { InputProps } from "../../../@types/LoginForm";
import { InputContainer } from "../styles";
import { FaEye, FaUser } from "react-icons/fa";

const Input: FC<InputProps> & {
    Icon:FC <{ type:string }>
} = ({label , type , register , name , error}) => {
    return (
        <InputContainer>
        <label>{label}</label>
        <input {...register(name,{required:`${label} Campo Obrigatório !`})}type={type} />
        {error && <p>{error}</p>}
        {type === 'text' && <FaUser/>}
        {type === 'password' && <FaEye />}
        </InputContainer>
    )
}

Input.Icon = ({type}) => {
    if (type  === 'text') return <FaUser />
    if (type  === 'password') return <FaEye />
    return null
}

export default Input;