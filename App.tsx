import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import { Sidebar } from './src/navigator'

const App = () => {
  return (
    <NavigationContainer>
      <Sidebar />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})

export default App
