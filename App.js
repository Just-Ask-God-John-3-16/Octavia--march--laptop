import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Just Ask God Ministries</Text>
      <Text style={styles.subtitle}>Octavia • March Laptop Build</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#800020', // Burgundy covenant color
  },
  subtitle: {
    fontSize: 16,
    marginTop: 10,
    color: '#000000',
  },
});
