import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView, StyleSheet, Text } from 'react-native'

const App = () => {
  return (
    <SafeAreaView>
      <NavigationContainer>
        <Text>App</Text>
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default App
