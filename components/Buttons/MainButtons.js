import React from "react";
import { View, Text, Pressable, Image } from "react-native";

import styles from "./styles";

const MainButtons = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Ciężary")}
      >
        <Image
          style={styles.icoWeight}
          source={require("../../assets/gym_ico/gym.png")}
        />
        <Text style={styles.text}>Ciężary</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Bieganie")}
      >
        <Image
          style={styles.icoRun}
          source={require("../../assets/gym_ico/running.png")}
        />
        <Text style={styles.text}>Bieganie</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("CrossTraining")}
      >
        <Image
          style={styles.icoCross}
          source={require("../../assets/gym_ico/treadmill.png")}
        />
        <Text style={styles.text}>Cross Training</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Rower")}
      >
        <Image
          style={styles.icoBike}
          source={require("../../assets/gym_ico/bike.png")}
        />
        <Text style={styles.text}>Rower</Text>
      </Pressable>
    </View>
  );
};

export default MainButtons;
