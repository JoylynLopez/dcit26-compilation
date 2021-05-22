//BSCS 3-4
//LOPEZ, JOYLYN M.
//CO, ANGELICA MARIE E.
//CHAN, ALEXANDER CANE
//MOJICA, VANESSA JANE A.

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  
  return (
    <View style={styles.container}>
    <Text style={{color: '#F535AA', fontSize: 40, fontWeight: 'bold', fontFamily: 'forte'}}>
    Hello World
    </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center'
    },
});
