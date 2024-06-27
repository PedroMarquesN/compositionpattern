import styled from "styled-components";

export const CenterContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2rem;
`;

export const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 10rem;
    width: 10rem;
    background-color: ${({ theme }) => theme.colors.text};
    border-radius: ${({ theme }) => theme.radius[1]};
    box-sizing: border-box;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.overeasy};
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

`;

export const CenterLocation = styled.h2`
    font-size: 1.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text1};

`;
