import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
      //  backgroundColor: 'red', 
        alignItems: 'center', 
       // justifyContent: 'center',
        
      },
    button: {
        height: 50,
        width: '90%',
        margin: 15,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        
        backgroundColor: 'rgba(255,255,255,0.9)'
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
      },
      text: {
        fontSize: 15,
        fontWeight: '500',
        textTransform: 'uppercase',
        color: 'black'
      } ,
      subText:{
        fontSize: 14,
        fontWeight: '500',
        color: 'black'
      },

    

    

});

export default styles;