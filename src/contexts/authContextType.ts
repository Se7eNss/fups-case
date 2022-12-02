import { ReactNode } from "react"

export interface LoginData  {
    userType:string,
    username:string,
    password:string
}

export interface User {
    username:string,
    userType:string,
}

export type AuthContextProps= {
    children:ReactNode
}

export type  AuthContextType = {
    isAuthenticated:boolean,
    user:User | null,
    login: (data:LoginData) => void,
}

