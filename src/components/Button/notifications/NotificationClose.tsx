import React from 'react';
import {StyledNotificationClose} from "./Styles";

const NotificationClose: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    return <StyledNotificationClose onClick={onClick}>X</StyledNotificationClose>;
};

export default NotificationClose;