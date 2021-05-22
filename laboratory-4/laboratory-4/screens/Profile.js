import React from "react";
import  {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image
} from "react-native";
import { Ionicons } from '@expo/vector-icons';

const Profile = ({navigation}) => {
  return (
    <ScrollView>
    <View style={styles.container}>
    <Image
      source={{
          uri: 'https://labblog.uofmhealth.org/sites/lab/files/2020-07/COVID_particle.jpg',
        }}
            style={styles.imageStyle}
        />
     <Text style={styles.text}>CORONA VIRUS</Text>
     <Text style={styles.design}>
     
     Disease: {'\n\n'}
    - coronavirus disease (COVID-19){'\n\n'}

    Virus: {'\n\n'}
    - severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2){'\n\n'}
    Brief Information: 
    {'\n\n'}  Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.

{'\n\n'}  Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.

{'\n\n'}  The best way to prevent and slow down transmission is to be well informed about the COVID-19 virus, the disease it causes and how it spreads. Protect yourself and others from infection by washing your hands or using an alcohol based rub frequently and not touching your face. 

{'\n\n'}  The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow).</Text>
    </View>
    </ScrollView>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
   imageStyle: {
    height: 180,
    width: 280,
    opacity: 2,
    alignContent: 'center',
    padding: 10,
    marginVertical: 10,
    borderRadius: 20
  },
  text: {
    fontFamily: 'papyrus',
    color: 'gold',
    fontSize: 25,
    fontWeight: 'bold'
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