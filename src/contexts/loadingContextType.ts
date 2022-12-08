import { ReactNode } from "react"

export type LoadingContextProps= {
    children:ReactNode
}

export type  LoadingContextType = {
    loading : boolean, 
    setIsLoading: (data:boolean) => void,
    
}
