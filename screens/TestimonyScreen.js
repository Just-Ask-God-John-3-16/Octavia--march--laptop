
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TestimonyScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Testimonies</Text>
      <Text style={styles.subtitle}>Share what God has done in your life.</Text>
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
