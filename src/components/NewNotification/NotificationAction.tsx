import React from "react";
import { NewNotificationActionProps } from "../../@types/NewNotificationProps";
import { twMerge } from "tailwind-merge";

const NotificationAction = ({icon: Icon , ...rest}:NewNotificationActionProps) => {
  return (
    <button
        {...rest}
        className={twMerge("w-8 h-8 rounded flex items-center justify-center bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-800 dark:hover:bg-zinc-900", rest.className)}
    >
      <Icon className="w-3 h-3 text-zinc-50" />
    </button>
  );
};

export default NotificationAction;
