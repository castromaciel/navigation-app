import { AuthState } from "./AuthContext";

type AuthActions =
  | { type: 'signIn' }
  | { type: 'changeFavouriteIcon', payload: string }

const authReducer = (state: AuthState, action: AuthActions): AuthState => {

  switch (action.type) {
    case 'changeFavouriteIcon':
      return {
        ...state,
        favouriteIcon: action.payload,
      }

    case 'signIn':
      return {
        ...state,
        isLogged: true,
        username: 'no-username-yet..'
      }

    default:
      return state

  }
}

export default authReducer
