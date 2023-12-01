import { StackScreenProps } from '@react-navigation/stack'
import { FC, useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AuthContext } from '../../context/auth/AuthContext'
import { globalTheme } from '../../theme/appTheme'

interface SettingsScreenProps extends StackScreenProps<any, any> {}

const SettingsScreen: FC<SettingsScreenProps> = () => {
  const { authState } = useContext(AuthContext)
  const insets = useSafeAreaInsets()

  return (
    <View 
      style={{
        ...globalTheme.appMargin,
        marginTop: insets.top + 16
      }}
    >
      <Text style={globalTheme.title}>
        {JSON.stringify(authState, null, 4)}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default SettingsScreen
