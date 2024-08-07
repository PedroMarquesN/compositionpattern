import styled from "styled-components";

export const ContainerLogin = styled.div`
    background: #fff;
    display: flex;
    gap: 10rem;
    height: 100vh;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 7rem;

    a{
        color: inherit;
        text-decoration: none;
        margin-left: 22rem;
    }
`
export const ImageContainer = styled.div`
    width: 60%;
    height: 100vh;
    border-radius: 5rem;
    overflow: hidden; 
    padding: 20px; 
`;

export const FormImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    object-fit: cover;
`;
export const InputContainer = styled.div`
    position: relative;
    display: flex;
    margin-bottom: 2rem;
    flex-direction: column;

    label {
        color: #000;
        font-family: Inter;
        font-size: 2.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    input {
    width: 30.6875rem;
    height: 3.6rem;
    border-radius: 0.25rem;
    background: #E0E0E0;
    border: none;
    border-radius: 0.25rem;
    color: #606060; 
    &:focus {
        outline: none;
        border: 1px solid #ccc;
    }

    }
    svg {
        font-size: 1.5rem;
        position: absolute;
        right: 10px;
        top: 75%;
        transform: translateY(-50%);
  }

`

export const StyledButtonForm = styled.button`
color: #FFF;
width: 30.6875rem;
height: 3.8125rem;
flex-shrink: 0;
border:none;
cursor: pointer;
font-family: Inter;
font-size: 1.8rem;
font-style: normal;
font-weight: 700;
line-height: normal;
border-radius: 0.25rem;
background: #97B43C;
margin-top: 3rem;


&:hover {
   background-color: #708030;
}
`

export const ImgLogo = styled.img`
    max-width: 25rem;
    object-fit: cover;

`

export const DivContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const StyledSelect = styled.select`
  padding: 8px;
  font-size: 16px;
  border-radius: ${({ theme }) => theme.radius[1]};
`;