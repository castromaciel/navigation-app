import { createStackNavigator } from '@react-navigation/stack';
import { FirstScreen, SecondScreen, ThridScreen } from '../../screens';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FirstScreen" component={FirstScreen} />
      <Stack.Screen name="SecondScreen" component={SecondScreen} />
      <Stack.Screen name="ThirdScreen" component={ThridScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator
