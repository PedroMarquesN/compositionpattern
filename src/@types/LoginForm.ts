import { ButtonHTMLAttributes } from "react"

export interface LoginFormProps{
    username: string
    password: string
    login: () => void
}