
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function PrayerScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* ⭐ Crown at the top ⭐ */}
      <Image
        source={require('../assets/crown-icon.png')}
        style={styles.crown}
      />

      <Text style={styles.title}>Prayer Room</Text>
      <Text style={styles.subtitle}>A quiet place to talk with God</Text>

      <Text style={styles.sectionTitle}>Daily Prayer</Text>
      <Text style={styles.prayerText}>
        Father God, thank You for Your presence.  
        Thank You for guiding me, protecting me, and covering my family.  
        Lead me today with clarity, peace, and purpose.  
        In Jesus’ name, Amen.
      </Text>

      <Text style={styles.sectionTitle}>Scripture of Strength</Text>
      <Text style={styles.scripture}>
        “The Lord is my light and my salvation — whom shall I fear?”  
        — Psalm 27:1
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
  prayerText: {
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
    marginBottom: 40,
  },
});
