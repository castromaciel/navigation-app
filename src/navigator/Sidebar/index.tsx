import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { useWindowDimensions } from 'react-native';
import { SettingsScreen } from '../../screens';
import StackNavigator from '../StackNavigator';

const Drawer = createDrawerNavigator();

const Sidebar = () => {
  const { width: WIDTH_SIZE } = useWindowDimensions()

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType:  WIDTH_SIZE >= 768 ? 'permanent' : 'front',
        headerTitle: '',
        headerShown: false
      }}
    >
      <Drawer.Screen
        name="StackNavigator"
        options={{ title: 'Home' }}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{ title: 'Settings' }}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
}

export default Sidebar
