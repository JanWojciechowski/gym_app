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
import { db } from "../../../../../Firebase/firebase";
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
import MainChart from '../../../../Weightlifting/MainChart'

const image = require("../../../../../assets/backgroundImage.jpg");

const PullUp = () => {
  const [maxRep, setMax] = useState("");
  const [repeat, setRepeat] = useState("");
  const [data, setData] = useState([]);
  const [newData, setNewRecord] = useState(false);

  let chartLabel = [];
  let czartDataset = []

  useEffect(() => {
    Read();
  }, [newData]);

  const ClearText = () => {
    setMax("");
    setRepeat("");
  };
  const Create = () => {
    let current = new Date();
    let date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`
    let chartDate = `${current.getDate()}/${
      current.getMonth() + 1
    }`
    ;
    if (maxRep && repeat) {
      const docData = {
        MaxRep: Number(maxRep),
        Repeat: Number(repeat),
        Data: date,
        Time: Date(date),
        ChartDate: chartDate 
      };
      addDoc(collection(db, "Plecy_Podciąganie"), docData)
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
    const myCollection = collection(db, "Plecy_Podciąganie");
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
    const docRef = doc(db, "Plecy_Podciąganie", id);

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
          <Text style={styles.inputText}>Max Podciągnięć</Text>
          <TextInput
            style={styles.input}
            placeholder="num"
            value={maxRep}
            onChangeText={(val) => setMax(val)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.inputText}>Ilość powtórzeń</Text>
          <TextInput
            style={styles.input}
            placeholder="num"
            value={repeat}
            onChangeText={(val) => setRepeat(val)}
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
          <Text style={styles.tHead}>MaxRep </Text>
          <Text style={styles.tHead}>Rep</Text>
          <Text style={styles.tHead}></Text>
        </View>
        <ScrollView>
          {data.map((item) => {
             chartLabel.push(item.data.ChartDate)
             czartDataset.push(parseInt(item.data.MaxRep))
            return (
              <View key={item.id} style={styles.listWrapper}>
                <Text style={styles.firstRow}>{item.data.Data}</Text>
                <Text style={styles.row}>{item.data.MaxRep}</Text>
                <Text style={styles.row}>{item.data.Repeat}</Text>
                <Pressable style={styles.row} onPress={() => Delete(item.id)}>
                  <Text>❌</Text>
                </Pressable>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <MainChart chartLabel={chartLabel} czartDataset={czartDataset}/>
  
     
    </SafeAreaView>
  );
};

export default PullUp;
