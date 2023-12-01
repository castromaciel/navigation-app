import { NavigationContainer } from '@react-navigation/native'
import { FC, ReactNode } from 'react'
import { StyleSheet } from 'react-native'
import AuthProvider from './src/context/auth/AuthContext'
import SidebarMenu from './src/navigator/SidebarMenu'

interface AppStateProps {
  children: ReactNode | ReactNode[]
}

const AppState: FC<AppStateProps> = ({
  children
}) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <SidebarMenu />
      </AppState>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})

export default App
