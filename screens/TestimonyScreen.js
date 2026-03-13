import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import BackgroundWrapper from '../components/BackgroundWrapper';
import Card from '../components/Card';
import Button from '../components/Button';
import colors from '../components/ColorTheme';

export default function TestimonyScreen({ navigation }) {
  return (
    <BackgroundWrapper>
      <ScrollView contentContainerStyle={styles.container}>

        <Header title="My Testimony" />

        <Card title="Holy Steel Testimony">
          <Text style={styles.bodyText}>
            I didn’t just survive — I transformed.  
            I walked through darkness, addiction, heartbreak, loss, and spiritual warfare.  
            But God met me in every valley and lifted me into purpose.
          </Text>

          <Text style={styles.bodyText}>
            From the trap to the Bible…  
            From broken pieces to breakthrough places…  
            From “Lord help me” to “Lord use me.”
          </Text>

          <Text style={styles.bodyText}>
            My testimony is living proof that Jesus still saves, still heals,  
            still restores, and still calls His children by name.
          </Text>

          <Text style={styles.bodyText}>
            Holy Steel 2026 — this is my resurrection story.
          </Text>
        </Card>

        <Button 
          label="Back to Home" 
          onPress={() => navigation.navigate('Home')} 
        />

      </ScrollView>
    </BackgroundWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  bodyText: {
    fontSize: 16,
    color: colors.black,
    marginBottom: 12,
    lineHeight: 22,
  },
});
