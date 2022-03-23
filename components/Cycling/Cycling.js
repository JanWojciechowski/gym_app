
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

const Cycling = () => {
  return (
    <SafeAreaView style={styles.container}>
   
     <Text> Cycling view </Text>
    
    </SafeAreaView>
  );
}

export default Cycling


const styles = StyleSheet.create({
  container: {
    flex: 1,
  //  backgroundColor: 'red', 
    alignItems: 'center', 
    justifyContent: 'center',
    
  },
});
