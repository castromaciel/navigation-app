import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import React, { FC } from 'react';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SettingsScreen } from '../../screens';
import { globalTheme } from '../../theme/appTheme';
import StackNavigator from '../StackNavigator';

type Screens = {
  'StackNavigator': undefined,
  'SettingsScreen': undefined
}

const Drawer = createDrawerNavigator<Screens>();

const SidebarMenu = () => {
  const { width: WIDTH_SIZE } = useWindowDimensions()

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: WIDTH_SIZE >= 768 ? 'permanent' : 'front',
        headerTitle: '',
        headerShown: false
      }}
      drawerContent={(props) => (
        <MenuItem {...props} />
      )}
    >
      <Drawer.Screen
        name="StackNavigator"
        component={StackNavigator}
      />
      <Drawer.Screen
        name="Settings Screen"
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
}

export default SidebarMenu

const MenuItem: FC<DrawerContentComponentProps> = ({
  navigation
}) => {
  return (
    <DrawerContentScrollView>
      <View style={globalTheme.avatarContainer}>
        <Image
          source={{
            uri: 'https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif'
          }}
          style={globalTheme.avatar}
        />
      </View>

      <View style={globalTheme.menuContainer}>
        <TouchableOpacity
          style={globalTheme.menuItem}
          onPress={() => navigation.navigate('StackNavigator')}
        >
          <Text style={globalTheme.menuLabel}>
            Navigation
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={globalTheme.menuItem}
          onPress={() => navigation.navigate('Settings Screen')}
        >
          <Text style={globalTheme.menuLabel}>
            Settings
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  )
}
