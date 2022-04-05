
import { StyleSheet,View, Image, Text, SafeAreaView, Pressable, ImageBackground } from 'react-native';
import styles from './styles'

const image = require('../../../../assets/backgroundImage.jpg');

const Biceps = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
     <ImageBackground source={image}  style={styles.image} blurRadius={1}/>
       <Pressable  style={styles.button}
       onPress={() =>  navigation.navigate('Uginanie Ramion Stojąc')}
       >
       <Text style={styles.text}>Uginanie Ramion Stojąc</Text>
        <Text style={styles.subText}>Uginanie ramion handlami stojąc</Text>
      </Pressable>

      <Pressable  style={styles.button}
       onPress={() =>  navigation.navigate('Modlitewnik')}>
       <Text style={styles.text}>Uginanie Ramion na modlitewniki</Text>
       
      </Pressable>

      <Pressable  style={styles.button}
       onPress={() =>  navigation.navigate('Uginanie Ramion Sztangą')}>
      
        <Text style={styles.text}>Uginanie ramion gryf łamany</Text>
   
      </Pressable>

    </SafeAreaView>
  );
}

export default Biceps


