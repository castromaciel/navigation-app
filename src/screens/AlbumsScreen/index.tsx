import { FC } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useAuthContext } from '../../context'
import { globalTheme } from '../../theme/appTheme'

interface AlbumsScreenProps { }

const AlbumsScreen: FC<AlbumsScreenProps> = () => {
  const { logout, authState } = useAuthContext()

  return (
    <View style={globalTheme.appMargin}>
      <Text style={globalTheme.title}>Albums Screen</Text>

      {
        authState.isLogged && (
          <Button
            title='Logout'
            onPress={logout}
          />
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({})

export default AlbumsScreen
