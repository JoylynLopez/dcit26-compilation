import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Button, Image} from 'react-native';
import SampleModal from './components/SampleModal.js';

export default function App() {

  const [OpenModal, setOpenModal] = useState(false);

  return (
    <View style = {styles.container}>
      <Button
      title = 'Click Me'
      onPress = {() => setOpenModal(true)}
      />
      
      <SampleModal 
      visible = {OpenModal}
      onClose = {() => setOpenModal(false)}
      
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },


});
