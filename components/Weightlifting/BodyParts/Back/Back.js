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

const image = require("../../../../assets/backgroundImage.jpg");

const Back = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} style={styles.image} blurRadius={1} />
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Podciąganie")}
      >
        {/* <Image style={styles.icoSquat} source={require('../../assets/gym_ico/bench_press.png')} /> */}
        <Text style={styles.text}>Podciąganie na drążku</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Przyciąganie drążka wąsko")}
      >
        {/* <Image style={styles.icoSquat} source={require('../../assets/gym_ico/bench_press.png')} /> */}
        <Text style={styles.text}>Przyciąganie drążka górnego</Text>
        <Text style={styles.subText}>na maszynie, wąski uchwyt</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Przyciąganie drążka szeroko")}
      >
        {/* <Image style={styles.icoSquat} source={require('../../assets/gym_ico/bench_press.png')} /> */}
        <Text style={styles.text}>Przyciąganie drążka górnego</Text>
        <Text style={styles.subText}>na maszynie, szeroki uchwyt</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Przyciąganie dolny uchwyt")}
      >
        {/* <Image style={styles.icoSquat} source={require('../../assets/gym_ico/bench_press.png')} /> */}
        <Text style={styles.text}>Przyciąganie drążka dolnego</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Back;
