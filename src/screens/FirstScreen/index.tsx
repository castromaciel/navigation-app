import { DrawerScreenProps } from '@react-navigation/drawer'
import { FC, useEffect } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { RouteStackParams } from '../../navigator/StackNavigator'
import { colors, globalTheme } from '../../theme/appTheme'

interface FirstScreenProps extends DrawerScreenProps<RouteStackParams, 'First Screen'> {}

const FirstScreen: FC<FirstScreenProps> = ({ navigation }) => {

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          title='Menu'
          onPress={() => navigation.toggleDrawer()}
        />
      )
    })
  })

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
        onPress={() => navigation.navigate('Person Screen', {
          id: 0,
          name: 'No person selected'
        })}
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
            backgroundColor: colors.primary
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
            backgroundColor: colors.secondary
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
