import styled from "styled-components";

export const CenterContainer = styled.div`
    display: flex;
    flex-wrap: wrap; 
    gap: 1.25rem;
    width: 100%; 
    padding: 1.25rem; 
    height: 28.8125rem;
    background-color: ${({ theme }) => theme.colors.tertiary};
    overflow-x: auto;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc((100% / 9) - 1.25rem); 
    height: 12.125rem;
    background-color: ${({ theme }) => theme.colors.text};
    border-radius: 0.625rem;
    box-sizing: border-box; 
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.greenHover};
    }
`;

export const CenterIcon = styled.img`
    width: 4.625rem;
    height: 4.625rem;
`;

export const CenterCode = styled.h1`
    font-size: 2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary};
`;

export const CenterLocation = styled.h2`
    font-size: 1.3rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary};
`;
