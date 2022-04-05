
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },

  btnContainer: {
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
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute'
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: 'black'
  } ,
  icoChest:{
    width: 70,
    height: 70,
    marginBottom: 15
  },
  icoLegs:{
    width: 60,
    height: 60,
    marginBottom: 15
  },
  icoBack:{
    width: 80,
    height: 70,
    marginBottom: 15
  },
  icoBiceps:{
    width: 60,
    height: 60,
    marginBottom: 15
  },
  icoTriceps:{
    width: 60,
    height: 60,
    marginBottom: 15
  },
  icoArm:{
    width: 60,
    height: 60,
    marginBottom: 15
  },
});

export default styles;