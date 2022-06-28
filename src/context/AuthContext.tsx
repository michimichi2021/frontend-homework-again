import { ReactNode,useState, createContext } from 'react';
import type { User } from "firebase/auth";

export type AuthProps={
  children:ReactNode
}

export type UserType = User | null;

export type AuthContextProps={
  user:UserType
}


export const AuthContext = createContext<Partial<AuthContextProps>();

const AuthContextProvider = ({ children}:AuthProps) => {
  const [isAuth, setIsAuth] = useState(false);

  const login = () => {
    setIsAuth(true);
  }

  return(
    <AuthContextProvider value={{login, isAuth}}>
      {children}
    </AuthContextProvider>
  )
}

export default AuthContextProvider;



