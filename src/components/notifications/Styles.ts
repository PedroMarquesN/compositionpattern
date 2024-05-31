import styled from 'styled-components';
import { NotificationProps } from '../../@types/Notification';



export const StyledNotification = styled.div<NotificationProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    border-radius: 15px;
    background-color: #007BFF;
    color: #fff; 
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    width: ${props => props.width || '300px'}; 
    height: ${props => props.height || 'auto'};
    font-size: ${props => props.fontSize || '1em'};
    position: fixed; 
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
`;

export const StyledNotificationIcon = styled.img`
    width: 25px;
    height: 25px;
    margin-right: 15px;
`;

export const StyledNotificationText = styled.span`
    flex-grow: 1;
    font-size: 1em;
    color: #fff; 
    font-weight: 500;
`;

export const StyledNotificationTooltip = styled.span`
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    padding: 5px;
    background-color: #333;
    color: #fff;
    border-radius: 3px;
    font-size: 12px;
    white-space: nowrap;
    opacity: 0;
    transition: opacity 0.3s;
    visibility: hidden;

    ${StyledNotification}:hover & {
        opacity: 1;
        visibility: visible;
    }
`;

export const StyledNotificationClose = styled.button`
    background: none;
    border: none;
    font-size: 1.2em;
    color: #fff; 
    cursor: pointer;
    transition: color 0.3s ease-in-out;

    &:hover {
        color: #ff0000;
    }
`;