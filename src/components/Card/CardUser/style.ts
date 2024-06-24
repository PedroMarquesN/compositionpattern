import styled from "styled-components"

export const CardUser = styled.div `

    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[6]};
    padding: ${({ theme }) => theme.space[4]};
    width: 30.3125rem;
    height: 16.1875rem;
    background-color: ${({ theme }) => theme.colors.tertiary};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);


`
export const DataUserContainer = styled.div`

`
export const DataUser = styled.div`
margin-bottom: 0.8rem;
    label {
        color: #4B4545;
        font-size: 1.4rem;
        font-weight: 600;
    }
    p {
        color: #4B4545;
        font-size: 1.4rem;
        font-weight: 400;
    
    }
`

export const PerfilImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 9.25rem;
    height: 9.1875rem;
    border-radius: 50%;
    background-color: #C4C4C4;
`


export const ImageUser = styled.img `
    display: flex;
    justify-content: center;
    align-items: center;
`