import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Profile from '../screens/Profile';

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  function fetchRandomData() {
    setLoading(true);
    fetch('https://randomuser.me/api')
      .then((response) => response.json())
      .then((json) => {
        setData(json.results[0]);
        console.log(json.results[0]);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }
  useEffect(() => {
    fetchRandomData();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Text style={styles.tdesign}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Profile', data)}>
            <Image
              source={{ uri: data.picture.large }}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          {'\n'}
          {data.name.first} {data.name.last}
          {'\n'}
          {'\n'}
          <TouchableOpacity style={styles.button} onPress={fetchRandomData}>
            <Text style={styles.text}> Random User </Text>
          </TouchableOpacity>
        </Text>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  tdesign: {
    fontFamily: 'Berlin Sans FB',
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    height: 150,
    width: 150,
    opacity: 2,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'pink',
    padding: 10,
  },
  text: {
    color: 'black',
  },
});
