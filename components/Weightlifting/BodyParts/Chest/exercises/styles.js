import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
      //  backgroundColor: 'red', 
       // alignItems: 'center', 
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
        fontSize: 14,
        fontWeight: '500',
        textTransform: 'uppercase',
        color: 'black'
      } ,
      icoSquat: {
        width: 65,
        height: 30,
        marginBottom: 15,
        position:'absolute',
        left: 5,
        top: 10
      },
      input:{
        borderWidth: 1,
        borderColor: 'black',
        margin: 10,
        width: 100,
        height: 50,
        textAlign: 'center',
        borderRadius: 10,
        fontSize: 16,
      },
      inputsContainer:{
          flexDirection: 'row',
          justifyContent:'space-around'

      },
      listStyle:{
        color: 'black'
        
      }
  

});

export default styles;