
import { StyleSheet,View, Image, Text, SafeAreaView, Pressable, ImageBackground } from 'react-native';
import styles from './styles'



const Chest = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
    <ImageBackground   style={styles.image} blurRadius={1}/>
       <Pressable  style={styles.button}
       onPress={() =>  navigation.navigate('Sztanga')}
       >
         {/* <Image style={styles.icoSquat} source={require('../../assets/gym_ico/bench_press.png')} /> */}
        <Text style={styles.text}>Wyciskanie sztangi</Text>
      </Pressable>

      <Pressable  style={styles.button}>
         {/* <Image style={styles.icoSquat} source={require('../../assets/gym_ico/bench_press.png')} /> */}
        <Text style={styles.text}>Wyciskanie Hantli</Text>
      </Pressable>
    </SafeAreaView>
  );
}

export default Chest


