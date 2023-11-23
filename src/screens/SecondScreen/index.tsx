import { StackScreenProps } from '@react-navigation/stack'
import { FC, useEffect } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { globalTheme } from '../../theme/appTheme'

interface SecondScreenProps extends StackScreenProps<any, any>{}

const SecondScreen: FC<SecondScreenProps> = ({ navigation }) => {

  useEffect(() => {
    navigation.setOptions({
      title: 'Hello world',
      headerBackTitle: 'Go back'
    })
  }, [])
  
  return (
    <View style={globalTheme.appMargin}>
      <Text style={globalTheme.title}>
        Second Screen
      </Text>

      <Button 
        title='Go to 3rd screen'
        onPress={() => navigation.navigate('Third Screen')}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default SecondScreen
