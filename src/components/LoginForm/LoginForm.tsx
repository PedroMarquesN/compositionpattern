import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IFormInput } from "../../@types/LoginForm";
import { useNavigate } from "react-router-dom";
import { ContainerLogin, DivContainer, FormContainer } from "./styles";
import FormImg from "./ImageForm";
import NewFormImg from "./ImageForm";
import Logo from "./Logo";
import Input from "./Input";
import { error } from "console";
import ButtonForm from "./Button";

const LoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    navigate("/dashboard");
  };

  return (
    <ContainerLogin>
      <NewFormImg />
      <DivContainer>
        <Logo />
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Usuário:"
            type="text"
            register={register}
            name="username"
            error={errors.username?.message}
          />
          <Input
            label="Senha:"
            type="password"
            register={register}
            name="password"
            error={errors.password?.message}
          />
          <a href='#'>Esqueçeu a senha ?</a>
          <ButtonForm type='submit'>Acessar Portal</ButtonForm>
        </FormContainer>
      </DivContainer>
    </ContainerLogin>
  );
};



export default LoginForm;