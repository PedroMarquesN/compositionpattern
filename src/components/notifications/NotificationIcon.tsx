import React from 'react';
import {StyledNotificationIcon} from "./Styles";

const NotificationIcon: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => {
    return <StyledNotificationIcon {...props} />;
};

export default NotificationIcon;