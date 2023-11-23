import { createStackNavigator } from '@react-navigation/stack';
import { FirstScreen, PersonScreen, SecondScreen, ThridScreen } from '../../screens';

export type RouteStackParams = {
  'First Screen': undefined
  'Second Screen': undefined
  'Third Screen': undefined
  'Person Screen': {
    id: number | string
    name: string
  }
}

const Stack = createStackNavigator<RouteStackParams>();

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
        options={{title: 'Page 1'}}
      />
      <Stack.Screen 
        name="Second Screen"
        component={SecondScreen}
        options={{title: 'Page 2'}}
      />
      <Stack.Screen 
        name="Third Screen"
        component={ThridScreen}
        options={{title: 'Page 3'}}
      />

      <Stack.Screen 
        name="Person Screen"
        component={PersonScreen}
        options={{title: 'Person'}}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator
