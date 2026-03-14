import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function AboutMinistryScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* ⭐ Crown at the top ⭐ */}
      <Image
        source={require('../assets/crown-icon.png')}
        style={styles.crown}
      />

      <Text style={styles.title}>About the Ministry</Text>
      <Text style={styles.subtitle}>The heart behind the mission</Text>

      {/* Mission */}
      <Text style={styles.sectionTitle}>Our Mission</Text>
      <Text style={styles.description}>
        Just Ask God Ministries exists to bring hope, healing, and clarity  
        to those seeking God in their everyday lives.  
        Through prayer, scripture, creativity, and testimony,  
        we help people reconnect with the One who never left them.
      </Text>

      {/* Vision */}
      <Text style={styles.sectionTitle}>Our Vision</Text>
      <Text style={styles.description}>
        To build a global ministry that blends faith, art, recovery,  
        and community support — offering free Bibles, spiritual guidance,  
        and creative resources that uplift and transform lives.
      </Text>

      {/* Values */}
      <Text style={styles.sectionTitle}>Core Values</Text>
      <Text style={styles.description}>
        • Faith over fear  
        • Healing through honesty  
        • Creativity as worship  
        • Recovery with dignity  
        • Legacy, family, and spiritual identity  
      </Text>

      {/* Contact */}
      <Text style={styles.sectionTitle}>Contact</Text>
      <Text style={styles.description}>
        Ministry Phone: (816) 639-2600  
        Email: Justaskgod1999@gmail.com  
      </Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 80,
    paddingHorizontal: 20,
  },
  crown: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#ccc',
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  description: {
    fontSize: 18,
    color: '#ddd',
    lineHeight: 26,
    marginBottom: 30,
  },
});
