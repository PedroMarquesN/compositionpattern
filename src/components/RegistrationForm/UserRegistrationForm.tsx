import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../LoginForm/Input";
import { roles } from "../LoginForm/LoginForm";
import ButtonForm from "../LoginForm/Button";
import { useNavigate } from "react-router-dom";
import { StyledSelect } from "../LoginForm/styles";

export interface IRegisterFormInput {
  username: string;
  email: string;
  phone: string;
  password: string;
  role: string;
  cnpj: string;
}

const UserRegistrationForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IRegisterFormInput>();
  const [cnpjs, setCnpjs] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCnpjs = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/cnpjs", {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          console.log("Dados recebidos:", data);
          setCnpjs(data);
        } else {
          console.error("Erro ao buscar CNPJs");
        }
      } catch (error) {
        console.error("Erro ao buscar CNPJs:", error);
      }
    };

    fetchCnpjs();
  }, []);

  const onSubmit: SubmitHandler<IRegisterFormInput> = async (data) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/");
        return;
      }

      const response = await fetch("http://localhost:8080/api/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Usuário registrado com sucesso!");
       navigate('/dashboard/panel');
      } else {
        console.error("Erro ao registrar usuário");
      }
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      />
      <Input
        label="Telefone:"
        type="tel"
        register={register}
        name="phone"
      />
      <Input
        label="Nova Senha:"
        type="password"
        register={register}
        name="password"
        error={errors.password?.message}
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
      />

      <ButtonForm type="submit">Criar Conta</ButtonForm>
    </form>
  );
};

export default UserRegistrationForm;
