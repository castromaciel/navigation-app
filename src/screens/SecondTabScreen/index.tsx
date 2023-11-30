import { FC, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface SecondTabScreenProps {}

const SecondTabScreen: FC<SecondTabScreenProps> = () => {

  useEffect(() => {
    console.log('Second tab screen')
  }, [])

  return (
    <View>
      <Text>SecondTabScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default SecondTabScreen
