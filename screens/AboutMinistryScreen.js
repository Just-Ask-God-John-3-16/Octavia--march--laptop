import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import BackgroundWrapper from '../components/BackgroundWrapper';
import Card from '../components/Card';
import Button from '../components/Button';
import colors from '../components/ColorTheme';

export default function AboutMinistryScreen({ navigation }) {
  return (
    <BackgroundWrapper>
      <ScrollView contentContainerStyle={styles.container}>

        <Header title="About the Ministry" />

        <Card title="Just Ask God Ministries">
          <Text style={styles.bodyText}>
            Just Ask God Ministries is a faith-driven movement dedicated to healing,
            restoration, recovery, and spiritual growth. We believe that no matter
            where you come from, God can meet you right where you are.
          </Text>

          <Text style={styles.bodyText}>
            Our mission is to provide prayer, support, scripture, mentorship, and
            community for anyone seeking a deeper relationship with Christ.
          </Text>
        </Card>

        <Card title="Our Purpose">
          <Text style={styles.bodyText}>
            • To uplift those in recovery  
            • To offer prayer and spiritual guidance  
            • To share testimony and hope  
            • To build a safe space for healing  
            • To spread the Gospel with love and truth  
          </Text>
        </Card>

        <Card title="Founder">
          <Text style={styles.bodyText}>
            Founded by Tiffany Saunders, this ministry was birthed from a powerful
            testimony of survival, transformation, and Holy Spirit fire.  
            Tiffany’s journey is living proof that God still restores, still heals,
            and still calls His children into purpose.
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
