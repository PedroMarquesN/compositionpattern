import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../Input";
import { roles } from "../LoginForm";
import ButtonForm from "../Button";
import { useNavigate } from "react-router-dom";
import { FormContainer, StyledSelect } from "../styles";
import { IRegisterFormInput } from "../../../@types/Forms/RegisterUser";
import { registerUserDashboard } from "../../../api/userService";


const UserRegistrationForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IRegisterFormInput>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IRegisterFormInput> = async (data) => {
    try {
      const response = await registerUserDashboard(data);
      console.log("Usuário registrado com sucesso!", response);
      navigate('/dashboard/panel');
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Nome de Usuário:"
        type="text"
        register={register}
        name="username"
        error={errors.username?.message}
        showIcon={false}
      />
            <Input
        label="Nome Completo"
        type="text"
        register={register}
        name="name"
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
      <Input
        label="Nova Senha:"
        type="password"
        register={register}
        name="password"
        error={errors.password?.message}
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

      <ButtonForm type="submit">Criar Conta</ButtonForm>
    </FormContainer>
  );
};

export default UserRegistrationForm;
