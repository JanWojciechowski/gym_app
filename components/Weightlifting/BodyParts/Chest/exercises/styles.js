import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'grey'
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
        margin: 10,
        width: 100,
        height: 50,
        textAlign: 'center',
        borderRadius: 10,
        fontSize: 16,
        backgroundColor: 'white',
        
      },
      inputsContainer:{
          flexDirection: 'row',
          justifyContent:'space-around',
  
      },
    
      itemContainer:{
        alignItems: 'center'
      },
      inputText:{
        marginTop: 20,
        color: 'black',
        fontSize: 16,
        fontWeight: '600',
      
      },
      button: {
        height: 60,
        width: 120,
        margin: 10,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(12,116,118,0.9)',
      
      },
      addContainer:{
        display: 'flex',
        alignItems: 'center'
      },
   

      // tableC View

      body:{
        flex: 1,
      },
      listWrapper: { 
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderBottomWidth: 0.5
      },
      row:{
        flex: 1,
        fontSize: 18,
        paddingHorizontal: 2,
        paddingVertical: 7,
        textAlign: 'center'
      },
      tHead:{
        flex: 1,
        fontSize: 17,
        fontWeight: 'bold',
        paddingHorizontal: 2,
        paddingVertical: 7,
        textAlign: 'center'
      }
    
});

export default styles;