import { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface FirstScreenProps {}

const FirstScreen: FC<FirstScreenProps> = () => {
  return (
    <View>
      <Text>First Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default FirstScreen
