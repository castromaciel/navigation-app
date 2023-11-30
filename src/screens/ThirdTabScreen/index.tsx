import { FC, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface ThirdTabScreenProps {}

const ThirdTabScreen: FC<ThirdTabScreenProps> = () => {
  useEffect(() => {
    console.log('Third tab screen')
  }, [])

  return (
    <View>
      <Text>ThirdTabScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default ThirdTabScreen
