
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function RecoveryScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* ⭐ Crown at the top ⭐ */}
      <Image
        source={require('../assets/crown-icon.png')}
        style={styles.crown}
      />

      <Text style={styles.title}>Recovery & Strength</Text>
      <Text style={styles.subtitle}>Your testimony carries power</Text>

      {/* Section 1 */}
      <Text style={styles.sectionTitle}>You Are Not Alone</Text>
      <Text style={styles.description}>
        Recovery is not weakness — it is courage, honesty, and spiritual  
        strength rising from the ashes. Your story matters. Your voice  
        matters. Your healing matters.
      </Text>

      {/* Section 2 */}
      <Text style={styles.sectionTitle}>Daily Strength Declaration</Text>
      <Text style={styles.declaration}>
        “I am covered. I am chosen. I am protected.  
        I am not who I used to be — I am who God is shaping me to become.”
      </Text>

      {/* Section 3 */}
      <Text style={styles.sectionTitle}>Scripture for Warriors</Text>
      <Text style={styles.scripture}>
        “No weapon formed against you shall prosper.”  
        — Isaiah 54:17
      </Text>

      {/* Section 4 */}
      <Text style={styles.sectionTitle}>Encouragement</Text>
      <Text style={styles.description}>
        Every step forward counts. Every moment of honesty is healing.  
        Every prayer is strength. You are walking in victory, even on  
        the days you don’t feel it.
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
  declaration: {
    fontSize: 18,
    color: '#ff4444',
    fontWeight: 'bold',
    lineHeight: 28,
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
