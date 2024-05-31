import React from 'react';
import {StyledNotificationText} from "./Styles";

const NotificationText: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <StyledNotificationText>{children}</StyledNotificationText>;
};

export default NotificationText;