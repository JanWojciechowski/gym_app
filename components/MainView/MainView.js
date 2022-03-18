
import { Text, View, ImageBackground } from 'react-native';
import styles from './styles'
import MainButtons from '../Buttons/MainButtons'
const image = require('../../assets/backgroundImage.jpg');


const MainView = () => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={image}  style={styles.image} blurRadius={1}/>
       <View style={styles.titleContainer}> 
            <Text style={styles.titleText}>
                My Gym App
            </Text>
       </View>
       
        <MainButtons/>
    
    </View>
  );
}

export default MainView