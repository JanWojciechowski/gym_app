import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';

import styles from './styles';

const MainButtons = ({ navigation }) => {

  


  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() =>  navigation.navigate('Weightlifting')}
      >
        
        <Image style={styles.icoWeight} source={require('../../assets/gym_ico/gym.png')}/>
        <Text style={styles.text}>Weightlifting</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Running')}
      >
         <Image style={styles.icoRun} source={require('../../assets/gym_ico/running.png')}/>
        <Text style={styles.text}>Running</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("CrossTraining")}
      >
         <Image style={styles.icoCross} source={require('../../assets/gym_ico/treadmill.png')}/>
        <Text style={styles.text}>Cross Training</Text>
      </Pressable>

      <Pressable 
        style={styles.button}
        onPress={() => navigation.navigate('Cycling')}
      >
         <Image style={styles.icoBike} source={require('../../assets/gym_ico/bike.png')}/>
        <Text style={styles.text}>Cycling</Text>
      </Pressable>

    </View>
  );
};

export default MainButtons;

