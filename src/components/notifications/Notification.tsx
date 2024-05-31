import React from 'react';
import NotificationIcon from './NotificationIcon';
import NotificationText from './NotificationText';
import NotificationTooltip from './NotificationTooltip';
import NotificationClose from "./NotificationClose";
import {StyledNotification} from "./Styles";
import { NotificationProps } from '../../@types/Notification';


const Notification: React.FC<NotificationProps> & {
    Icon: React.FC<React.ImgHTMLAttributes<HTMLImageElement>>;
    Text: React.FC<{ children: React.ReactNode }>;
    Tooltip: React.FC<{ children: React.ReactNode }>;
    Close: React.FC<{ onClick: () => void }>;
} = ({ onClick, children, width, height, fontSize }) => {
    return (
        <StyledNotification
            onClick={onClick}
            width={width}
            height={height}
            fontSize={fontSize}
        >
            {children}
        </StyledNotification>
    );
};

Notification.Icon = NotificationIcon;
Notification.Text = NotificationText;
Notification.Tooltip = NotificationTooltip;
Notification.Close = NotificationClose;

export default Notification;