
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/HomeScreen/HomeScreen'
import Weightlifting from './components/Weightlifting/Weightlifting';
import Running from './components/Running/Running'

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen}  />
      <Stack.Screen name="Weightlifting" component={Weightlifting} />
      <Stack.Screen name="Running" component={Running} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}


