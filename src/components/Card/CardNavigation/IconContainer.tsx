
import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { ContainerIcon } from './style';

interface IconWrapperProps {
    children: ReactNode
}



export const IconWrapper:FC<IconWrapperProps> = ({children}) => {
    return (
        <ContainerIcon>
            {children}
        </ContainerIcon>
    )
};

export default IconWrapper;