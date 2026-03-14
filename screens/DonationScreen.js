import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

export default function DonationScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* ⭐ Crown at the top ⭐ */}
      <Image
        source={require('../assets/crown-icon.png')}
        style={styles.crown}
      />

      <Text style={styles.title}>Give / Donate</Text>
      <Text style={styles.subtitle}>Sow into the ministry</Text>

      {/* Message */}
      <Text style={styles.description}>
        Your giving helps support outreach, free Bibles, recovery support,  
        ministry materials, and the mission God placed on your heart.  
        Thank you for sowing into good ground.
      </Text>

      {/* Donation Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => Linking.openURL('https://your-donation-link-here.com')}
      >
        <Text style={styles.buttonText}>Give Online</Text>
      </TouchableOpacity>

      {/* CashApp */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => Linking.openURL('https://cash.app/$YourCashTag')}
      >
        <Text style={styles.buttonText}>CashApp</Text>
      </TouchableOpacity>

      {/* Contact */}
      <Text style={styles.sectionTitle}>Need Help?</Text>
      <Text style={styles.contact}>
        Call or text the ministry line:  
        (816) 639-2600
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
  description: {
    fontSize: 18,
    color: '#ddd',
    lineHeight: 26,
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#800080',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  sectionTitle: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 10,
    alignSelf
