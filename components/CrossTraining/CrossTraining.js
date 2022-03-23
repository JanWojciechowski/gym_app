
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

const CrossTraining = () => {
  return (
    <SafeAreaView style={styles.container}>
   
     <Text> CrossTraining view </Text>
    
    </SafeAreaView>
  );
}

export default CrossTraining


const styles = StyleSheet.create({
  container: {
    flex: 1,
  //  backgroundColor: 'red', 
    alignItems: 'center', 
    justifyContent: 'center',
    
  },
});
