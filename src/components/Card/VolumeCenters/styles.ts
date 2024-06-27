import styled from "styled-components";

export const CenterContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start; 
    gap: 0.625rem; 
`;

export const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-basis: calc((100% / 9) - 1.25rem); 
    flex-grow: 1; 
    height: 12.125rem;
    background-color: ${({ theme }) => theme.colors.text};
    border-radius: ${({ theme }) => theme.radius[1]};
    box-sizing: border-box;
    cursor: pointer;
    margin: 0.625rem;

    &:hover {
        background-color: ${({ theme }) => theme.colors.overeasy};
    }

    @media (max-width: 1200px) {
        flex-basis: calc((100% / 6) - 1.25rem);
    }

    @media (max-width: 900px) {
        flex-basis: calc((100% / 4) - 1.25rem);
    }

    @media (max-width: 600px) {
        flex-basis: calc((100% / 2) - 1.25rem);
    }

    @media (max-width: 400px) {
        flex-basis: calc(100% - 1.25rem);
    }
`;

export const CenterIcon = styled.img`
    width: 4.625rem;
    height: 4.625rem;
    padding-bottom: ${({ theme }) => theme.space[1]};

    @media (max-width: 600px) {
        width: 3rem;
        height: 3rem;
    }
`;

export const CenterCode = styled.h1`
    font-size: 1.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text1};

    @media (max-width: 600px) {
        font-size: 1.2rem;
    }
`;

export const CenterLocation = styled.h2`
    font-size: 1.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text1};

    @media (max-width: 600px) {
        font-size: 1.2rem;
    }
`;
