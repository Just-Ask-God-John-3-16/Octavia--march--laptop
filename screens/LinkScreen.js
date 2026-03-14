import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function LinksScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ministry Links</Text>

      {/* Free Bibles Website */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => Linking.openURL('https://justaskjesus1999.sikhsinusa.org')}
      >
        <Text style={styles.buttonText}>Free Bibles (Website)</Text>
      </TouchableOpacity>

      {/* Fourthwall Store #1 */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => Linking.openURL('https://just-ask-god-shop.fourthwall.com')}
      >
        <Text style={styles.buttonText}>Just Ask God Shop</Text>
      </TouchableOpacity>

      {/* Fourthwall Store #2 */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => Linking.openURL('https://tiffany-zbi-shop.fourthwall.com')}
      >
        <Text style={styles.buttonText}>Tiffany ZBI Shop</Text>
      </TouchableOpacity>

      {/* Phone Number */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => Linking.openURL('tel:8166392600')}
      >
        <Text style={styles.buttonText}>Call: (816) 639-2600</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800020', // Burgundy covenant color
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: 'gold',
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'gold',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
