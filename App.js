
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/HomeScreen/HomeScreen'
import Weightlifting from './components/Weightlifting/Weightlifting';
import Running from './components/Running/Running';
import CrossTraining from './components/CrossTraining/CrossTraining';
import Cycling from './components/Cycling/Cycling';
import Chest from './components/Weightlifting/BodyParts/chest/Chest'
import Sztanga from './components/Weightlifting/BodyParts/Chest/exercises/Sztanga'

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
    <Stack.Navigator initialRouteName="Sztanga">
      <Stack.Screen name="Home" component={HomeScreen}  />
      <Stack.Screen name="Weightlifting" component={Weightlifting} />
      <Stack.Screen name="Running" component={Running} />
      <Stack.Screen name="CrossTraining" component={CrossTraining} />
      <Stack.Screen name="Cycling" component={Cycling} />

      <Stack.Screen name="Chest" component={Chest} />
      <Stack.Screen name="Sztanga" component={Sztanga} />

    </Stack.Navigator>
  </NavigationContainer>
  );
}


