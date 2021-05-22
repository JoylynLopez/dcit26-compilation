import React from "react";
import  {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView
} from "react-native";

const Home = ({ navigation }) => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.text}>
      STOP THE SPREAD OF COVID-19
      </Text>
      <Image 
            source={{
          uri: 'https://www.sfmta.com/sites/default/files/imce-images/2020/cdc_unit.png',
        }}
            style={styles.imageStyle}
      />
      
     <Text style={styles.design}>
    {'\n\n'} The SFMTA launches preventative PSA campaign on how to slow the spread of COVID-19. The SFMTA, in collaboration with the San Francisco Department of Public Health and Centers for Disease Control and Prevention (CDC), has launched a “Stop the Spread of Germs” Public Service Announcement (PSA) campaign on Muni vehicles to keep city residents informed about how they can help slow the spread of novel coronavirus (COVID-19).

{'\n\n'}  These preventative messages are going up throughout our system—as signage both inside and outside of vehicles, audio alerts on buses, NextMuni displays at bus shelters and signs at Muni Metro stations.

{'\n\n'}  While the SFMTA has implemented some service reductions in response to ridership drops, many still rely on Muni to make essential trips during this challenging period. These messages serve as helpful reminders, both on the bus and the street, that we all play an important role in preventing the spread of coronavirus.

{'\n\n'}  The San Francisco Department of Public Health and the Centers for Disease Control and Prevention (CDC) recommend these simple daily precautions: {'\n\n\n'}

1. Wash your hands often with soap and water for at least 20 seconds.{'\n\n'}
2. Avoid touching your eyes, nose and mouth with unwashed hands{'\n\n'}
3. Cover your cough or sneeze with a tissue, then throw the tissue in the trash{'\n\n'}
4. Stay home if you are sick, except to get medical care{'\n\n'}
5. Clean and disinfect frequently touched objects and surfaces {'\n\n'}
6. Avoid close contact with people who are sick. Put distance between yourself and other people. {'\n\n'}
7. Those who are 60 and older, or with a health condition or a weakened immune system should limit outings and avoid community events {'\n\n'}
8. Please do not ride Muni if you are feeling ill, except as necessary to seek medical care after consulting with your medical provider.

{'\n\n'}  COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.{'\n\n'}

Most common symptoms:{'\n\n'}
a. fever.{'\n'}
b. dry cough.{'\n'}
c. tiredness.{'\n\n'}

Less common symptoms:{'\n\n'}

a. aches and pains.{'\n'}
b. sore throat.{'\n'}
c. diarrhoea.{'\n'}
d. conjunctivitis.{'\n'}
e. headache.{'\n'}
f. loss of taste or smell.{'\n'}
g. a rash on skin, or discolouration of fingers or toes.{'\n\n'}

Serious symptoms:{'\n\n'}

a. difficulty breathing or shortness of breath.{'\n'}
b. chest pain or pressure.{'\n'}
c. loss of speech or movement.{'\n\n'}

What to do if you experience COVID symptoms:{'\n\n'}

1. Seek immediate medical attention if you have serious symptoms. {'\n'} 
2. Always call before visiting your doctor or health facility. {'\n'}
3. People with mild symptoms who are otherwise healthy should manage their symptoms at home. {'\n'}
4. On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days. {'\n\n'}
Stay safe!!
     </Text>
      </View>
      </ScrollView>
  );
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  imageStyle: {
    height: 200,
    width: 300,
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
  text: {
    fontSize: 25,
    color: 'gold',
    textAlign: 'center'
  }
});