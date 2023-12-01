import { FC } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useAuthContext } from '../../context'
import { globalTheme } from '../../theme/appTheme'

interface ContactsScreenProps {}

const ContactsScreen: FC<ContactsScreenProps> = () => {
  const { signIn, authState } = useAuthContext()

  return (
    <View style={globalTheme.appMargin}>
      <Text style={globalTheme.title}>ContactsScreen</Text>

      {
        !authState.isLogged && (
          <Button
            title='Sign in'
            onPress={signIn}
          />
        )
      }
      
    </View>
  )
}

const styles = StyleSheet.create({})

export default ContactsScreen
