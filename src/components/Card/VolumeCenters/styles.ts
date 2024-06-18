import styled from "styled-components";

export const CenterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;
    width: 94.125rem;
    height: 16.1875rem;
    background-color: ${({ theme }) => theme.colors.tertiary};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;