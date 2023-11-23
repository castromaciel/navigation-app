import { createStackNavigator } from '@react-navigation/stack';
import { FirstScreen, SecondScreen, ThridScreen } from '../../screens';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="First Screen" component={FirstScreen} />
      <Stack.Screen name="Second Screen" component={SecondScreen} />
      <Stack.Screen name="Third Screen" component={ThridScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator
