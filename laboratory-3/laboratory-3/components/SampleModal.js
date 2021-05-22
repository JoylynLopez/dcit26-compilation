//BSCS 3-4
//Chan, Alexander Cane C.
//CO, ANGELICA MARIE E.
//LOPEZ, JOYLYN M.
//Mojica, Vanessa Jane A>


import * as React from 'react';
import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Modal,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';

const SampleModal = (props) => {
  return (
    <Modal
      style={{ alignContent: 'center' }}
      visible={props.visible}
      animationType="slide">
      <ImageBackground
        style={styles.imagebackgroundStyle}
        source={{
          uri: 'https://media.giphy.com/media/GamCfZsqviPaE/giphy.gif',
        }}>
        <ScrollView style={styles.screen}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: 'https://kcp-wpengine.netdna-ssl.com/wp-content/uploads/2012/08/Hachiko-statue-1024x683.jpg',
            }}
          />
          <Text style = {{textAlign: 'center', fontWeight: 'bold'}}>
          Hachiko{'\n\n'}
          The True Story of a Loyal Dog{'\n\n'}
          Pamela S. Tuner{'\n\n'}
          </Text>
          <Text style = {styles.text}>
              {'\n'}     There is a statue of my old friend at the entrance to Shibuya Station. His bronze feet are bright and shiny, polished by thousands of friendly hands. There is a sign that says, simply, "Loyal dog Hachiko." I close my eyes and remember the day we met, so long ago. {'\n\n'}

	{'\n'}     When I was six years old, my family moved to a little house in Tokyo near Shibuya train station. One day I begged Mama to take me to meet Papa as he came home on the afternoon train. Together we walked to the station. {'\n\n'}
 
	{'\n'}     It was spring, and the day was clear and cold. Businessmen strode about, hurrying home or to catch another train. Mama and I had stopped near the station entrance when I noticed the dog. {'\n\n'}

	{'\n'}     He was sitting quietly, all alone, by a newspaper stand. He had thick, cream-colored fur, small pointed ears, and a broad, bushy tail that curved up over his back. I wondered if the dog was a stray, but he was wearing a nice leather harness and looked healthy and strong.{'\n\n'}

	{'\n'}     Just then, Papa appeared. He was chatting with an older man. The dog bounded over to the man, his entire body wiggling and quivering with delight. Papa introduced us to the older man. "Dr. Ueno works with me at Tokyo Imperial University."{'\n\n'}

	{'\n'}     "What is your dog's name?" I asked timidly. {'\n\n'}

	{'\n'}     The dog was beautiful, but his sharp face reminded me of a wolf's. I grabbed Mama's kimono and stepped behind her, just in case. "Don't be afraid," said Dr. Ueno kindly. "This is Hachiko. He is big, but still a puppy. He walks me to the station every morning and waits for me to come home every afternoon."{'\n\n'}

	{'\n'}     Hachiko stood wagging his tail next to Dr. Ueno. I reached out to touch him, and he bounced forward and sniffed my face. {'\n\n'}

	{'\n'}     I reached out and touched Hachiko gently on the shoulder. "His fur is so thick and soft," I said. "Like a bear's."{'\n\n'}

	{'\n'}     Dogs like Hachiko once hunted bears in the north, where it is very cold and snow," said Dr. Ueno, kneeling down next to me and rubbing Hachiko's ears.{'\n\n'}

	{'\n'}     From that day on, I went to the station almost every afternoon. But I no longer went to see the trains. I went to see Hachiko. He was always there, waiting near the newspaper stand. when it was cold, I would bury my face in the thick ruff of creamy fur around his neck. {'\n\n'}

	{'\n'}     One day in May, I was waiting at the station with Hachiko. The moment I saw Papa, I knew something was wrong. He was alone, and he walked hunched over, staring sadly at the gray pavement under his feet. Hachiko's bright brown eyes followed us as we walked away, but he stayed behind, waiting for Dr. Ueno.{'\n\n'}

	{'\n'}     When we got home, Papa told us that Dr. Ueno had died that morning at the university. I was stunned. "But what will happen to Hachiko?" I asked, blinking hard to keep the tears back. "What will he do?"{'\n\n'}

	{'\n'}     "I don't know," said Papa. "Perhaps Dr. Ueno's relatives will take him."  

	{'\n'}     "What about tonight?" I asked.{'\n\n'}

	{'\n'}     "Can we go see if he is all right?"{'\n\n'}

	{'\n'}     Papa was very sad and tired, but he walked with me back to Shibuya Station. Hachiko was curled up by the newspaper stand. He wagged his tail when he saw us. Papa and I gave him water in an old chipped bowl and some food. Hachiko ate and drank, but he kept looking up toward the station entrance for Dr. Ueno. Papa and I left ever sadder than we had come. {'\n\n'}

	{'\n'}     The next day, I went back to check on Hachiko, but he was not there. Papa told me that Hachiko had been taken several miles away to live with some of Dr. Ueno's relatives. "But I'll never see him again!" I cried. "Why can't he live with us?"{'\n\n'}

	{'\n'}     "Hachiko belongs to Dr. Ueno's relatives, now that Dr. Ueno is dead. Hachiko is better off having a home than sitting at a train station." said Papa {'\n\n'}

	{'\n'}     But Hachiko had other ideas. A few days later he was back at Shibuya Station, patiently waiting, his brown eyes fixed on the entrance. Hachiko had run back to his old home, and from there to Shibuya Station. Mama and Papa let me take food and water to Hachiko every day. {'\n\n'}

	{'\n'}     Other people at the station took an interest in Hachiko. One day I saw an old man filling Hachiko's water bowl as Hachiko licked his hand. {'\n\n'}

	{'\n'}     "Are you young Kentaro?" the old man asked.{'\n\n'}

	{'\n'}     I nodded. "I'm Mr. Kobavashi. I was Dr. Ueno's gardener. Dr. Ueno told me that you and Hachiko often wait for the afternoon train together." {'\n\n'}

	{'\n'}     "Do you still take care of the house where Dr. Ueno lived." I asked.{'\n\n'}

	{'\n'}     "Yes," said Mr. Kobayasi. "Hachiko comes back to the house every night to sleep on the porch. But in the morning he walks to the station just like he did with Dr. Ueno. When the last train leaves the station, he returns home." {'\n\n'}

	{'\n'}     As the years passed and Hachiko got older, he became very stiff and could barely walk to Shibuya Station. But he still went, every day. People began collecting money to build a statue of Hachiko at the station. Papa, Mama, and I all gave money and we were very happy when the statue was placed next to the spot Hachiko had waited for so many years. {'\n\n'}

	{'\n'}     One chilly morning I woke to the sound of Mama crying. "What's wrong?" I asked as I stumbled into the kitchen. Papa sat silently at the table, and Mama turned her tearstained face to me.{'\n\n'}

	{'\n'}     "Hachiko died last night at Shibuya Station," she choked. "Still waiting for Dr. Ueno." {'\n\n'}

	{'\n'}     Later that day we went to the station. To our great surprise, Hachiko's spot near the newspaper stand was covered in flowers placed there by his many friends.{'\n\n'}

	{'\n'}     Old Mr. Kobayashi was there. He shuffled over and put a hand on my shoulder. {'\n\n'}

	{'\n'}     The big bronze statue of Hachiko is a very famous meeting place. Shibuya Station is enormous now, and hundreds of thousands of people travel through it every day. People always say to each other, "Let's meet at Hachiko." Today Hachiko is a place were friends and family long separated come together again.
          </Text>
        </ScrollView>
        <View style = {styles.button}>
        <Button color = 'lightgreen' title = "CLOSE" onPress={props.onClose}/>
        </View>
      </ImageBackground>
    </Modal>
  );
};

const styles = StyleSheet.create({
  screen: {
    marginHorizontal: '10%',
    backgroundColor: '#ffff',
    alignItems: 'center',
    opacity: 0.8,
  },

  imagebackgroundStyle: {
    height: '100%',
    width: '100%',
  },

  imageStyle: { 
    marginHorizontal:'2%',
    height: 250,
    width: 300,
  },

  text: {
    textAlign: 'justify',
    marginHorizontal: '5%'
  },

  button: {
    height: '5%',
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '40%',
  },
});

export default SampleModal;
