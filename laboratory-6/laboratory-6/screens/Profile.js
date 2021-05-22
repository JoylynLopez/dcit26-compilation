import React from 'react';
import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  FlatList,
  Image,
} from 'react-native';
import Home from '../screens/Home';

const Profile = ({ route }) => {
  const data = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.textnames}>
          {data.name.first} {data.name.last}
           {'\n'}
          <Image source={{ uri: data.picture.large }} style={styles.pic} />
          {'\n'}{'\n'}
        </Text>
        <Text style={styles.label}>
          
          Basic Information:
        </Text>
        <Text style={styles.info}>
          {'\n'}
          Title: {data.name.title}
          {'\n'}
          Gender: {data.gender}
          {'\n'}
          Address: {data.location.postcode}, {data.location.city}, {data.location.state}
          {'\n'}
          Country: {data.location.country}
          {'\n'}
          Birthday: {data.dob.date}
          {'\n'}
          Age: {data.dob.age}
          {'\n'} {'\n'} {'\n'}
        </Text>

        <Text style={styles.label}>Contact Information:</Text>
        <Text style={styles.info}>
          {'\n'}
          Phone #: {data.phone}
          {'\n'}
          Cell #: {data.cell}
          {'\n'}
          Email: {data.email}
          {'\n'} {'\n'} {'\n'}
        </Text>

        <Text style={styles.label}>Log-in details:</Text>
        <Text style={styles.info}>
          {'\n'}
          Username: {data.login.username}
          {'\n'}
          Password: {data.login.password}
          {'\n'}
          Date Registered: {data.registered.date}
          {'\n'} 
          ID: {data.id.value}
          {'\n'} 
          ID Name: {data.id.name}
          {'\n'} {'\n'} {'\n'}
        </Text>
      </ScrollView>
    </View>
  );
};
export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    fontFamily: 'Berlin Sans FB',
    color: 'pink',
  },
  textnames: {
    fontFamily: 'showcard gothic',
    color: 'pink',
    fontSize: 30,
    alignContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '5%',
  },
  pic: {
    height: 80,
    width: 80,
    opacity: 2,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    padding: 10,
  },
  info: {
    fontFamily: 'georgia',
    color: 'pink',
    marginHorizontal: '10%',
    fontSize: 15,
  },
  label: {
    fontFamily: 'algerian',
    color: 'yellow',
    marginHorizontal: '5%',
    fontSize: 17,
  },
});
