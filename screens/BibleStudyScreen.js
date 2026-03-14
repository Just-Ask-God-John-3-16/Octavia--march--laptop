import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function BibleStudyScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* ⭐ Crown at the top ⭐ */}
      <Image
        source={require('../assets/crown-icon.png')}
        style={styles.crown}
      />

      <Text style={styles.title}>Bible Study</Text>
      <Text style={styles.subtitle}>Grow deeper in the Word</Text>

      {/* Section 1 */}
      <Text style={styles.sectionTitle}>Study Focus</Text>
      <Text style={styles.description}>
        Each study session is designed to help you understand Scripture  
        with clarity, revelation, and real‑life application.
      </Text>

      {/* Section 2 */}
      <Text style={styles.sectionTitle}>Today’s Passage</Text>
      <Text style={styles.scripture}>
        “Trust in the Lord with all your heart  
        and lean not on your own understanding.”  
        — Proverbs 3:5
      </Text>

      {/* Section 3 */}
      <Text style={styles.sectionTitle}>Reflection</Text>
      <Text style={styles.description}>
        What is God asking you to trust Him with today  
        that you’ve been trying to carry alone  
        or figure out in your own strength?
      </Text>

      {/* Section 4 */}
      <Text style={styles.sectionTitle}>Application</Text>
      <Text style={styles.description}>
        Write down one thing you will surrender to God today  
        and one thing you will trust Him to guide you through.
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
  scripture: {
    fontSize: 18,
    color: '#b19cd9',
    fontStyle: 'italic',
    lineHeight: 26,
    marginBottom: 30,
  },
});
