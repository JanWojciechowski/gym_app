
import { Button,View, Text, TextInput, SafeAreaView, FlatList, Pressable,ScrollView, ImageBackground } from 'react-native';
import React, {useState, useEffect} from "react";
import { db } from '../../../../../Firebase/firebase'
import styles from './styles'
import { setDoc, doc, getDoc, addDoc, collection, getDocs } from 'firebase/firestore';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';



const Sztanga = () => {

    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [repeat, setRepeat] = useState('');
    const [data, setData] = useState([]);
    //const [text, setText] = useState('')

    useEffect(() => {
      Read()
    }, []);

    const ClearText = () => {
      setFirst('');
      setLast('');
      setRepeat('');

    }
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
        <View style={styles.itemContainer}>
        <Text style={styles.inputText}>Pierwsza seria</Text>
              <TextInput style={styles.input}
                placeholder='kg'
                value = {first}
                onChangeText={(val)=> setFirst(val)}
                keyboardType='numeric'
                
              />
        </View>
        <View style={styles.itemContainer}>
        <Text style={styles.inputText}>Ostatnia seria</Text>
              <TextInput style={styles.input}
                placeholder='kg'
                value = {last}
                onChangeText={(val)=> setLast(val)}
                keyboardType='numeric'
              />  
        </View>
        <View style={styles.itemContainer}> 
          <Text style={styles.inputText}>Ilość powtórzeń</Text>
              <TextInput style={styles.input}
                placeholder='num'
                value = {repeat}
                onChangeText={(val)=> setRepeat(val)}
                keyboardType='numeric'
               
              />  
              
        </View>
        
 </View>
     <View style={styles.addContainer}>
        <Pressable onPress={Create} style={styles.button}>
          <Text>Dodaj+</Text>
        </Pressable>
    </View>
   
    
      <View style={styles.body}>
           <View style={styles.listWrapper} >
     
             <Text style={styles.tHead}>Data</Text>
             <Text style={styles.tHead}>First Rep</Text>
             <Text style={styles.tHead}>Last Rep</Text>
             <Text style={styles.tHead}>Rep Num</Text>
             
           </View>
        <ScrollView>
        {data.map((item)=> {
          return(
            <View key={item.id} style={styles.listWrapper} >
             
              <Text style={styles.row}>{item.data.Data}</Text>
              <Text style={styles.row}>{item.data.First}</Text>
              <Text style={styles.row}>{item.data.Last}</Text>
              <Text style={styles.row}>{item.data.Repeat}</Text>
          
            </View>
          )
        })}
         </ScrollView>
      
    </View>
  
     
    </SafeAreaView>
  );
}

export default Sztanga


