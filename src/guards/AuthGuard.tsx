import React, { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContextProps } from '../contexts/authContextType'
import useAuth from '../hooks/useAuth'

export default function AuthGuard  ({children}:AuthContextProps)  {

    const {user} = useAuth()
    const {pathname} = useLocation()
    const [requestedPath, setRequestedPath] = useState<string | null >(null)

    if(!user){
        if(pathname !== requestedPath){
            setRequestedPath(pathname)
        }
        return <Navigate to={'/auth/login'}/>
    }
    if(requestedPath && pathname !== requestedPath){
        setRequestedPath(null)
        return <Navigate to={requestedPath} />
    }

  return <>{children}</>
}

