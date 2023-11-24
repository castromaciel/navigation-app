import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import SidebarMenu from './src/navigator/SidebarMenu'

const App = () => {
  return (
    <NavigationContainer>
      <SidebarMenu />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})

export default App
