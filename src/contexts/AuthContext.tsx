import React, { useEffect, useMemo, useState } from "react";
import {AuthContextType,AuthContextProps, LoginData} from './authContextType'
import useLocalStorage from '../hooks/useLocalStorage'

const AuthContext = React.createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }:AuthContextProps) => {

    const [user,setUser] = useLocalStorage('user',null)
    const [isAuthenticated, setisAuthenticated] = useState(false)

    useEffect(() => {
        window.localStorage.getItem(user) != null && setisAuthenticated(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    const login = (data:LoginData) =>{
        setUser(data)
    }
    const logout = ()=>{
        setUser(null)
        setisAuthenticated(false)
    }

    
    const value = useMemo(() => ({
        user,
        isAuthenticated,
        login,
        logout
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }), [user])

    return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>)
}


export {AuthContext,AuthProvider}