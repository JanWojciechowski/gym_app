
import { StyleSheet,View, Image, Text, SafeAreaView, Pressable, ImageBackground } from 'react-native';
import styles from './styles'

const image = require('../../../../assets/backgroundImage.jpg');

const Triceps = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
     <ImageBackground source={image}  style={styles.image} blurRadius={1}/>
       <Pressable  style={styles.button}
       onPress={() =>  navigation.navigate('Triceps Sztanga Skośna')}
       >
         {/* <Image style={styles.icoSquat} source={require('../../assets/gym_ico/bench_press.png')} /> */}
        <Text style={styles.text}>Uginanie Ramion Sztanga Skośna</Text>
        <Text style={styles.subText}>Leżąc - ławka płaska</Text>
      </Pressable>

      <Pressable  style={styles.button}
       onPress={() =>  navigation.navigate('Triceps Wyciąg')}
       >
         {/* <Image style={styles.icoSquat} source={require('../../assets/gym_ico/bench_press.png')} /> */}
        <Text style={styles.text}>Uginanie ramion na wyciągu</Text>
        <Text style={styles.subText}>Wyciąg górny</Text>

      </Pressable>

    </SafeAreaView>
  );
}

export default Triceps


