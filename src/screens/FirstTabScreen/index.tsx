import { FC, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors, globalTheme } from '../../theme/appTheme'

interface FirstTabScreenProps {}

const FirstTabScreen: FC<FirstTabScreenProps> = () => {

  const { top: paddingTop } = useSafeAreaInsets()

  useEffect(() => {
    console.log('First tab screen')
  }, [])

  return (
    <View style={{
      ...globalTheme.appMargin,
      paddingTop
    }}>
      <Text>Icons</Text>

      <Text>
        <Icon name="airplane-outline" size={80} color={colors.primary} />
        <Icon name="logo-linkedin" size={80} color={colors.primary} />
        <Icon name="logo-tux" size={80} color={colors.primary} />
        <Icon name="logo-amazon" size={80} color={colors.primary} />
        <Icon name="logo-react" size={80} color={colors.primary} />
        <Icon name="shirt-outline" size={80} color={colors.primary} />
      </Text>
      
    </View>
  )
}

const styles = StyleSheet.create({})

export default FirstTabScreen
