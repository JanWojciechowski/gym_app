
import { StyleSheet,View, Image, Text, SafeAreaView, Pressable, ImageBackground } from 'react-native';
import styles from './styles'


const Weightlifting = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      
     <Pressable style={styles.button}  onPress={() =>  navigation.navigate('Chest')}>
        {/* <Image style={styles.icoWeight} source={require('../../assets/gym_ico/gym.png')}/> */}
        <Text style={styles.text}>Klatka</Text>
      </Pressable>

      <Pressable style={styles.button}>
  
       <Text style={styles.text}>Nogi</Text>
      </Pressable>

      <Pressable style={styles.button}>
        <Text style={styles.text}>Plecy</Text>
      </Pressable>

      <Pressable style={styles.button}>
         <Text style={styles.text}>Biceps</Text>
      </Pressable>

      <Pressable style={styles.button}>
         <Text style={styles.text}>Triceps</Text>
      </Pressable>

      <Pressable style={styles.button}>
       <Text style={styles.text}>Ramiona</Text>
      </Pressable>


    </SafeAreaView>
  );
}

export default Weightlifting


