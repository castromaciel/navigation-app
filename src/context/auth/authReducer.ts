import { AuthState } from "./AuthContext";

type AuthActions = {
  type: 'signIn'
}

const authReducer = (state: AuthState, action: AuthActions): AuthState => {

  switch (action.type) {
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