import React from "react";
import { NewNotificationActionsProps } from "../../@types/NewNotificationProps";
import { Check, X } from "lucide-react";

const NotificationActions = ({children}: NewNotificationActionsProps) => {
  return (
    <div className="flex gap-2 self-center">
      {children}
    </div>
  );
};

export default NotificationActions;
