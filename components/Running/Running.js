
import { StyleSheet, View, Text } from 'react-native';



const Running = () => {
  return (
    <View style={styles.container}>

     <Text> Running view </Text>
    
    </View>
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
