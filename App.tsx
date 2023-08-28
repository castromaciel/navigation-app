import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import { StackNavigator } from './src/navigator'

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})

export default App
