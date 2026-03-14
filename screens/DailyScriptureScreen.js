import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function DailyScriptureScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* ⭐ Crown at the top ⭐ */}
      <Image
        source={require('../assets/crown-icon.png')}
        style={styles.crown}
      />

      <Text style={styles.title}>Daily Scripture</Text>
      <Text style={styles.subtitle}>A word for your day</Text>

      {/* Scripture of the Day */}
      <Text style={styles.sectionTitle}>Today’s Verse</Text>
      <Text style={styles.scripture}>
        “Be strong and courageous.  
        Do not be afraid; do not be discouraged,  
        for the Lord your God will be with you wherever you go.”  
        — Joshua 1:9
      </Text>

      {/* Reflection */}
      <Text style={styles.sectionTitle}>Reflection</Text>
      <Text style={styles.description}>
        God is reminding you that you are not walking alone.  
        Strength is not something you have to create —  
        it’s something He supplies.
      </Text>

      {/* Encouragement */}
      <Text style={styles.sectionTitle}>Encouragement</Text>
      <Text style={styles.description}>
        Whatever you face today, face it knowing you are covered,  
        guided, and strengthened by the One who never leaves you.
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
  scripture: {
    fontSize: 18,
    color: '#b19cd9',
    fontStyle: 'italic',
    lineHeight: 26,
    marginBottom: 30,
  },
  description: {
    fontSize: 18,
    color: '#ddd',
    lineHeight: 26,
    marginBottom: 30,
  },
});
