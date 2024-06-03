import React from 'react'
import { NewNotificationRootProps } from '../../@types/NewNotificationProps'

const NotificationRoot = ({children}:NewNotificationRootProps) => {
  return (
    <div className='bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-start gap-6' >
        {children}
    </div>
  )
}

export default NotificationRoot
