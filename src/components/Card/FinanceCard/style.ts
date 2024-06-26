import styled from "styled-components";

export const FinanceCardContainer = styled.div`
    display: flex;
    flex-direction: column; 
`

export const FinanceH3 = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes[3]};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text1};
    margin: 1.5rem 0.25rem;
`

export const FinanceLabel = styled.label`
    font-size: ${({ theme }) => theme.fontSizes[1]};
    color: ${({ theme }) => theme.colors.text1};
    padding-left: 0.50rem;
    font-weight: 500;
`

export const FinanceInput = styled.input`
    height: 2.5rem;
    border: none;
    border-radius: 0.25rem;
    padding-left: 0.50rem;
    font-size: ${({ theme }) => theme.fontSizes[1]};
    color: ${({ theme }) => theme.colors.text1};
    margin: 0.5rem;
    background: #EAF0D8;
`

export const IconFinance = styled.div`
    display: flex;
    width: 5.1rem;
    height: 5.1rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    justify-content: center;
    align-items: center;
    
`