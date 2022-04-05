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
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import { db } from "../../../../../Firebase/firebase";
import styles from "./styles";
import {
  setDoc,
  doc,
  getDoc,
  deleteDoc,
  addDoc,
  collection,
  getDocs,
  query,
  orderBy,
  limit,
} from "firebase/firestore";

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

const image = require("../../../../../assets/backgroundImage.jpg");

const Sztanga = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [repeat, setRepeat] = useState("");
  const [data, setData] = useState([]);
  const [newData, setNewRecord] = useState(false);

  let chartLabel = [];
  let czartDataset = []

  useEffect(() => {
    Read();
  }, [newData]);

  const ClearText = () => {
    setFirst("");
    setLast("");
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

    if (first && last && repeat) {
      const docData = {
        First: Number(first),
        Last: Number(last),
        Repeat: Number(repeat),
        Data: date,
        Time: Date(date),
        ChartDate: chartDate 
      };
      addDoc(collection(db, "wegithlifting_sztanga"), docData)
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
    const myCollection = collection(db, "wegithlifting_sztanga");
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
    const docRef = doc(db, "wegithlifting_sztanga", id);

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
          <Text style={styles.inputText}>Pierwsza seria</Text>
          <TextInput
            style={styles.input}
            placeholder="kg"
            value={first}
            onChangeText={(val) => setFirst(val)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.inputText}>Ostatnia seria</Text>
          <TextInput
            style={styles.input}
            placeholder="kg"
            value={last}
            onChangeText={(val) => setLast(val)}
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
          <Text style={styles.tHead}>First </Text>
          <Text style={styles.tHead}>Last</Text>
          <Text style={styles.tHead}>Rep</Text>
          <Text style={styles.tHead}>Delete</Text>
        </View>
        <ScrollView>
          {data.map((item) => {
              chartLabel.push(item.data.ChartDate)
              czartDataset.push(item.data.Last)
            return (
              <View key={item.id} style={styles.listWrapper}>
                <Text style={styles.firstRow}>{item.data.Data}</Text>
                <Text style={styles.row}>{item.data.First}</Text>
                <Text style={styles.row}>{item.data.Last}</Text>
                <Text style={styles.row}>{item.data.Repeat}</Text>

                <Pressable style={styles.row} onPress={() => Delete(item.id)}>
                  <Text>❌</Text>
                </Pressable>
              </View>
            );
          })}
        </ScrollView>
      </View>
          
      <View>
  
  <LineChart
    data={{
      labels: chartLabel,
      datasets: [
        {
          data: czartDataset
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel=""
    yAxisSuffix="kg"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "rgba(12,116,118,0.9)",
      backgroundGradientTo: "rgba(12,116,118,0.9)",
      decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "red"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>

    </SafeAreaView>
  );
};

export default Sztanga;
