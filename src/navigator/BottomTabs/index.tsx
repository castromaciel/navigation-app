import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { FirstTabScreen } from '../../screens';
import { colors } from '../../theme/appTheme';
import StackNavigator from '../StackNavigator';
import TopTabs from '../TopTabs';

type Screens = {
  'Tab1': undefined,
  'TopTabs': undefined
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
              iconName = 'bandage-outline';
              break;
            case 'TopTabs':
              iconName = 'stopwatch-outline';
              break;
            case 'StackNavigator':
              iconName = 'navigate-outline';
              break;
          }

          return (
            <Text style={{ color }}>
              <Icon name={iconName} size={20}/>
            </Text>
          )
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
        name="TopTabs"
        options={{
          title: 'Top Tabs',
        }}
        component={TopTabs}
      />
      <Tab.Screen
        name="StackNavigator"
        options={{
          title: 'Navigator',
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
}

export default Tabs
