
import { Button,View, Text, TextInput, SafeAreaView, ScrollView, FlatList, ImageBackground } from 'react-native';
import React, {useState, useEffect} from "react";
import { db } from '../../../../../Firebase/firebase'
import styles from './styles'
import { setDoc, doc, getDoc, addDoc, collection, getDocs } from 'firebase/firestore';


const Sztanga = () => {

    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [repeat, setRepeat] = useState('');
    const [data, setData] = useState([]);
    const [text, setText] = useState('')

    useEffect(() => {
      Read()
    }, []);

    const ClearText = () => setText('')
  
    const Create = () => {

      let current = new Date()
      let date = `${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`;

        const docData = {

           "First" : Number(first),
           "Last": Number(last),
           "Repeat": Number(repeat),
           "Data": date
          
        }
        addDoc(collection(db, "wegithlifting"),docData)
          .then(()=>{
            console.log('Document added');
          })
          .catch(()=>{
            console.log(error);
          })
          ClearText()
      }
    
      const Read = () => {
        const myCollection = collection(db, 'wegithlifting')
        getDocs(myCollection).then(resp =>{
          const myDoc = resp.docs.map(doc => ({
            data: doc.data(),
            id: doc.id,
          }))
          setData(myDoc)
        }).catch(error => console.log(error.message))
      }
    
    
 

  return (
    <SafeAreaView style={styles.container}>
   
    <View style={styles.inputsContainer}>
      <View>
      <Text>Text</Text>
     <TextInput style={styles.input}
      placeholder='kg'
      onChangeText={(val)=> setFirst(val)}
      keyboardType='numeric'
      //value = {text}
      />
      </View>
       <View>
      <Text>Text</Text>
        <TextInput style={styles.input}
      placeholder='kg'
      onChangeText={(val)=> setLast(val)}
      keyboardType='numeric'
     // value ={text}
      />  
      </View>
       <View>
          <Text>Text</Text>
            <TextInput style={styles.input}
                placeholder='kg'
                onChangeText={(val)=> setRepeat(val)}
                keyboardType='numeric'
                //value ={text}
                />  
       </View>

 </View>
     <Button onPress={Create} title="Put Data" color="#841584" />
     <Button onPress={Read} title="Get Data" color="#899584" />

   
    
      <View>
        {data.map((item)=> {
          return(
            <View key={item.id} style={styles.listStyle}>
              <Text>Data: {item.data.Data}, 
              First: {item.data.First}, 
              Last: {item.data.Last},
              Repeat: {item.data.Repeat}
              
              </Text>
              
            </View>
          )
        })}
      </View>


    </SafeAreaView>
  );
}

export default Sztanga


