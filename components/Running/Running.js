
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';



const Running = () => {
  return (
    <SafeAreaView style={styles.container}>

     <Text>Running vew </Text>
    
    </SafeAreaView>
  );
}

export default Running


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
    
  },
});
