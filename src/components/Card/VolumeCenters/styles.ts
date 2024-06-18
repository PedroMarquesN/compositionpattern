import styled from "styled-components";

export const CenterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;
    width: 94.125rem;
    height: 23.8125rem;
    background-color: ${({ theme }) => theme.colors.tertiary};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 12.125rem;
    height: 12.125rem;
    background-color: ${({ theme }) => theme.colors.text};
    border-radius: 0.625rem;
`;

export const CenterIcon = styled.img`
    width: 5.625rem;
    height: 5.625rem;
`;

export const CenterCode = styled.h1`
    font-size: 2.25rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary};
`;

export const CenterLocation = styled.h2`
    font-size: 1.5rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary};
`;