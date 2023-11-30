import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { FirstTabScreen, SecondTabScreen } from '../../screens';
import { colors } from '../../theme/appTheme';
import StackNavigator from '../StackNavigator';

type Screens = {
  'Tab1': undefined,
  'Tab2': undefined
  'StackNavigator': undefined,
}

const Tab = createBottomTabNavigator<Screens>();

const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: colors.white,
      }}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: colors['base-100'],
        },
        tabBarLabelStyle: {
          fontSize: 16,
        },
        tabBarIcon: ({ color }) => {
          
          let iconName = '';

          switch(route.name) {
            case 'Tab1':
              iconName = 'T1';
              break;
            case 'Tab2':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'ST';
              break;
          }

          return <Text style={{ color }}>{iconName}</Text>
        }
      })}
    >
      <Tab.Screen
        name="Tab1"
        options={{
          title: 'Tab1',
        }}
        component={FirstTabScreen}
      />
      <Tab.Screen
        name="Tab2"
        options={{
          title: 'Tab1',
        }}
        component={SecondTabScreen}
      />
      <Tab.Screen
        name="StackNavigator"
        options={{
          title: 'Tab1',
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
}

export default Tabs
