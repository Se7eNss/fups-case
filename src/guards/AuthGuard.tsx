import React, { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContextProps } from '../contexts/authContextType'
import useAuth from '../hooks/useAuth'
import Login from '../pages/login/Login'

export default function AuthGuard  ({children}:AuthContextProps)  {

    const {isAuthenticated} = useAuth()
    const {pathname} = useLocation()
    const [requestedPath, setRequestedPath] = useState<string | null >(null)

    if(!isAuthenticated){
        if(pathname !== requestedPath){
            setRequestedPath(pathname)
        }
        return <Login/>
    }
    if(requestedPath && pathname !== requestedPath){
        setRequestedPath(null)
        return <Navigate to={requestedPath} />
    }

  return <>{children}</>
}

