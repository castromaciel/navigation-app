import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FC } from 'react';
import { StyleSheet, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AlbumsScreen, ChatScreen, ContactsScreen } from '../../screens';
import { colors } from '../../theme/appTheme';

type Screens = {
  'Albums': undefined
  'Chat': undefined
  'Contacts': undefined
}
const Tab = createMaterialTopTabNavigator<Screens>();

interface TopTabsProps {}

const TopTabs: FC<TopTabsProps> = () => {
  const { top: paddingTop } = useSafeAreaInsets()


  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: colors.white,
      }}
      screenOptions={({ route }) => ({
        tabBarPressColor: colors.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
        tabBarStyle: {
          shadowColor: 'transparent',
        },
        tabBarIcon: ({ color }) => {
          
          let iconName = '';

          switch(route.name) {
            case 'Albums':
              iconName = 'Al';
              break;
            case 'Chat':
              iconName = 'Ch';
              break;
            case 'Contacts':
              iconName = 'Ca';
              break;
          }

          return <Text style={{ color: colors.primary }}>{iconName}</Text>
        }
      })}
      style={{
        paddingTop
      }}
    >
      <Tab.Screen name="Albums" component={AlbumsScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
    </Tab.Navigator>
  )
}


const styles = StyleSheet.create({})

export default TopTabs
