import React from "react";
import  {
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";

const About = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
      source={{
          uri: 'https://www.eurodiaconia.org/wordpress/wp-content/uploads/2020/03/hilf-jetzt-logo-ohne-text-300x300.png',
        }}
            style={styles.imageStyle}
        />
      <Text style={styles.design}>
      {'\n'}  This site provides random user together with their profile picture and basic informations.
  </Text> 
    </View>
  );
}

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
   imageStyle: {
    height: 150,
    width: 150,
    opacity: 2,
    alignContent: 'center',
    padding: 10,
    marginVertical: 10,
    borderRadius: 20
  },
   design: {
    fontFamily: 'Berlin Sans FB',
    color: 'white',
    textAlign: 'justify',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '5%'
  },
});