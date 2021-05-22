//BSCS 3-4
//LOPEZ, JOYLYN M.
//CO, ANGELICA MARIE E.
//CHAN, ALEXANDER CANE
//MOJICA, VANESSA JANE A.

import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button,  ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredItem, setEnteredItem] = useState(' ');
  const [targetItem, settargetItem] = useState([]);

  const itemInputHandler = (enteredText) => {
    setEnteredItem(enteredText);
    
  };
  const addItemHandler = () => {
    settargetItem(currentGoals => [
      ...targetItem,
      { key: Math.random().toString(), value: enteredItem }])
    setEnteredItem('');
  };
  return (
    <View style={styles.container}>
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
      
      <TextInput
        placeholder="Enter Item"
        style={styles.input}
        onChangeText= {itemInputHandler}
        value={enteredItem}
      />

      <Button color="#ff5c5c" title="ADD" onPress={addItemHandler} />
      </View>
      </View>
      <FlatList
      keyExtractor={(item, index) => item.id}
      data={targetItem}
      renderItem={itemData => (
        <View style={styles.listItem}>
          <Text>{itemData.item.value}</Text>
          </View>
      )}
      />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'black',
      
      
    },
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  input: {
    backgroundColor: '#B1FB17', 
    width: '80%', 
    borderColor: 'white', 
    borderWidth: 1.5, 
    padding: 10 
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: 'pink',
    borderColor: 'white',
    borderWidth: 1.5
  } 
});
