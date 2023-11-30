import { FC, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { globalTheme } from '../../theme/appTheme'

interface ThirdTabScreenProps {}

const ThirdTabScreen: FC<ThirdTabScreenProps> = () => {
  useEffect(() => {
    console.log('Third tab screen')
  }, [])

  return (
    <View style={globalTheme.appMargin}>
      <Text>ThirdTabScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default ThirdTabScreen
