
import { StyleSheet,View, Image, Text, SafeAreaView, Pressable, ImageBackground } from 'react-native';
import styles from './styles'

const image = require('../../../../assets/backgroundImage.jpg');

const Legs = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
     <ImageBackground source={image}  style={styles.image} blurRadius={1}/>
       <Pressable  style={styles.button}
       onPress={() =>  navigation.navigate('Przysiady')}
       >
         {/* <Image style={styles.icoSquat} source={require('../../assets/gym_ico/bench_press.png')} /> */}
        <Text style={styles.text}>Przysiady ze sztangą</Text>
      </Pressable>

      <Pressable  style={styles.button}
       onPress={() =>  navigation.navigate('Bułgarskie')}
       >
         {/* <Image style={styles.icoSquat} source={require('../../assets/gym_ico/bench_press.png')} /> */}
        <Text style={styles.text}>Przysiady bułgarskie</Text>
      </Pressable>

    </SafeAreaView>
  );
}

export default Legs


