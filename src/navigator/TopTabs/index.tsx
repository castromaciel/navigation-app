import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FC } from 'react';
import { StyleSheet } from 'react-native';
import { AlbumsScreen, ChatScreen, ContactsScreen } from '../../screens';

type Screens = {
  'Albums': undefined
  'Chat': undefined
  'Contacts': undefined
}
const Tab = createMaterialTopTabNavigator<Screens>();

interface TopTabsProps {}

const TopTabs: FC<TopTabsProps> = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Albums" component={AlbumsScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
    </Tab.Navigator>
  )
}


const styles = StyleSheet.create({})

export default TopTabs
