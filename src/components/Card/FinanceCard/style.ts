import styled from "styled-components";

export const FinanceCardContainer = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[6]};
    padding: ${({ theme }) => theme.space[4]};
    width: 30.3125rem;
    height: 23.8125rem;
    background-color: ${({ theme }) => theme.colors.tertiary};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`