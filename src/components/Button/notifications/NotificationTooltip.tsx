import React from 'react';
import {StyledNotificationTooltip} from "./Styles";

const NotificationTooltip: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <StyledNotificationTooltip>{children}</StyledNotificationTooltip>;
};

export default NotificationTooltip;