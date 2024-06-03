import { ButtonHTMLAttributes, ElementType, ReactNode } from "react";

export interface NewNotificationRootProps {
    children: ReactNode
}

export interface NewNotificationActionsProps {
    children: ReactNode
}

export interface NewNotificationActionProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    icon:ElementType,
}
export interface NotificationContentProps {
    text?:string
}

export interface NotificationIconProps {
    icon: ElementType
}