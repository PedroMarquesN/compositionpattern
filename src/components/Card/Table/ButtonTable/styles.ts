import styled from "styled-components";

export const ButtonTable = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    background-color: ${({ theme }) => theme.colors.error};
    width: 17rem;
    height: 2.9rem;
    border: none;
    border-radius: ${({ theme }) => theme.radius[1]};
    cursor: pointer;
    transition: background-color 0.3s;
    color: ${({ theme }) => theme.colors.text};
    
    &:hover {
        background-color: #e57373;
    }
    
    `;