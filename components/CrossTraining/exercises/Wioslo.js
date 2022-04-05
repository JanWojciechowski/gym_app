import {
    Button,
    View,
    Text,
    TextInput,
    SafeAreaView,
    FlatList,
    Pressable,
    ScrollView,
    ImageBackground,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import { db } from "../../../Firebase/firebase";
  import styles from "./styles";
  import {
    setDoc,
    doc,
    deleteDoc,
    addDoc,
    collection,
    getDocs,
    query,
    orderBy,
    limit,
  } from "firebase/firestore";
  
  const image = require("../../../assets/backgroundImage.jpg");
  
  const Wioslo = () => {
  
    const [distance, setDistance] = useState("");
    const [time, setTime] = useState("");
    const [data, setData] = useState([]);
    const [newData, setNewRecord] = useState(false);
  
    useEffect(() => {
      Read();
    }, [newData]);
  
    const ClearText = () => {
      setDistance("");
      setTime("");
     
    };
    const Create = () => {
      let current = new Date();
      let date = `${current.getDate()}-${
        current.getMonth() + 1
      }-${current.getFullYear()}`;
      if (distance && time) {
        const docData = {
          Dystans: Number(distance),
          Czas: (time),
          Data: date,
          Time: Date(date),
        };
        addDoc(collection(db, "cross_wioslo"), docData)
          .then(() => {
            console.log("Document added");
            ClearText();
            setNewRecord(true);
          })
          .catch(() => {
            console.log(error);
          });
      } else {
        alert("uzupełnij wszystkie pola");
      }
    };
  
    const Read = () => {
      const myCollection = collection(db, "cross_wioslo");
      const q = query(myCollection, orderBy("Time", "desc"), limit(10));
      getDocs(q)
        .then((resp) => {
          const myDoc = resp.docs.map((doc) => ({
            data: doc.data(),
            id: doc.id,
          }));
          setData(myDoc);
          setNewRecord(false);
        })
        .catch((error) => console.log(error.message));
    };
  
    const Delete = (id) => {
      const docRef = doc(db, "cross_wioslo", id);
  
      deleteDoc(docRef)
        .then(() => console.log("Document deleted"))
        .catch((error) => console.log(error.message));
      setNewRecord(true);
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={image} style={styles.image} blurRadius={1} />
        <View style={styles.inputsContainer}>
          <View style={styles.itemContainer}>
            <Text style={styles.inputText}>Dystans</Text>
            <TextInput
              style={styles.input}
              placeholder="m"
              value={distance}
              onChangeText={(val) => setDistance(val)}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.inputText}>Minuty</Text>
            <TextInput
              style={styles.input}
              placeholder="00:00"
              value={time}
              onChangeText={(val) => setTime(val)}
              keyboardType="numeric"
            />
          </View>
      
        </View>
        <View style={styles.addContainer}>
          <Pressable onPress={Create} style={styles.button}>
            <Text>Dodaj+</Text>
          </Pressable>
        </View>
  
        <View style={styles.body}>
          <View style={styles.listWrapper}>
            <Text style={styles.tHeadFirst}>Data</Text>
            <Text style={styles.tHead}>Dystans </Text>
            <Text style={styles.tHead}>Czas</Text>
            <Text style={styles.tHead}>Delete</Text>
          </View>
          <ScrollView>
            {data.map((item) => {
              return (
                <View key={item.id} style={styles.listWrapper}>
                  <Text style={styles.firstRow}>{item.data.Data}</Text>
                  <Text style={styles.row}>{item.data.Dystans}</Text>
                  <Text style={styles.row}>{item.data.Czas}</Text>
             
                  <Pressable style={styles.row} onPress={() => Delete(item.id)}>
                    <Text>❌</Text>
                  </Pressable>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  };
  
  export default Wioslo;
  