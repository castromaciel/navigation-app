import { createStackNavigator } from '@react-navigation/stack';
import { FirstScreen, SecondScreen, ThridScreen } from '../../screens';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent'
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen 
        name="First Screen"
        component={FirstScreen}
        options={{title:'Page 1'}}
      />
      <Stack.Screen 
        name="Second Screen"
        component={SecondScreen}
        options={{title:'Page 2'}}
      />
      <Stack.Screen 
        name="Third Screen"
        component={ThridScreen}
        options={{title:'Page 3'}}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator
