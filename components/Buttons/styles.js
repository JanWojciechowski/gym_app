
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },
  button: {
    height: 120,
    width: 120,
    margin: 10,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.8)'
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: 'black'
  } ,
  icoWeight:{
    width: 65,
    height: 30,
    marginBottom: 15
  },
  icoRun:{
    width: 45,
    height: 40,
    marginBottom: 15
  },
  icoCross:{
    width: 45,
    height: 40,
    marginBottom: 15
  },
  icoBike:{
    width: 60,
    height: 50,
    marginBottom: 15
  },


});

export default styles;