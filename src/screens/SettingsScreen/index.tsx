import { StackScreenProps } from '@react-navigation/stack'
import { FC, useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { AuthContext } from '../../context/auth/AuthContext'
import { colors, globalTheme } from '../../theme/appTheme'

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

      {
        authState?.favouriteIcon && (
        <Text>
          <Icon
            name={authState.favouriteIcon}
            size={150}
            color={colors.primary}
          />
        </Text>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({})

export default SettingsScreen
