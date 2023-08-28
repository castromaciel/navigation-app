import { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface SecondScreenProps {}

const SecondScreen: FC<SecondScreenProps> = () => {
  return (
    <View>
      <Text>Second Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default SecondScreen
