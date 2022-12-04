import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

type GuestGuardProps = {
    children: ReactNode;
  };
  
  export default function GuestGuard({ children }: GuestGuardProps) {
    const { user } = useAuth();
    if (user) {
      return <Navigate to={'/'} />;
    }
  
    return <>{children}</>;
  }