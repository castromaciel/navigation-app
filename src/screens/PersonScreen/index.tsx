import { StackScreenProps } from '@react-navigation/stack'
import { FC, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RouteStackParams } from '../../navigator/StackNavigator'
import { globalTheme } from '../../theme/appTheme'

interface PersonScreenProps extends StackScreenProps<RouteStackParams, 'Person Screen'> {}

const PersonScreen: FC<PersonScreenProps> = ({ navigation, route }) => {
  const params = route.params

  useEffect(() => {
    navigation.setOptions({
      title: params.name
    })
  }, [])

  return (
    <View style={globalTheme.appMargin}>
      <Text style={globalTheme.title}>
        {
          JSON.stringify(params, null, 3)
        }
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default PersonScreen
