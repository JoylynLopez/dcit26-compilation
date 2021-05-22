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
      {'\n'}  This website was founded last April 1, 2021. It is made in order to provide essential informations on how to prevent COVID-19. It also provides some tips on the possible action you must do in case you acquire the virus. This site is free and reliable so feel free and enjoy our website.{'\n'}
      Be updated on the current happening about COVID-19 so that you wont be a victim sooner or later. {'\n'}
      Be a good example. Follow the rules and health guidelines. {'\n'}
      Lets end this pandemic ones and for all so everybody will be free and happy again.{'\n\n\n'}
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