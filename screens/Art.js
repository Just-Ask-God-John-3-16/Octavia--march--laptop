
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function ArtScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* ⭐ Crown at the top ⭐ */}
      <Image
        source={require('../assets/crown-icon.png')}
        style={styles.crown}
      />

      <Text style={styles.title}>Art & Inspiration</Text>
      <Text style={styles.subtitle}>Where creativity meets the Spirit</Text>

      {/* Section 1 */}
      <Text style={styles.sectionTitle}>Jesus Art Pieces</Text>
      <Text style={styles.description}>
        Explore gentle, comforting visuals like The Shepherd & the Lamb,  
        Jesus walking on water, and your signature ministry pieces.
      </Text>

      {/* Section 2 */}
      <Text style={styles.sectionTitle}>Testimony Designs</Text>
      <Text style={styles.description}>
        Your breakthrough art, recovery warrior colors, and prophetic squares  
        that carry your story and your family's legacy.
      </Text>

      {/* Section 3 */}
      <Text style={styles.sectionTitle}>Creative Ministry Concepts</Text>
      <Text style={styles.description}>
        Visuals that blend faith, streetwear, revival, and bold kingdom identity.  
        Perfect for shirts, banners, and viral ministry posts.
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
