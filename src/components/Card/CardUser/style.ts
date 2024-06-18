import styled from "styled-components"

export const CardUser = styled.div `
    width: 30.3125rem;
    height: 16.1875rem;
    background-color: ${({ theme }) => theme.colors.tertiary};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`

export const PerfilImg = styled.div`
    width: 6.25rem;
    height: 6.1875rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.tertiary};
`