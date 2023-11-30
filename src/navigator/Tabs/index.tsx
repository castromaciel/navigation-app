import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FirstTabScreen, SecondTabScreen, ThirdTabScreen } from '../../screens';
import { colors } from '../../theme/appTheme';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: colors.white,
      }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: colors['base-100'],
        }
      }}
    >
      <Tab.Screen
        name="Tab1"
        options={{ title: 'Tab1' }}
        component={FirstTabScreen}
      />
      <Tab.Screen
        name="Tab2"
        options={{ title: 'Tab1' }}
        component={SecondTabScreen}
      />
      <Tab.Screen
        name="Tab3"
        options={{ title: 'Tab1' }}
        component={ThirdTabScreen}
      />
    </Tab.Navigator>
  );
}

export default Tabs
