import styled from "styled-components";

export const CardNavigation = styled.div`
    display: flex;
    align-items: center;
    gap: 1.25rem;
    width: 94.125rem;
    height: 16.1875rem;
    background-color: ${({ theme }) => theme.colors.tertiary};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;


export const DivIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: ${({ theme }) => theme.radius[1]};
    width: 9rem;
    height: 8rem;
    background: ${({ theme }) => theme.colors.primary};
    &:hover {
        scale: 1.1;
        background-color: ${({ theme }) => theme.colors.greenHover};
    }
`;

export const ContainerIcon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 8rem;
    margin-left: 0;
    cursor: pointer;

`;


export const StyledCardText = styled.p`
        font-size: 1.2rem;
        font-weight: 500;
        margin-top: 0.5rem;
        text-align: center;
        word-wrap: break-word;
        overflow-wrap: break-word;
    `