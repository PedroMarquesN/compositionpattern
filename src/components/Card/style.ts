import styled from "styled-components";

export const CardNavigation = styled.div`
    display: flex;
    align-items: center;
    gap: 1.25rem;
    width: 64.125rem;
    height: 10.1875rem;
    background-color: #FFFFFF;


`

export const DivIcons = styled.div`
display: flex;
align-items: center;
flex-direction: column;
border-radius: ${({ theme }) => theme.space[3]};

justify-content: center;
    width: 6.25rem;
    height: 6.625rem;
    background: ${({ theme }) => theme.colors.primary};
`

export const IconAndLabel = styled.div`
display: flex;
flex-direction: column;
`