import styled from "styled-components";

interface StyledCardContainerProps {
    width?: string;
    height?: string;
}

export const StyledCardContainer = styled.div<StyledCardContainerProps>`
    overflow:auto;
    width: ${({ width }) => width || "100%"};
    height: 100%;
    background-color: ${({ theme }) => theme.colors.tertiary};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    `