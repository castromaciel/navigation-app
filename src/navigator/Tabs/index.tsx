import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FirstTabScreen, SecondTabScreen, ThirdTabScreen } from '../../screens';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab1" component={FirstTabScreen} />
      <Tab.Screen name="Tab2" component={SecondTabScreen} />
      <Tab.Screen name="Tab3" component={ThirdTabScreen} />
    </Tab.Navigator>
  );
}

export default Tabs
