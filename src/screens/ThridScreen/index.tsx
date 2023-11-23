import { StackScreenProps } from '@react-navigation/stack'
import { FC } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { globalTheme } from '../../theme/appTheme'

interface ThridScreenProps extends StackScreenProps<any, any> {}

const ThridScreen: FC<ThridScreenProps> = ({ navigation }) => {
  return (
    <View style={globalTheme.appMargin}>
      <Text>Thrid Screen</Text>
      <Button 
        title='Back'
        onPress={() => navigation.pop()}
      />

      <Button 
        title='Go Home'
        onPress={() => navigation.popToTop()}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default ThridScreen
