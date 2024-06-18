import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAuth } from '../../AuthProvider';
import { useNavigate} from 'react-router-dom'
import { ContainerLogin, DivContainer, FormContainer, FormImg, ImageContainer, ImgLogo, InputContainer, StyledButtonForm } from './styles';
import LogoSafra from '../../assets/logoSafra.png'
import { FaEye, FaUser } from 'react-icons/fa';

interface IFormInput {
  username: string;
  password: string;
}

const BANANA: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormInput> = data => {
    navigate('/dashboard')
  };

  return (
    <ContainerLogin>
      <ImageContainer>
      <FormImg src='https://s3-alpha-sig.figma.com/img/d876/6eda/3ec7b4519e9dcf99c2edb85a0ee8f75b?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JTHxHbY1G6qoEJhddw0jC49cc7DY6OLFN5kSB7zr2Iu9iLzkoipmd6fyFGruDLsBjqumVvTzCD5dnM6mwVaZ~6Cg5FhS-goRWCbZu-lM941PuoJSeEzs4NbI6azRO-lbcud38aC9i-xjHLkGGL4o8QNM3isR~y4jMHUagfg2FufQKVlf2gng5EajZ5loX-BjAs9rs3zJaZ-vXWyCYRhk3h2NsZ8R3EXv4oOBgS7kPktystvN4bJe2kycnl1-Cnps5Wp7oyUszrPUNbsBVGY5WkJPjICtZX9pCudWrBgoX5nQIwcK0WTk7Ed-Kz1QTIrSD3azgEb2lO95RspD6xETrA__' alt='imagem fazenda'/>
      </ImageContainer>

      <DivContainer>
      <ImgLogo src={LogoSafra} alt="sdiujdfijdi"/> 
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <label>Usuário: </label>
        <input
          {...register('username', { required: 'Username is required' })}
          type="text"
        />
        {errors.username && <p>{errors.username.message}</p>}
        <FaUser />
      </InputContainer>
      <InputContainer>
        <label>Senha: </label>
        <input
          {...register('password', { required: 'Password is required' })}
          type="password"
        />
        {errors.password && <p>{errors.password.message}</p>}
        <FaEye />
      </InputContainer>
      <a href='#'>Esqueçeu a senha ?</a>
      <StyledButtonForm type="submit">Acessar Portal</StyledButtonForm>
    </FormContainer>
      </DivContainer>
      

    </ContainerLogin>
  );
};

export default BANANA;
