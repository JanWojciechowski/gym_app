import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    mainContainer:{
        width: '100%',
        height: '100%'
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      position: 'absolute'
    },
    titleContainer:{
      marginTop: '5%',
      width: '100%',
      alignItems: 'center',
    },
    titleText:{
      color: '#ffff',
      fontSize: 30,
      fontWeight: '600',   
    },

    mainButtons:{
        width: 50,
        height: 50,
        color: '#841584'
    }
  

  });
  
  export default styles;