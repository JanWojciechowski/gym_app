
import { Button,View, Text, TextInput, SafeAreaView, Pressable, ImageBackground } from 'react-native';
import React, {useState} from "react";

import styles from './styles'

import { getDatabase, ref, onValue, set, get, child } from 'firebase/database';


const Sztanga = () => {

    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [repeat, setRepeat] = useState('');

    const putData = ()=>{

        const db = getDatabase();
        const reference = ref(db, 'wegithlifting/sztanga/data');
        set(reference, {
          FirstRep: {first},
          LastRep: {last},
          RepNum: {repeat}
        }).then(() => {
          console.log('User updated!');
        }).catch(error => {
          console.error(error)
        });

        console.log(`first: ${first}`)
        console.log(`last: ${last}`)
        console.log(`repeat: ${repeat}`)
      }
    
      const getData = ()=>{
    
        const dbRef = ref(getDatabase());
        get(child(dbRef, `wegithlifting`)).then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
          } else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });
      }


  return (
    <SafeAreaView style={styles.container}>
   
    <View style={styles.inputsContainer}>
     <TextInput style={styles.input}
      placeholder='kg'
      onChangeText={(val)=> setFirst(val)}
      keyboardType='numeric'
      />

        <TextInput style={styles.input}
      placeholder='kg'
      onChangeText={(val)=> setLast(val)}
      keyboardType='numeric'
      />  
 
        <TextInput style={styles.input}
            placeholder='kg'
            onChangeText={(val)=> setRepeat(val)}
            keyboardType='numeric'
            />  

 </View>
     <Button onPress={putData} title="Put Data" color="#841584" />



    </SafeAreaView>
  );
}

export default Sztanga


