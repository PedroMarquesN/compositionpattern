import styled from "styled-components";

interface StyledCardProps {
    width?: string;
    height?: string;
}

export const StyledCard = styled.div<StyledCardProps>`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[6]};
    padding: ${({ theme }) => theme.space[4]};
    width: ${(props) => props.width || "auto"};
    height: ${(props) => props.height || "auto"};
    background-color: ${({ theme }) => theme.colors.tertiary};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;