import React, { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IFormInput } from "../../@types/Forms/LoginForm";
import { useNavigate } from "react-router-dom";
import {
  ContainerLogin,
  DivContainer,
  FormContainer,
  StyledSelect,
} from "./styles";
import NewFormImg from "./ImageForm";
import Logo from "./Logo";
import Input from "./Input";
import ButtonForm from "./Button";
import { loginUser, registerUser } from "../../api/userService";
import { IRegisterFormInput } from "../../@types/Forms/RegisterUser";

export const roles = [
  { value: "Admin", label: "Administrador" },
  { value: "Client", label: "Cliente" },
  { value: "User", label: "Usuário" },
  { value: "Viewer", label: "Visualização" },
];

export type RoleOption = (typeof roles)[number]["value"];

const API_URL_CREATE = "http://localhost:8080/api/users/create";
const API_LOGIN = "http://localhost:8080/api/auth/login";

const LoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IRegisterFormInput>();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const onSubmitLogin: SubmitHandler<IFormInput> = async (data) => {
    try {
      const { token, role, username } = await loginUser(data);
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("username", username);
      navigate("/dashboard/panel");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  const onSubmitRegister: SubmitHandler<IRegisterFormInput> = async (data) => {
    try {
      await registerUser(data);
      console.log("Usuário registrado com sucesso!");
      navigate(0);
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);
    }
  };

  const handleToggleForm = () => {
    setIsLogin(!isLogin);
    reset();
  };

  return (
    <ContainerLogin>
      <NewFormImg />
      <DivContainer>
        <Logo />
        <FormContainer
          key={isLogin ? "loginForm" : "registerForm"}
          onSubmit={
            isLogin
              ? handleSubmit(onSubmitLogin)
              : handleSubmit(onSubmitRegister)
          }
        >
          {isLogin ? (
            <>
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
              <a href="#">Esqueceu a senha?</a>
              <ButtonForm type="submit">Acessar Portal</ButtonForm>
              <ButtonForm type="button" onClick={handleToggleForm}>
                Cadastrar
              </ButtonForm>
            </>
          ) : (
            <>
              <Input
                label="Novo Usuário:"
                type="text"
                register={register}
                name="username"
                error={errors.username?.message}
              />
              <Input
                label="Email:"
                type="email"
                register={register}
                name="email"
                error={errors.username?.message}
              />{" "}
              <Input
                label="Telefone:"
                type="tel"
                register={register}
                name="phone"
                error={errors.username?.message}
              />
              <Input
                label="Nova Senha:"
                type="password"
                register={register}
                name="password"
                error={errors.password?.message}
              />
              <StyledSelect
                {...register("role" as const, {
                  required: "Selecione um papel",
                })}
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
              <ButtonForm type="submit">Criar Conta</ButtonForm>
              <ButtonForm type="button" onClick={handleToggleForm}>
                Voltar para o Login
              </ButtonForm>
            </>
          )}
        </FormContainer>
      </DivContainer>
    </ContainerLogin>
  );
};

export default LoginForm;
