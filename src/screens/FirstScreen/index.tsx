import { StackScreenProps } from '@react-navigation/stack'
import { FC } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { globalTheme } from '../../theme/appTheme'

interface FirstScreenProps extends StackScreenProps<any, any> {}

const FirstScreen: FC<FirstScreenProps> = ({navigation}) => {
  return (
    <View style={globalTheme.appMargin}>
      <Text>First Screen</Text>
      <Button 
        title='Ir a pagina 2'
        onPress={() => navigation.navigate('Second Screen')}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default FirstScreen
