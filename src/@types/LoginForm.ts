import { ReactNode } from "react"

export interface InputProps {
    label: string
    type: string
    register: any
    name: string
    error?: string
}
export interface ButtonFormProps {
    type: 'submit' | 'button' | 'reset'
    children: ReactNode
}

export interface IFormInput {
    username: string
    password: string
}


export interface LoginFormProps{
    username: string
    password: string
    login: () => void
}
