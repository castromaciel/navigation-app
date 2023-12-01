import { useReducer } from "react"
import { AuthState } from "./AuthContext"
import authReducer from "./authReducer"

const authInitalState: AuthState = {
  isLogged: false,
  username: undefined,
  favouriteIcon: undefined
}

const useInitAuthContext = () => {
  const [authState, dispatch] = useReducer(authReducer, authInitalState)

  const signIn = () => dispatch({ type: 'signIn' })

  const changeFavouriteIcon = (favouriteIcon: string) => {
    dispatch({ type: 'changeFavouriteIcon', payload: favouriteIcon})
  }
  
  return {
    authState,
    signIn,
    changeFavouriteIcon
  }
}

export default useInitAuthContext