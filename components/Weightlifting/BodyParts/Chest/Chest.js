
import { StyleSheet,View, Image, Text, SafeAreaView, Pressable, ImageBackground } from 'react-native';
import styles from './styles'

const image = require('../../../../assets/backgroundImage.jpg');

const Chest = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
     <ImageBackground source={image}  style={styles.image} blurRadius={1}/>
       <Pressable  style={styles.button}
       onPress={() =>  navigation.navigate('Sztanga')}
       >
         {/* <Image style={styles.icoSquat} source={require('../../assets/gym_ico/bench_press.png')} /> */}
        <Text style={styles.text}>Sztanga - ławka płaska</Text>
      </Pressable>

      <Pressable  style={styles.button}
       onPress={() =>  navigation.navigate('Hantle Skos')}>
         {/* <Image style={styles.icoSquat} source={require('../../assets/gym_ico/bench_press.png')} /> */}
        <Text style={styles.text}>Hantle - ławka skośna</Text>
        <Text style={styles.subText}>wyciskanie, szeroki chwyt</Text>
      </Pressable>

      <Pressable  style={styles.button}
       onPress={() =>  navigation.navigate('Hantle Płasko')}>
      
         {/* <Image style={styles.icoSquat} source={require('../../assets/gym_ico/bench_press.png')} /> */}
        <Text style={styles.text}>Hantle - ławka płaska</Text>
        <Text style={styles.subText}>wyciskanie, wąski chwyt</Text>
      </Pressable>

    </SafeAreaView>
  );
}

export default Chest


