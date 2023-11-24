import { StackScreenProps } from '@react-navigation/stack'
import { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { globalTheme } from '../../theme/appTheme'

interface SettingsScreenProps extends StackScreenProps<any, any> {}

const SettingsScreen: FC<SettingsScreenProps> = () => {
  return (
    <View style={globalTheme.appMargin}>
      <Text style={globalTheme.title}>SettingsScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default SettingsScreen
