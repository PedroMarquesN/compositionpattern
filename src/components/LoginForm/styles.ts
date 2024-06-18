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
        text-decoration: none;
        margin-left: 22rem;
    }
`

export const FormImg = styled.img`
    width: 60%;
    height: 100vh;
    //object-fit: cover;
`
export const InputContainer = styled.div`
    position: relative;
    display: flex;
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
        background: #F4F4F4;
        border: none;
        border-radius: 0.25rem;
    }
    svg {
        font-size: 1.5rem;
        position: absolute;
        right: 10px;
        top: 75%;
        transform: translateY(-50%);
  }
`

export const Button = styled.button`
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
    width:  150px;
    height: 150px;

`

export const DivContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`