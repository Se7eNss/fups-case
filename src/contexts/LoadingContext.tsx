import { createContext, useMemo, useState } from "react";
import { LoadingContextProps, LoadingContextType } from "./loadingContextType";



const LoadingContext = createContext<LoadingContextType | null>(null)

const LoadingProvider = ({children}:LoadingContextProps) =>{
        const [loading, setLoading] = useState<boolean>(false)


        const setIsLoading = (data:boolean) =>{
                setLoading(data)
        }

        const value = useMemo(() => ({
            loading,
            setIsLoading
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }), [loading])

        return(<LoadingContext.Provider value={value} >
                {children}
                </LoadingContext.Provider>
            )
}

export {LoadingProvider,LoadingContext}