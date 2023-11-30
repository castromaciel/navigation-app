import { FC, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { globalTheme } from '../../theme/appTheme'

interface SecondTabScreenProps {}

const SecondTabScreen: FC<SecondTabScreenProps> = () => {

  useEffect(() => {
    console.log('Second tab screen')
  }, [])

  return (
    <View style={globalTheme.appMargin}>
      <Text>SecondTabScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default SecondTabScreen
