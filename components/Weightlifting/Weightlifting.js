import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  Pressable,
  ImageBackground,
} from "react-native";
import styles from "./styles";

const image = require("../../assets/backgroundImage.jpg");

const icoChest = require("../../assets/bodyparts/torso.png");
const icoLegs = require("../../assets/bodyparts/leg.png");
const icoBack = require("../../assets/bodyparts/back.png");
const icoBiceps = require("../../assets/bodyparts/muscle.png");
const icoTriceps = require("../../assets/bodyparts/arm.png");
const icoArm = require("../../assets/bodyparts/arm-muscle.png");

const Weightlifting = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} style={styles.image} blurRadius={1} />

      <View style={styles.btnContainer}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Klatka")}
        >
          <Image style={styles.icoChest} source={icoChest} />
          <Text style={styles.text}>Klatka</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Nogi")}
        >
          <Image style={styles.icoLegs} source={icoLegs} />
          <Text style={styles.text}>Nogi</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Plecy")}
        >
          <Image style={styles.icoBack} source={icoBack} />
          <Text style={styles.text}>Plecy</Text>
        </Pressable>

        <Pressable style={styles.button}
        onPress={() => navigation.navigate("Biceps")}
        >
          <Image style={styles.icoBiceps} source={icoBiceps} />
          <Text style={styles.text}>Biceps</Text>
        </Pressable>

        <Pressable style={styles.button}
        onPress={() => navigation.navigate("Triceps")}
        >
          <Image style={styles.icoTriceps} source={icoTriceps} />
          <Text style={styles.text}>Triceps</Text>
        </Pressable>

        {/* <Pressable style={styles.button}>
          <Image style={styles.icoArm} source={icoArm} />
          <Text style={styles.text}>Ramiona</Text>
        </Pressable> */}
      </View>
    </SafeAreaView>
  );
};

export default Weightlifting;
