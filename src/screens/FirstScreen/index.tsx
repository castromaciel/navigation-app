import { StackScreenProps } from '@react-navigation/stack'
import { FC } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { globalTheme } from '../../theme/appTheme'

interface FirstScreenProps extends StackScreenProps<any, any> {}

const FirstScreen: FC<FirstScreenProps> = ({navigation}) => {
  return (
    <View style={globalTheme.appMargin}>
      <Text style={globalTheme.title}>
        First Screen
      </Text>
      <Button 
        title='Go to page 2'
        onPress={() => navigation.navigate('Second Screen')}
      />
      <Button 
        title='Go to Person Screen '
        onPress={() => navigation.navigate('Person Screen')}
      />

      <Text>Navigate with args</Text>

      <View style={{
        marginTop: 16,
        flexDirection: 'row',
        gap: 16,
      }}>
        <TouchableOpacity
          style={{
            ...globalTheme.buttonLarge,
            backgroundColor: '#5856D6'
          }}
          onPress={() => navigation.navigate('Person Screen', {
            id: 1,
            name: 'Peter'
          })}
        >
          <Text style={globalTheme.buttonText}>Peter</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...globalTheme.buttonLarge,
            backgroundColor: '#FF9427'
          }}
          onPress={() => navigation.navigate('Person Screen', {
            id: 2,
            name: 'Antonio'
          })}
        >
          <Text style={globalTheme.buttonText}>Antonio</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({})

export default FirstScreen
