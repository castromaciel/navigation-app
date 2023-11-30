import { FC, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface FirstTabScreenProps {}

const FirstTabScreen: FC<FirstTabScreenProps> = () => {

  useEffect(() => {
    console.log('First tab screen')
  }, [])

  return (
    <View>
      <Text>FirstTabScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default FirstTabScreen
