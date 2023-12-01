import { FC, ReactNode, createContext } from 'react'
import useInitAuthContext from './useInitAuthContext'

// Definir como luce el contexto.
export interface AuthState {
  isLogged: boolean
  username?: string
  favouriteIcon?: string
}

// Definir las acciones
export interface AuthActions {
  signIn: () => void
  changeFavouriteIcon: (favouriteIcon: string) => void
}

interface AuthContextProps extends AuthActions {
  authState: AuthState
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

interface AuthProviderProps {
  children: ReactNode | ReactNode[]
}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const { authState, signIn, changeFavouriteIcon } = useInitAuthContext()

  return (
    <AuthContext.Provider value={{
      authState,
      signIn,
      changeFavouriteIcon
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext }
export default AuthProvider
