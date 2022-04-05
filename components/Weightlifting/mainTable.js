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
  import mainStyles from './mainStyles';
  const image = require("./../../assets/backgroundImage.jpg");

  export default function MainTable ({first, last,repeat, Create, data, Delete}) {
    
    const [first2, setFirst] = useState(first);
    const [last2, setLast] = useState(last);
    const [repeat2, setRepeat] = useState(repeat);

    return (
      <SafeAreaView style={mainStyles.container}>
        <ImageBackground source={image} style={mainStyles.image} blurRadius={1} />
        <View style={mainStyles.inputsContainer}>
          <View style={mainStyles.itemContainer}>
            <Text style={mainStyles.inputText}>Pierwsza seria</Text>
            <TextInput
              style={mainStyles.input}
              placeholder="kg"
              value={first2}
              onChangeText={(val) => {setFirst(val)}}
              keyboardType="numeric"
            />
          </View>
          <View style={mainStyles.itemContainer}>
            <Text style={mainStyles.inputText}>Ostatnia seria</Text>
            <TextInput
              style={mainStyles.input}
              placeholder="kg"
              value={last2}

              onChangeText={(val) => setLast(val)}
              keyboardType="numeric"
            />
          </View>
          <View style={mainStyles.itemContainer}>
            <Text style={mainStyles.inputText}>Ilość powtórzeń</Text>
            <TextInput
              style={mainStyles.input}
              placeholder="num"
              value={repeat2}
              onChangeText={(val) => setRepeat(val)}
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={mainStyles.addContainer}>
          <Pressable onPress={Create} style={mainStyles.button}>
            <Text>Dodaj+</Text>
          </Pressable>
        </View>
  
        <View style={mainStyles.body}>
          <View style={mainStyles.listWrapper}>
            <Text style={mainStyles.tHeadFirst}>Data</Text>
            <Text style={mainStyles.tHead}>First </Text>
            <Text style={mainStyles.tHead}>Last</Text>
            <Text style={mainStyles.tHead}>Rep</Text>
            <Text style={mainStyles.tHead}>Delete</Text>
          </View>
          <ScrollView>
            {data.map((item) => {
              return (
                <View key={item.id} style={mainStyles.listWrapper}>
                  <Text style={mainStyles.firstRow}>{item.data.Data}</Text>
                  <Text style={mainStyles.row}>{item.data.First}</Text>
                  <Text style={mainStyles.row}>{item.data.Last}</Text>
                  <Text style={mainStyles.row}>{item.data.Repeat}</Text>
                  <Pressable style={mainStyles.row} onPress={() => Delete(item.id)}>
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
  
 
  