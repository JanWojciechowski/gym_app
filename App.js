import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./components/HomeScreen/HomeScreen";
import Weightlifting from "./components/Weightlifting/Weightlifting";
import Running from "./components/Running/Running";
import CrossTraining from "./components/CrossTraining/CrossTraining";
import Cycling from "./components/Cycling/Cycling";
import Chest from "./components/Weightlifting/BodyParts/Chest/Chest";
import Sztanga from "./components/Weightlifting/BodyParts/Chest/exercises/Sztanga";
import HantleSkos from "./components/Weightlifting/BodyParts/Chest/exercises/HantleSkos";
import HantlePlasko from "./components/Weightlifting/BodyParts/Chest/exercises/HantlePlasko";
import Legs from "./components/Weightlifting/BodyParts/Legs/Legs";
import Squats from "./components/Weightlifting/BodyParts/Legs/exercises/Squats";
import Bulgarian from "./components/Weightlifting/BodyParts/Legs/exercises/Bulgarian";
import Back from "./components/Weightlifting/BodyParts/Back/Back";
import PullUp from "./components/Weightlifting/BodyParts/Back/exercises/pullUp";
import PullingNarr from "./components/Weightlifting/BodyParts/Back/exercises/pullingNarr";
import PullingWide from "./components/Weightlifting/BodyParts/Back/exercises/pullingWide";
import PullingDown from "./components/Weightlifting/BodyParts/Back/exercises/pullingDown";
import Biceps from "./components/Weightlifting/BodyParts/Biceps/Biceps";
import CurlBar from "./components/Weightlifting/BodyParts/Biceps/exercises/curlBar";
import StanArmBend from "./components/Weightlifting/BodyParts/Biceps/exercises/armBend";
import Prayer from "./components/Weightlifting/BodyParts/Biceps/exercises/prayer";
import Triceps from "./components/Weightlifting/BodyParts/Triceps/Triceps";
import Machine from "./components/Weightlifting/BodyParts/Triceps/exercieses/machine";
import CurlBarTriceps from "./components/Weightlifting/BodyParts/Triceps/exercieses/curlBarTriceps";
import Wioslo from "./components/CrossTraining/exercises/Wioslo";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Ciężary" component={Weightlifting} />
        <Stack.Screen name="Bieganie" component={Running} />
        <Stack.Screen name="CrossTraining" component={CrossTraining} />
        <Stack.Screen name="Wioślarz" component={Wioslo} />


        <Stack.Screen name="Rower" component={Cycling} />

        <Stack.Screen name="Klatka" component={Chest} />
        <Stack.Screen name="Sztanga" component={Sztanga} />
        <Stack.Screen name="Hantle Skos" component={HantleSkos} />
        <Stack.Screen name="Hantle Płasko" component={HantlePlasko} />

        <Stack.Screen name="Nogi" component={Legs} />
        <Stack.Screen name="Przysiady" component={Squats} />
        <Stack.Screen name="Bułgarskie" component={Bulgarian} />

        <Stack.Screen name="Plecy" component={Back} />
        <Stack.Screen name="Podciąganie" component={PullUp} />
        <Stack.Screen name="Przyciąganie drążka wąsko" component={PullingNarr} />
        <Stack.Screen name="Przyciąganie drążka szeroko" component={PullingWide}/>
        <Stack.Screen name="Przyciąganie dolny uchwyt" component={PullingDown}/>
         
        <Stack.Screen name="Biceps" component={Biceps} />  
        <Stack.Screen name="Uginanie Ramion Sztangą" component={CurlBar} /> 
        <Stack.Screen name="Modlitewnik" component={Prayer} /> 
        <Stack.Screen name="Uginanie Ramion Stojąc" component={StanArmBend} />
        
        <Stack.Screen name="Triceps" component={Triceps} />
        <Stack.Screen name="Triceps Wyciąg" component={Machine} />
        <Stack.Screen name="Triceps Sztanga Skośna" component={CurlBarTriceps} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
