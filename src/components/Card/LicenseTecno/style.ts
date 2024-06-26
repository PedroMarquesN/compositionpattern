import styled from "styled-components";

export const Container = styled.div`
`





// Contract Styles
export const ContractCard = styled.div`
    padding: ${({ theme }) => theme.space[2]};
    border-radius: ${({ theme }) => theme.radius[1]};
    background: #EAF0D8;
`

export const ContractTitle = styled.p`
    color: ${({ theme }) => theme.colors.text1};
    font-size: ${({ theme }) => theme.fontSizes[1]};
    font-weight: ${({ theme }) => theme.weight[4]};
`

export const ContractTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: ${({ theme }) => theme.space[2]};
`