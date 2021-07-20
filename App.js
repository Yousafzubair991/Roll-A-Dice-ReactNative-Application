import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';
const dice = {
  1: require('./assets/images/1.PNG'),
  2: require('./assets/images/2.PNG'),
  3: require('./assets/images/3.PNG'),
  4: require('./assets/images/4.PNG'),
  5: require('./assets/images/5.PNG'),
  6: require('./assets/images/6.PNG'),
};
export default function App() {
  const [dice1, setDice1] = useState('1');
  const [dice2, setDice2] = useState('5');

  function rolldice() {
    const dice1Random = Math.floor(Math.random() * 6 + 1);
    const dice2Random = Math.floor(Math.random() * 6 + 1);

    setDice1(dice1Random);
    setDice2(dice2Random);
  }
  return (
    <View style={styles.container}>
    <View style={{alignContent:"center", justifyContent:"center"}}>
    <Text style={styles.heading}>
    PRESS THE BUTTON TO ROLL THE DICE!
    </Text>
    </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Image style={styles.img} source={dice[dice1]} />
        <Image style={styles.img} source={dice[dice2]} />
      </View>
      <TouchableOpacity onPress={rolldice}>
        <View
          style={{
            backgroundColor: '#a85c32',
            marginTop: 40,
            paddingHorizontal: 30,
            paddingVertical: 20,
            borderRadius: 8,
          }}>
          <Text style={styles.paragraph}>ROLL THE DICE</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  paragraph: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  img: {
    width: 128,
    height: 128,
  },
  heading:{
    fontSize:30,
    alignItems:"center",
    alignContent:"center",
    color:'#a85c32',
  }
});
9;
