import { StackScreenProps } from '@react-navigation/stack'
import { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { globalTheme } from '../../theme/appTheme'

interface SettingsScreenProps extends StackScreenProps<any, any> {}

const SettingsScreen: FC<SettingsScreenProps> = () => {
  const insets = useSafeAreaInsets()

  return (
    <View 
      style={{
        ...globalTheme.appMargin,
        marginTop: insets.top + 16
      }}
    >
      <Text style={globalTheme.title}>Settings Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default SettingsScreen
