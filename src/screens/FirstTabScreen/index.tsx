import { FC, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { globalTheme } from '../../theme/appTheme'

interface FirstTabScreenProps {}

const FirstTabScreen: FC<FirstTabScreenProps> = () => {

  useEffect(() => {
    console.log('First tab screen')
  }, [])

  return (
    <View style={globalTheme.appMargin}>
      <Text>FirstTabScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default FirstTabScreen
