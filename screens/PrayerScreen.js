
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PrayerScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prayer Requests</Text>
      <Text style={styles.subtitle}>Submit your prayer and we will stand with you.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#800020',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 10,
    color: '#000000',
  },
});
