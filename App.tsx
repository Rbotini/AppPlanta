
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Confirm } from './src/pages/Confirm';
import { Start } from './src/pages/Start';
import { Welcom } from './src/pages/Welcom';


export default function App() {
  return (
    <View style={styles.container}>
 
    <Welcom/>

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
