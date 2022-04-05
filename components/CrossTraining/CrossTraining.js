
import { StyleSheet,View, Image, Text, SafeAreaView, Pressable, ImageBackground } from 'react-native';
import styles from './styles'

const image = require('../../assets/backgroundImage.jpg');

const CrossTraining = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
     <ImageBackground source={image}  style={styles.image} blurRadius={1}/>
       <Pressable  style={styles.button}
       onPress={() =>  navigation.navigate('Wioślarz')}
       >
         {/* <Image style={styles.icoSquat} source={require('../../assets/gym_ico/bench_press.png')} /> */}
        <Text style={styles.text}>Wiosło</Text>
      </Pressable>

  

    </SafeAreaView>
  );
}

export default CrossTraining


