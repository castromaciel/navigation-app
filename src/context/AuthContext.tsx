import { FC, ReactNode, createContext, useReducer } from 'react'
import { authReducer } from './reducers'

// Definir como luce el contexto.
export interface AuthState {
  isLogged: boolean
  username?: string
  favouriteIcon?: string
}

// Estado inicial
const authInitalState: AuthState = {
  isLogged: false,
  username: undefined,
  favouriteIcon: undefined
}

// Definir las acciones
export interface AuthActions {
  signIn: () => void
}


interface AuthContextProps extends AuthActions {
  authState: AuthState
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

interface AuthProviderProps {
  children: ReactNode | ReactNode[]
}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, authInitalState)

  const signIn = () => dispatch({ type: 'signIn' })
  
  return (
    <AuthContext.Provider value={{
      authState,
      signIn
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext }
export default AuthProvider
