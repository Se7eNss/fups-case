import React, { useEffect, useMemo, useState } from "react";
import {AuthContextType,AuthContextProps, LoginData} from './authContextType'
import useLocalStorage from '../hooks/useLocalStorage'

const AuthContext = React.createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }:AuthContextProps) => {

    const [user,setUser] = useLocalStorage('user',null)

    useEffect(() => {
        window.localStorage.getItem(user) 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    const login = async (data:LoginData) =>{
        setUser(data)
    }
    const logout = ()=>{
        setUser(null)
    }

    
    const value = useMemo(() => ({
        user,
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